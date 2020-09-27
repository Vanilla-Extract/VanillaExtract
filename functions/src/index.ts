// Module Data
import { addModules } from "./modules";
import { addIconModules } from "./modules/iconModules";
import { addOptionsBG } from "./modules/optionsBGModules";
import { addMenuPanorama } from "./modules/panoramaModules";

// Archiver
import * as archiver from 'archiver';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

// Usefull tools
import { v4 as uuidv4 } from 'uuid';

// Express
// import * as express from "express";
// const app = express();
// const port: number = 3000;
// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Firebase
import * as functions from 'firebase-functions';
import { Bucket } from "@google-cloud/storage";
import * as admin from 'firebase-admin';
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: "faithfultweaks-app.appspot.com"
});

// Delete all the genrated packs every day (ABOUT MIDNIGHT EST)
exports.deletePacks = functions.pubsub.schedule('0 4 * * *').onRun(async (cxt) => {
    const bucket = admin.storage().bucket(); // Storage bucket

    // Delete everything in FaithfulTweaks/
    bucket.deleteFiles({
        prefix: 'FaithfulTweaks/'
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('All the zip files FaithfulTweaks/ have been deleted');
        }
    });

});

// app.post('/', ----- EXPRESS STUFF
// Create a zip file from file in storage ----- CLOUD FUNCTION -----
exports.makePack = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', process.env.NODE_ENV !== 'production' ? '*' : 'https://faithfultweaks.com');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Content-Type', 'application/json');

    const bucket: Bucket = admin.storage().bucket(); // Storage bucket
    const tempFilePath = path.join(os.tmpdir(), 'texturepack.zip'); // Zip path

    // Get body data
    const format: string = req.body.format;
    const modules: string[] = req.body.modules;
    const iconModules: string[] = req.body.iconModules;
    const optionsBackground: string = req.body.optionsBackground;
    const panoOption: string = req.body.panoOption;

    // ----- CREATE THE ARCHIVE -----
    const output = fs.createWriteStream(tempFilePath); // create a file to stream archive data to.
    // init zip file
    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });

    // Catch warnings
    archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
        console.log("WARNING: "+err);
    } else {
        // throw error
        throw err;
    }
    });

    archive.on('error', (err) => { throw err; }); // Catch errors

    archive.pipe(output); // pipe archive data to the file


    // ----- ADD FILES TO THE ARCHIVE -----
    archive.append(mcMeta(format), {name: 'pack.mcmeta'}); // add mcmeta file
    archive.append(moduleSelection(format, modules, iconModules, optionsBackground, panoOption), {name: 'modules.txt'}); // add modules.txt file
    archive.append(creditsTxt, {name: 'credits.txt'}); // add credits.txt file
    
    // Add pack icon
    // await bucket.file('packfiles/pack.png').download().then((data) => {
    //     return archive.append(data[0], {name: 'pack.png'});
    // });
    archive.file(path.join('images', 'pack.png'), {name: 'pack.png'});
    
    if (modules !== undefined && modules !== null) {
        await addModules(format, archive, modules, bucket); // Add modules to the pack
    }

    if (iconModules !== undefined && iconModules !== null) {
        await addIconModules(iconModules, archive, bucket); // Add icon modules to icons.png
    }

    if (optionsBackground !== undefined && optionsBackground !== null) {
        await addOptionsBG(optionsBackground, archive, bucket); // Add options background
    }
    
    if (panoOption !== undefined && panoOption !== null) {
        await addMenuPanorama(panoOption, archive, bucket); // Add menu panorama
    }

    await archive.finalize(); // finalize the archive

    // ----- UPLOAD THE ARCHIVE -----
    const fileUUID = uuidv4();
    const tokenUUID = uuidv4();

    const newPackPath = path.join('FaithfulTweaks', fileUUID + '.zip'); // New file upload path

    // Metadata
    const metadata = {
        contentType: 'application/zip',
        metadata: {
            firebaseStorageDownloadTokens: tokenUUID,
        }
    };
    
    // Log and upload when file has been made
    output.on('close', async () => {
        console.log('Archiver has been finalized and the output file descriptor has closed. File size: ' + archive.pointer() + ' bytes');
        
        // Actual upload
        await bucket.upload(tempFilePath, {
            destination: newPackPath,
            metadata: metadata,
        }).then((data) => {
            const file = data[0];
            // Respond with URL
            res.status(200).send({ "url": "https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + tokenUUID });
            fs.unlinkSync(tempFilePath); // Unlink file
            return;
        });
    });

    output.on('end', () => { console.log('Data has been drained'); }); // Log when file is drained

    
});

// Make the mcmeta file
function mcMeta(format: string) {
    let formatStr = format;

    // Get pack format from version
    let packFormat: number;
    if (format === "1.8") {
        packFormat = 1;
    } else if (format === "1.9" || format === "1.10") {
        packFormat = 2;
    } else if (format === "1.11" || format === "1.12") {
        packFormat = 3;
    } else if (format === "1.13" || format === "1.14") {
        packFormat = 4;
    } else if (format === "1.15" || format === "1.16") {
        packFormat = 5;
    } else if (format === "1.16.2") {
        packFormat = 6;
    } else {
        packFormat = 1
        formatStr = "Error making pack";
    }

    return (
`{
    "pack": {
        "pack_format": `+packFormat+`,
        "description": "§aFaithful Tweaks §6- §c`+formatStr+`\\n§b§nfaithfultweaks.com"
    }
}`
    );
}

// Make the modules.txt file
function moduleSelection(format: string, modules: string[], iconModules: string[], optionsBackground: string, panoOption: string) {
    // Make string of modules
    let modStr = '';
    if (modules !== undefined && modules !== null) {
        modStr = modStr + '\nPacks:\n';
        modules.forEach((modName) => {
            modStr = modStr + '    '+modName+'\n';
        });
    }

    // Make string of HUD modules
    let hudStr = '';
    if (iconModules !== undefined && iconModules !== null) {
        hudStr = hudStr + '\nHUD Packs:\n';
        iconModules.forEach((hudName) => {
            hudStr = hudStr + '    '+hudName+'\n';
        });
    }

    // Make string with options background
    let optionsStr = '';
    if (optionsBackground !== undefined && optionsBackground !== null) {
        optionsStr = optionsStr + '\nOptions Background:\n';
        optionsStr = optionsStr + '    '+optionsBackground+'\n';
    }

    // Make string with options background
    let panoStr = '';
    if (panoOption !== undefined && panoOption !== null) {
        panoStr = panoStr + '\nPanorama Background:\n';
        panoStr = panoStr + '    '+panoOption+'\n';

    }

    return ('Faithful Tweaks generated pack\nVersion: '+format+'\n'+modStr+hudStr+optionsStr+panoStr);
}

// The credits.txt file contents
const creditsTxt = `Credits:
Vanilla Tweaks by Xisumavoid: https://www.xisumavoid.com/vanillatweaks
Faithful Textures by xMrVizzy: https://faithful.team

This pack is a modification of The Faithful 32x pack. 
Modifications are based off of/inspired by the packs by Vanilla tweaks.`

// Have express app listen on the set port
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });
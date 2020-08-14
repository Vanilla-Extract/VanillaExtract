// Module Data
const mcModules = require("./modules.js");
const mcIconModules = require("./iconModules.js");
const optionsBG = require("./optionsBGModules.js");
const menuPanorama = require("./panoramaModules.js");


// Archiver
const archiver = require('archiver');
const fs = require('fs');
const os = require('os');
const path = require('path');

// Usefull tools
const { v4: uuidv4 } = require('uuid');

// Firebase
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp({
    storageBucket: "faithfultweaks.appspot.com"
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

// Create a zip file from file in storage ----- CLOUD FUNCTION -----
exports.makePack = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://faithfultweaks.web.app');
    res.set('Content-Type', 'application/json');

    const bucket = admin.storage().bucket(); // Storage bucket
    const tempFilePath = path.join(os.tmpdir(), 'texturepack.zip'); // Zip path

    // Get body data
    const format = Number(req.body.format);
    const modules = req.body.modules;
    const iconModules = req.body.iconModules;
    const optionsBackground = req.body.optionsBackground;
    const panoOption = req.body.panoOption;

    // ----- CREATE THE ARCHIVE -----
    let output = fs.createWriteStream(tempFilePath); // create a file to stream archive data to.
    // init zip file
    let archive = archiver('zip', {
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
    
    // Download and add pack icon
    await bucket.file('packfiles/pack.png').download().then((data) => {
        return archive.append(data[0], {name: 'pack.png'});
    });
    
    if (modules !== undefined && modules !== null) {
        await mcModules.addModules(format, archive, modules, bucket); // Add modules to the pack
    }

    if (iconModules !== undefined && iconModules !== null) {
        await mcIconModules.addIconModules(iconModules, archive, bucket); // Add icon modules to icons.png
    }

    if (optionsBackground !== undefined && optionsBackground !== null) {
        await optionsBG.addModules(optionsBackground, archive, bucket); // Add options background
    }
    
    if (panoOption !== undefined && panoOption !== null) {
        await menuPanorama.addModules(panoOption, archive, bucket); // Add menu panorama
    }

    archive.finalize(); // finalize the archive

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
function mcMeta(format) {
    // Get version from pack format
    let ver;
    if (format === 1) {
        ver = "1.6.1 - 1.8.9";
    } else if (format === 2) {
        ver = "1.9 - 1.10.2";
    } else if (format === 3) {
        ver = "1.11 - 1.12.2";
    } else if (format === 4) {
        ver = "1.13 - 1.14.4";
    } else if (format === 5) {
        ver = "1.15 - 1.16.1";
    } else {
        ver = "error making pack"
    }

    return (
`{
    "pack": {
        "pack_format": `+format+`,
        "description": "§aFaithful Tweaks §6- §c`+ver+`\\n§b§nfaithfultweaks.web.app"
    }
}`
    );
}

// Make the modules.txt file
function moduleSelection(format, modules, iconModules, optionsBackground, panoOption) {
    // Get version from pack format
    let ver;
    if (format === 1) {
        ver = "1.6.1 - 1.8.9";
    } else if (format === 2) {
        ver = "1.9 - 1.10.2";
    } else if (format === 3) {
        ver = "1.11 - 1.12.2";
    } else if (format === 4) {
        ver = "1.13 - 1.14.4";
    } else if (format === 5) {
        ver = "1.15 - 1.16.1";
    } else {
        ver = "error making pack"
    }

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

    return ('Faithful Tweaks generated pack\nVersion: '+ver+'\n'+modStr+hudStr+optionsStr+panoStr);
}

// The credits.txt file contents
const creditsTxt = `Credits:
Vanilla Tweaks by Xisumavoid: https://www.xisumavoid.com/vanillatweaks
Faithful Textures by xMrVizzy: https://faithful.team

This pack is a modification of The Faithful 32x pack. 
Modifications are based off of/inspired by the packs by Vanilla tweaks.`
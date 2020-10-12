// Module Data
import { addModules } from "./modules";
import { addIconModules } from "./iconModules";
import { addOptionsBG } from "./optionsBGModules";
import { addMenuPanorama } from "./panoramaModules";

// Archiver
import * as archiver from 'archiver';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

// Usefull tools
import { nanoid } from 'nanoid';

// Dotenv
import * as dotenv from "dotenv";
dotenv.config();

// Dropbox
import { Dropbox } from 'dropbox';
const dbx = new Dropbox ({ accessToken: process.env.DROPBOX_TOKEN }); // Dropbox instance

// Express
import * as express from "express";
const app = express();
const port: number = process.env["NODE_ENV"] !== 'production' ? 5000 : 443; // 5000 local 443 deployed (do whatever you want just use https im production please)
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Create a zip file from file in storage ----- CLOUD FUNCTION -----
app.post('/makePack', async (req, res) => {
    res.set('Access-Control-Allow-Origin', process.env.NODE_ENV !== 'production' ? '*' : 'https://faithfultweaks.com');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Content-Type', 'application/json');

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
    archive.file(path.join('images', 'pack.png'), {name: 'pack.png'});
    
    if (modules !== undefined && modules !== null) {
        await addModules(format, archive, modules); // Add modules to the pack
    }

    if (iconModules !== undefined && iconModules !== null) {
        await addIconModules(iconModules, archive); // Add icon modules to icons.png
    }

    if (optionsBackground !== undefined && optionsBackground !== null) {
        await addOptionsBG(optionsBackground, archive); // Add options background
    }
    
    if (panoOption !== undefined && panoOption !== null) {
        await addMenuPanorama(panoOption, archive); // Add menu panorama
    }

    await archive.finalize(); // finalize the archive

    // ----- UPLOAD THE ARCHIVE -----
    const fileID = nanoid(5);

    const newPackPath = path.join('VanillaExtract/' + fileID + '.zip'); // New file upload path
    
    // Log and upload when file has been made
    output.on('close', async () => {
        console.log('Archiver has been finalized and the output file descriptor has closed. File size: ' + archive.pointer() + ' bytes');
        
        // Actual upload
        await dbx.filesUpload({path: newPackPath, contents: fs.readFileSync(tempFilePath)})
        .then(async () => {
            await dbx.filesGetTemporaryLink({path: newPackPath})
            .then(file => {
                console.log(file.link);
                
                res.status(200).send({ "url": file.link });
                fs.unlinkSync(tempFilePath);
            })
            .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
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
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
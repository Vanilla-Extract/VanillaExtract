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
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);

// Dotenv
import * as dotenv from "dotenv";
dotenv.config();

// Dropbox
import { Dropbox } from 'dropbox';
const dbx = new Dropbox ({ accessToken: process.env.DROPBOX_TOKEN }); // Dropbox instance

// Express
import * as express from 'express';
import * as cors from 'cors';
const app = express();
const port: number = process.env["NODE_ENV"] !== 'production' ? 5000 : 443; // 5000 local 443 deployed (do whatever you want just use https im production please)
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// CORS
app.use(cors({
    origin: process.env.NODE_ENV !== 'production' ? '*' : 'https://faithfultweaks.com',
    allowedHeaders: 'Content-Type',
    methods: "POST",
}));

// serve a get request to keep the server alive with uptime robot
app.get("/keepalive", (req, res) => res.send("hello world"))

// Create a zip file from file in storage ----- CLOUD FUNCTION -----
app.post('/makePack', async (req, res) => {
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
    const fileID = nanoid();
    // 'Apps', 'VanillaExtract',
    const newPackPath = `/VanillaExtract_${fileID}.zip`; // New file upload path
    
    // Log and upload when file has been made
    output.on('close', () => {
        console.log('Archiver has been finalized and the output file descriptor has closed. File size: ' + archive.pointer() + ' bytes');
        
        fs.readFile(tempFilePath, (err, contents) => {
            if (err) {
                console.log('Error: ', err);
            }

            // Actual upload
            dbx.filesUpload({path: newPackPath, contents: contents})
            .then(async () => {
                dbx.filesGetTemporaryLink({path: newPackPath})
                .then((response: any) => {                    
                    res.status(200).send({ "url": response.result.link });
                    fs.unlinkSync(tempFilePath);
                })
                .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
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
        "description": [{"text":"Vanilla Extract","color":"#2AC77B"},{"text":" `+formatStr+`\nvanilla-extract.tk","color":"gray"}]
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

    return ('Vanilla Extract generated pack\nVersion: '+format+'\n'+modStr+hudStr+optionsStr+panoStr);
}

// The credits.txt file contents
const creditsTxt = `Credits:
Vanilla Tweaks by Xisumavoid: https://www.xisumavoid.com/vanillatweaks
Faithful Textures by xMrVizzy: https://faithful.team

This pack is a modification of The Faithful 32x pack. 
Modifications are based off of/inspired by the packs by Vanilla tweaks.

Credits for Individual Packs:
- Furnace Animations:
    The Following Assets Were Used With Permission Of The Creators From The Following Resource Packs:

    Animated Furnace: https://www.planetminecraft.com/texture-pack/animated-furnace/                                            🎨The Sailor
    Front Furnace Texture (animation)

    Animated Furnaces: https://www.planetminecraft.com/texture-pack/animated-furnaces-4718601/                                   🎨Daggsy
    Bottom Blast Furnace Texture (still)

    Clear Vanilla: https://www.planetminecraft.com/texture-pack/clear-vanilla-resource-pack/                                 🎨TalMelamed 
    Side Furnace Texture (still) -Top Furnace Texture (still)

- Visually Stacked Items:
    Vaderman24
`

// Have express app listen on the set port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Module Data
var mcModules = require("./modules.js");

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
const firebaseApp = require('./firebaseadmin.js');

// Create a zip file from file in storage ----- CLOUD FUNCTION -----
exports.makePack = functions.https.onRequest(async (req, res) => {
    const bucket = admin.storage().bucket(); // Storage bucket
    const tempFilePath = path.join(os.tmpdir(), 'texturepack.zip'); // Zip path
    const format = req.body.format;
    const modules = req.body.modules;

    // ----- CREATE THE ARCHIVE -----
    let output = fs.createWriteStream(tempFilePath); // create a file to stream archive data to.
    // init zip file
    let archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });
    output.on('close', () => { console.log('Archiver has been finalized and the output file descriptor has closed. File size: ' + archive.pointer() + ' bytes'); }); // Log when file has been made
    output.on('end', () => { console.log('Data has been drained'); }); // Log when file is drained

    // Catch warnings
    archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
        console.log("WARNING: "+err);
    } else {
        // throw error
        throw err;
    }
    });

    archive.on('error', (err) => { throw err; }); // catch errors

    archive.pipe(output); // pipe archive data to the file


    // ----- ADD FILES TO THE ARCHIVE -----
    archive.append(mcMeta(format), {name: 'pack.mcmeta'}); // add mcmeta file
    // Download and add pack icon
    await bucket.file('packfiles/pack.png').download().then((data) => {
        const contents = data[0];
        archive.append(contents, {name: 'pack.png'});
    });
    
    await mcModules.addModules(format, archive, modules); // Add modules to the pack
    
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

    // Actual upload
    const file = await bucket.upload(tempFilePath, {
        destination: newPackPath,
        metadata: metadata,
    }).then(function(data) {
        const file = data[0];
        return Promise.resolve("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + tokenUUID);
    });

    // ----- FINISH THE FUNCTION -----
    // Respond with file URL
    res.json({
        url: file
    });

    // Clear zip from mem and return
    fs.unlinkSync(tempFilePath);
    return;
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
        return;
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
// Archiver
const archiver = require('archiver');
const fs = require('fs');
const os = require('os');
const path = require('path');

// Usefull tools
const { v4: uuidv4 } = require('uuid');
const semver = require('semver');

// Firebase
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp({
    storageBucket: "faithfultweaks.appspot.com"
});

// Create a zip file from file in storage ----- CLOUD FUNCTION -----
exports.makePack = functions.https.onRequest(async (req, res) => {
    const bucket = admin.storage().bucket(); // Storage bucket
    const tempFilePath = path.join(os.tmpdir(), 'texturepack.zip'); // Zip path

    // ----- CREATE THE ARCHIVE -----
    var output = fs.createWriteStream(tempFilePath); // create a file to stream archive data to.
    // init zip file
    var archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });
    output.on('close', () => { console.log('Archiver has been finalized and the output file descriptor has closed. File size: ' + archive.pointer() + ' bytes'); }); // Log when file has been made
    output.on('end', () => { console.log('Data has been drained'); }); // Log when file is drained

    // Catch warnings
    archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
        console.log("WARNING: "+err)
    } else {
        // throw error
        throw err;
    }
    });

    archive.on('error', (err) => { throw err; }); // catch errors

    archive.pipe(output); // pipe archive data to the file


    // ----- ADD FILES TO THE ARCHIVE -----
    archive.append(mcMeta('1.16.1'), {name: 'pack.mcmeta'}); // add mcmeta file

    // Download and add icon
    await bucket.file('packfiles/pack.png').download().then((data) => {
        const contents = data[0];
        archive.append(contents, {name: 'pack.png'});
    });
    
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
function mcMeta(ver) {
    var format;
    if (semver.satisfies(ver, "<=1.8.9")) {
        format = 1;
    } else if (semver.satisfies(ver, ">=1.9 <=1.10.2")) {
        format = 2;
    } else if (semver.satisfies(ver, ">=1.11 <=1.12.2")) {
        format = 3;
    } else if (semver.satisfies(ver, ">=1.13 <=1.14.4")) {
        format = 4;
    } else if (semver.satisfies(ver, ">=1.15 <=1.16.2")) {
        format = 5;
    } else {
        format = 0;
    }

    return (
`{
    "pack": {
        "pack_format": `+format+`,
        "description": "§aFaithful Tweaks §6- §c`+ver+`\\n§b§nwebsite.com"
    }
}`
    );
}
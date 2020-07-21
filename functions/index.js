// import mergeImages from 'merge-images';
const archiver = require('archiver');
const fs = require('fs');
const os = require('os');
const path = require('path');

const { v4: uuidv4 } = require('uuid');

const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp({
    storageBucket: "faithfultweaks.appspot.com"
});

// Create a zip file from file in storage
exports.makePack = functions.https.onRequest(async (req, res) => {
    const bucket = admin.storage().bucket(); // Storage bucket
    const tempFilePath = path.join(os.tmpdir(), 'texturepack.zip'); // Zip path
    
    var output = fs.createWriteStream(tempFilePath); // create a file to stream archive data to.

    // create zip file
    var archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });
    
    // Log when file has been made
    output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });
    
    // Log when file is drained
    output.on('end', function() {
        console.log('Data has been drained');
    });
    
    // Catch warnings
    archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
        // log warning
    } else {
        // throw error
        throw err;
    }
    });
    
    // catch errors
    archive.on('error', function(err) {
        throw err;
    });
    
    archive.pipe(output); // pipe archive data to the file
    archive.append('test', { name: 'file.txt' }); // append a file from string
    archive.finalize(); // finalize the archive

    // Upload
    const fileUUID = uuidv4();
    const tokenUUID = uuidv4();

    const newPackPath = path.join('faithful', fileUUID + '.zip'); // New file upload path

    // Upload metadata
    const metadata = {
        contentType: 'application/zip',
        metadata: {
            firebaseStorageDownloadTokens: tokenUUID,
        }
    };

    const file = await bucket.upload(tempFilePath, {
        destination: newPackPath,
        metadata: metadata,
    }).then(function(data) {
        const file = data[0];
        return Promise.resolve("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + tokenUUID);
    });

    res.json({
        url: file
    });

    return fs.unlinkSync(tempFilePath);
});
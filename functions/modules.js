// Firebase
const admin = require('firebase-admin');
const firebaseApp = require('./firebaseadmin.js');

// async for each
const asyncForEach = require('./asyncForEach.js');

// Modules
const SlicedSwords = require('./modules/SlicedSwords.js');

// Storage bucket
const bucket = admin.storage().bucket();

// Figure out which modules to add
const addModules = async function(format, archive, modules){
    if (format === 1) {
        
    } else if (format === 2) {

    } else if (format === 3) {

    } else if (format === 4) {

    } else if (format === 5) {
        await asyncForEach(modules, async (modName) => {
            if (modName === SlicedSwords.name) {
                await SlicedSwords.addToFile(SlicedSwords.format5, archive, bucket);
            } else {
                console.log(modName +" is not a real module.");
            }
        });
    }
    return;
}

// ----- EXPORTS -----
module.exports = {
    addModules: addModules
};
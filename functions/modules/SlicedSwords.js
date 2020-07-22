const path = require('path');
const asyncForEach = require('../asyncForEach.js');

const addSlicedSwords = async function(formatData, archive, bucket){
    // Add each sword to file
    await asyncForEach(formatData.files, async (fileData) => {
        await bucket.file(path.join("packfiles", formatData.packFilesPath, fileData.name)).download().then((data) => {
            const contents = data[0];
            archive.append(contents, {name: path.join(fileData.path, fileData.name)});
        });
    });
    return;
};

module.exports = {
    name: "SlicedSwords",
    addToFile: addSlicedSwords,
    format5: {
        packFilesPath: "modules/SlicedSwords/5",
        files: [
            {
                name: "diamond_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "golden_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "iron_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "netherite_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "stone_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "wooden_sword.png",
                path: "assets/minecraft/textures/item"
            },
        ]
    }
};
const path = require('path');
const asyncForEach = require('../asyncForEach.js');

const addToFile = async function(formatData, archive, bucket){
    // Add each bow to file
    await asyncForEach(formatData.files, async (fileData) => {
        await bucket.file(path.join("packfiles", formatData.packFilesPath, fileData.name)).download().then((data) => {
            const contents = data[0];
            archive.append(contents, {name: path.join(fileData.path, fileData.inPackName)});
        });
    });
    return;
};

module.exports = {
    name: "ColoredBows",
    addToFile: addToFile,
    format54: {
        packFilesPath: "modules/ColoredBows/",
        files: [
            // Bow
            {
                name: "bow.png",
                inPackName: "bow.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "bow_pulling_0.png",
                inPackName: "bow_pulling_0.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "bow_pulling_1.png",
                inPackName: "bow_pulling_1.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "bow_pulling_2.png",
                inPackName: "bow_pulling_2.png",
                path: "assets/minecraft/textures/item"
            },
            // Crossbow
            {
                name: "crossbow_standby.png",
                inPackName: "crossbow_standby.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_pulling_0.png",
                inPackName: "crossbow_pulling_0.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_pulling_1.png",
                inPackName: "crossbow_pulling_1.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_pulling_2.png",
                inPackName: "crossbow_pulling_2.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_arrow.png",
                inPackName: "crossbow_arrow.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_firework.png",
                inPackName: "crossbow_firework.png",
                path: "assets/minecraft/textures/item"
            },
        ]
    },
    format321: {
        packFilesPath: "modules/ColoredBows/",
        files: [
            {
                name: "bow_pulling_0.png",
                inPackName: "bow_pulling_0.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "bow_pulling_1.png",
                inPackName: "bow_pulling_1.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "bow_pulling_2.png",
                inPackName: "bow_pulling_2.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "bow.png",
                inPackName: "bow_standby.png",
                path: "assets/minecraft/textures/items"
            },
        ]
    },
};
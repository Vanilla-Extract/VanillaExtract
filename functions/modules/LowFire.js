const path = require('path');

const addToFile = async function(formatData, archive, bucket){
    // Add each fire texture to file
    await asyncForEach(formatData.files, async (fileData) => {
        if (fileData.name === undefined || fileData.name === null) {
            archive.append(fileData.data, {name: path.join(fileData.path, fileData.inPackName)});
        } else {
            await bucket.file(path.join("packfiles", formatData.packFilesPath, fileData.name)).download().then((data) => {
                const contents = data[0];
                archive.append(contents, {name: path.join(fileData.path, fileData.inPackName)});
            });
        }
    });
    return;
};

module.exports = {
    name: "LowFire",
    addToFile: addToFile,
    format5: {
        packFilesPath: "modules/LowFire/",
        files: [
            // Fire
            // Fire 1
            {
                name: "fire_0.png",
                inPackName: "fire_0.png",
                path: "assets/minecraft/textures/blocks",
            },
            {
                inPackName: "fire_0.png.mcmeta",
                path: "assets/minecraft/textures/blocks",
                data: `{
                    "animation": {
                        "frames": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                    }
                }`,
            },
            // Fire 1
            {
                name: "fire_1.png",
                inPackName: "fire_1.png",
                path: "assets/minecraft/textures/blocks",
            },
            {
                inPackName: "fire_1.png.mcmeta",
                path: "assets/minecraft/textures/blocks",
                data: `{
                    "animation": {
                        "frames": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                    }
                }`,
            },
            // Soul Fire
            // Soul Fire 0
            {
                name: "soul_fire_0.png",
                inPackName: "fire_0.png",
                path: "assets/minecraft/textures/blocks",
            },
            {
                inPackName: "soul_fire_0.png.mcmeta",
                path: "assets/minecraft/textures/blocks",
                data: `{
                    "animation": {
                        "frames": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                    }
                }`,
            },
            // Soul Fire 1
            {
                name: "soul_fire_1.png",
                inPackName: "soul_fire_1.png",
                path: "assets/minecraft/textures/blocks",
            },
            {
                inPackName: "soul_fire_1.png.mcmeta",
                path: "assets/minecraft/textures/blocks",
                data: `{
                    "animation": {
                        "frames": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                    }
                }`,
            },
        ]
    },
    format4: {
        packFilesPath: "modules/LowFire/",
        files: [
            // Fire 0
            {
                name: "fire_0.png",
                inPackName: "fire_0.png",
                path: "assets/minecraft/textures/blocks",
            },
            {
                inPackName: "fire_0.png.mcmeta",
                path: "assets/minecraft/textures/blocks",
                data: `{
                    "animation": {
                        "frames": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                    }
                }`,
            },
            // Fire 1
            {
                name: "fire_1.png",
                inPackName: "fire_1.png",
                path: "assets/minecraft/textures/blocks",
            },
            {
                inPackName: "fire_1.png.mcmeta",
                path: "assets/minecraft/textures/blocks",
                data: `{
                    "animation": {
                        "frames": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                    }
                }`,
            },
        ]
    },
    format321: {
        packFilesPath: "modules/LowFire/",
        files: [
            // Fire 0
            {
                name: "fire_0.png",
                inPackName: "fire_layer_0.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                inPackName: "fire_layer_0.png.mcmeta",
                path: "assets/minecraft/textures/blocks",
                data: `{
                    "animation": {}
                }`,
            },
            // Fire 1
            {
                name: "fire_1.png",
                inPackName: "fire_layer_1.png",
                path: "assets/minecraft/textures/blocks",
            },
            {
                inPackName: "fire_layer_1.png.mcmeta",
                path: "assets/minecraft/textures/blocks",
                data: `{
                    "animation": {}
                }`,
            },
        ]
    },
};
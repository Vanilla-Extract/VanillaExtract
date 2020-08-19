const path = require('path');

// Module Data
const moduleData = {
    packFilesPath: "modules/aesthetic/BlackNetherBricks",
    format65: {
        files: [
            {
                name: "chiseled_nether_bricks.png",
                inPackName: "chiseled_nether_bricks.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "cracked_nether_bricks.png",
                inPackName: "cracked_nether_bricks.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "nether_bricks.png",
                inPackName: "nether_bricks.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "nether_brick.png",
                inPackName: "nether_brick.png",
                path: "assets/minecraft/textures/item"
            },
        ]
    },
    format4: {
        files: [
            {
                name: "nether_bricks.png",
                inPackName: "nether_bricks.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "nether_brick.png",
                inPackName: "nether_brick.png",
                path: "assets/minecraft/textures/item"
            },
        ]
    },
    format321: {
        files: [
            {
                name: "nether_bricks.png",
                inPackName: "nether_bricks.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                name: "nether_brick.png",
                inPackName: "nether_brick.png",
                path: "assets/minecraft/textures/items"
            },
        ]
    },
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 1 || format === 2 || format === 3) {
        formatData = moduleData.format321
    } else if (format === 4) {
        formatData = moduleData.format4
    } else if (format === 5 || format === 6) {
        formatData = moduleData.format65
    } else {
        console.log('format not addressed');
        return;
    }

    // Add ores to file
    const promises = formatData.files.map(async (fileData, id) => {
        await bucket.file(path.join("packfiles", moduleData.packFilesPath, fileData.name)).download().then((data) => {
            return archive.append(data[0], {name: path.join(fileData.path, fileData.inPackName)});
        });
    });
    await Promise.all(promises);
}
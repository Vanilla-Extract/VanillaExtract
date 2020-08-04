const path = require('path');

// Module Data
const moduleData = {
    format5: {
        packFilesPath: "modules/SlicedSwords/",
        files: [
            {
                name: "diamond_sword.png",
                inPackName: "diamond_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "golden_sword.png",
                inPackName: "golden_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "iron_sword.png",
                inPackName: "iron_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "netherite_sword.png",
                inPackName: "netherite_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "stone_sword.png",
                inPackName: "stone_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "wooden_sword.png",
                inPackName: "wooden_sword.png",
                path: "assets/minecraft/textures/item"
            },
        ]
    },
    format4: {
        packFilesPath: "modules/SlicedSwords/",
        files: [
            {
                name: "diamond_sword.png",
                inPackName: "diamond_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "golden_sword.png",
                inPackName: "golden_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "iron_sword.png",
                inPackName: "iron_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "stone_sword.png",
                inPackName: "stone_sword.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "wooden_sword.png",
                inPackName: "wooden_sword.png",
                path: "assets/minecraft/textures/item"
            },
        ]
    },
    format321: {
        packFilesPath: "modules/SlicedSwords/",
        files: [
            {
                name: "diamond_sword_old.png",
                inPackName: "diamond_sword.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "gold_sword_old.png",
                inPackName: "gold_sword.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "iron_sword_old.png",
                inPackName: "iron_sword.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "stone_sword_old.png",
                inPackName: "stone_sword.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "wood_sword_old.png",
                inPackName: "wood_sword.png",
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
    } else if (format === 5) {
        formatData = moduleData.format5
    } else {
        console.log('format not addressed');
        return;
    }

    // Add each sword to file
    const promises = formatData.files.map(async (fileData, id) => {
        await bucket.file(path.join("packfiles", formatData.packFilesPath, fileData.name)).download().then((data) => {
            return archive.append(data[0], {name: path.join(fileData.path, fileData.inPackName)});
        });
    });
    await Promise.all(promises);
}
const path = require('path');

// Module Data
const moduleData = {
    format5: {
        packFilesPath: "modules/OreBorders/new",
        files: [
            // Blocks
            {
                name: "ancient_debris_top.png",
                inPackName: "ancient_debris_top.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "ancient_debris_side.png",
                inPackName: "ancient_debris_side.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "coal_ore.png",
                inPackName: "coal_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "diamond_ore.png",
                inPackName: "diamond_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "emerald_ore.png",
                inPackName: "emerald_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "gilded_blackstone.png",
                inPackName: "gilded_blackstone.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "gold_ore.png",
                inPackName: "gold_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "iron_ore.png",
                inPackName: "iron_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "lapis_ore.png",
                inPackName: "lapis_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "nether_gold_ore.png",
                inPackName: "nether_gold_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "nether_quartz_ore.png",
                inPackName: "nether_quartz_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "redstone_ore.png",
                inPackName: "redstone_ore.png",
                path: "assets/minecraft/textures/block"
            },
            // Nether Quartz
            {
                name: "quartz/0.png",
                inPackName: "0.png",
                path: "assets/minecraft/textures/custom/block/nether_quartz_ore"
            },
            {
                name: "quartz/1.png",
                inPackName: "1.png",
                path: "assets/minecraft/textures/custom/block/nether_quartz_ore"
            },
            {
                name: "quartz/2.png",
                inPackName: "2.png",
                path: "assets/minecraft/textures/custom/block/nether_quartz_ore"
            },
            {
                name: "quartz/3.png",
                inPackName: "3.png",
                path: "assets/minecraft/textures/custom/block/nether_quartz_ore"
            },
        ]
    },
    format4: {
        packFilesPath: "modules/OreBorders/new",
        files: [
            // Blocks
            {
                name: "coal_ore.png",
                inPackName: "coal_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "diamond_ore.png",
                inPackName: "diamond_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "emerald_ore.png",
                inPackName: "emerald_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "gold_ore.png",
                inPackName: "gold_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "iron_ore.png",
                inPackName: "iron_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "lapis_ore.png",
                inPackName: "lapis_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "nether_quartz_ore.png",
                inPackName: "nether_quartz_ore.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "redstone_ore.png",
                inPackName: "redstone_ore.png",
                path: "assets/minecraft/textures/block"
            },
            // Nether Quartz
            {
                name: "quartz/0.png",
                inPackName: "0.png",
                path: "assets/minecraft/textures/ctm/nether_quartz_ore"
            },
            {
                name: "quartz/1.png",
                inPackName: "1.png",
                path: "assets/minecraft/textures/ctm/nether_quartz_ore"
            },
            {
                name: "quartz/2.png",
                inPackName: "2.png",
                path: "assets/minecraft/textures/ctm/nether_quartz_ore"
            },
            {
                name: "quartz/3.png",
                inPackName: "3.png",
                path: "assets/minecraft/textures/ctm/nether_quartz_ore"
            },
        ]
    },
    format321: {
        packFilesPath: "modules/OreBorders/old",
        files: [
            {
                name: "coal_ore.png",
                inPackName: "coal_ore.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                name: "diamond_ore.png",
                inPackName: "diamond_ore.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                name: "emerald_ore.png",
                inPackName: "emerald_ore.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                name: "gold_ore.png",
                inPackName: "gold_ore.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                name: "iron_ore.png",
                inPackName: "iron_ore.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                name: "lapis_ore.png",
                inPackName: "lapis_ore.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                name: "quartz_ore.png",
                inPackName: "quartz_ore.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                name: "redstone_ore.png",
                inPackName: "redstone_ore.png",
                path: "assets/minecraft/textures/blocks"
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

    // Add blank ores to file
    const promises = [];
    formatData.files.forEach((fileData) => {
        promises.push(
            bucket.file(path.join("packfiles", formatData.packFilesPath, fileData.name)).download().then((data) => {
                archive.append(data[0], {name: path.join(fileData.path, fileData.inPackName)});
                return;
            })
        );
    });
    await Promise.all(promises);
    return;
}
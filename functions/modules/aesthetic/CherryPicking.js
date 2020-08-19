const path = require('path');

// Module Data
const moduleData = {
    packFilesPath: "modules/aesthetic/CherryPicking/",
    cakeTop: {
        name: "cake_top.png",
        inPackName: "cake_top.png",
    },
    cakeItem: {
        name: "cake_item.png",
        inPackName: "cake.png",
    },
    format654: {
        cakeTopPath: "assets/minecraft/textures/block",
        cakeItemPath: "assets/minecraft/textures/item",
    },
    format321: {
        cakeTopPath: "assets/minecraft/textures/blocks",
        cakeItemPath: "assets/minecraft/textures/items",
    },
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 1 || format === 2 || format === 3) {
        formatData = moduleData.format321
    } else if (format === 4 || format === 5 || format === 6) {
        formatData = moduleData.format654
    } else {
        console.log('format not addressed');
        return;
    }

    // Add cake top
    await bucket.file(path.join("packfiles", moduleData.packFilesPath, moduleData.cakeTop.name)).download().then((data) => {
        return archive.append(data[0], {name: path.join(formatData.cakeTopPath, moduleData.cakeTop.inPackName)});
    });
    // Add cake item
    await bucket.file(path.join("packfiles", moduleData.packFilesPath, moduleData.cakeItem.name)).download().then((data) => {
        return archive.append(data[0], {name: path.join(formatData.cakeItemPath, moduleData.cakeItem.inPackName)});
    });

    return;
}
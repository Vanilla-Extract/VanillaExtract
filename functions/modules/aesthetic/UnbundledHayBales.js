const path = require('path');

// Module Data
const moduleData = {
    packFilesPath: "modules/aesthetic/UnbundledHayBales/",
    name: "hay_block_side.png",
    inPackName: "hay_block_side.png",
    path654: "assets/minecraft/textures/block",
    path321: "assets/minecraft/textures/blocks",
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let pathData;
    if (format === 1 || format === 2 || format === 3) {
        pathData = moduleData.path321;
    } else if (format === 4 || format === 5 || format === 6) {
        pathData = moduleData.path654;
    } else {
        console.log('format not addressed');
        return;
    }

    // Add file
    await bucket.file(path.join("packfiles", moduleData.packFilesPath, moduleData.name)).download().then((data) => {
        return archive.append(data[0], {name: path.join(pathData, moduleData.inPackName)});
    });
}
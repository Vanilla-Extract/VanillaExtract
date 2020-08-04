const path = require('path');

// Module Data
const moduleData = {
    packFilesPath: "modules/UnobtrusiveScaffolding/",
    name: "scaffolding_top.png",
    inPackName: "scaffolding_top.png",
    path54: "assets/minecraft/textures/block",
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let pathData;
    if (format === 4 || format === 5) {
        pathData = moduleData.path54;
    } else {
        console.log('format not addressed');
        return;
    }

    // Add file
    await bucket.file(path.join("packfiles", moduleData.packFilesPath, moduleData.name)).download().then((data) => {
        return archive.append(data[0], {name: path.join(pathData, moduleData.inPackName)});
    });
}
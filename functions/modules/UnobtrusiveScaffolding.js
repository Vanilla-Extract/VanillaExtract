const path = require('path');

// Module Data
const moduleData = {
    packFilesPath: "modules/UnobtrusiveScaffolding/",
    name: "scaffolding_top.png",
    inPackName: "scaffolding_top.png",
    path654: "assets/minecraft/textures/block",
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let pathData;
    if (format === 4 || format === 5 || format === 6) {
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
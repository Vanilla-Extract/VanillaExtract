const path = require('path');

// Module Data
const moduleData = {
    packFilesPath: "modules/SidewaysNuggets/",
    name: "iron_nugget.png",
    inPackName: "iron_nugget.png",
    path654: "assets/minecraft/textures/item",
    path3: "assets/minecraft/textures/items",
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let pathData;
    if (format === 3) {
        pathData = moduleData.path3;
    } else if (format === 4 || format === 5 || format === 6) {
        pathData = moduleData.path654;
    } else {
        console.log('format not addressed');
        return;
    }

    // Add nugget
    await bucket.file(path.join("packfiles", moduleData.packFilesPath, moduleData.name)).download().then((data) => {
        return archive.append(data[0], {name: path.join(pathData, moduleData.inPackName)});
    });
}
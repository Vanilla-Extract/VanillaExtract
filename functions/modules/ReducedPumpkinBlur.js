const path = require('path');

const addToFile = async function(formatData, archive, bucket){
    // Add pumpkin overlay
    await bucket.file(path.join("packfiles", formatData.packFilesPath, formatData.file[0].name)).download().then((data) => {
        const contents = data[0];
        archive.append(contents, {name: path.join(formatData.file[0].path, formatData.file[0].inPackName)});
    });
    // Add overlay metadata
    archive.append(formatData.file[1].data, {name: path.join(formatData.file[0].path, formatData.file[0].inPackName)});
    return;
};

module.exports = {
    name: "ReducedPumpkinBlur",
    addToFile: addToFile,
    format54321: {
        packFilesPath: "modules/ReducedPumpkinBlur/",
        files: [
            {
                name: "pumpkinblur.png",
                inPackName: "pumpkinblur.png",
                path: "assets/minecraft/textures/misc"
            },
            {
                data: `{
    "texture": {
        "blur": true
    }
}`,
                inPackName: "pumpkinblur.png.mcmeta",
                path: "assets/minecraft/textures/misc"
            },
        ]
    },
};
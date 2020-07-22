const path = require('path');

const addToFile = async function(formatData, archive, bucket){
    // Add blank vignette
    await bucket.file(path.join("packfiles", formatData.packFilesPath, formatData.file.name)).download().then((data) => {
        const contents = data[0];
        archive.append(contents, {name: path.join(formatData.file.path, formatData.file.inPackName)});
    });
    return;
};

module.exports = {
    name: "NoVignette",
    addToFile: addToFile,
    format54321: {
        packFilesPath: "modules/NoVignette/",
        file: {
            name: "vignette.png",
            inPackName: "vignette.png",
            path: "assets/minecraft/textures/misc"
        },
    },
};
const path = require('path');

const addToFile = async function(formatData, archive, bucket){
    // Add options BG
    await bucket.file(path.join("packfiles", formatData.packFilesPath, formatData.file.name)).download().then((data) => {
        const contents = data[0];
        archive.append(contents, {name: path.join(formatData.file.path, formatData.file.inPackName)});
    });
    return;
};

module.exports = {
    name: "ObsidianBG",
    addToFile: addToFile,
    format54: {
        packFilesPath: "modules/Backgrounds/",
        file: {
            name: "obsidian.png",
            inPackName: "options_background.png",
            path: "assets/minecraft/textures/gui"
        },
    },
    format321: {
        packFilesPath: "modules/Backgrounds/",
        file: {
            name: "obsidian_old.png",
            inPackName: "options_background.png",
            path: "assets/minecraft/textures/gui"
        },
    },
};
const path = require('path');

// Module Data
const moduleData = {
    packFilesPath: "modules/BorderlessGlass/",
    format321: {
        path: "assets/minecraft/textures/blocks",
        files: [
            {
                name: "glass.png",
                inPackName: "glass.png",
            },
            {
                name: "black_stained_glass.png",
                inPackName: "glass_black.png",
            },
            {
                name: "blue_stained_glass.png",
                inPackName: "glass_blue.png",
            },
            {
                name: "brown_stained_glass.png",
                inPackName: "glass_brown.png",
            },
            {
                name: "cyan_stained_glass.png",
                inPackName: "glass_cyan.png",
            },
            {
                name: "gray_stained_glass.png",
                inPackName: "glass_gray.png",
            },
            {
                name: "green_stained_glass.png",
                inPackName: "glass_green.png",
            },
            {
                name: "light_blue_stained_glass.png",
                inPackName: "glass_light_blue.png",
            },
            {
                name: "light_gray_stained_glass.png",
                inPackName: "glass_light_gray.png",
            },
            {
                name: "lime_stained_glass.png",
                inPackName: "glass_lime.png",
            },
            {
                name: "magenta_stained_glass.png",
                inPackName: "glass_magenta.png",
            },
            {
                name: "orange_stained_glass.png",
                inPackName: "glass_orange.png",
            },
            {
                name: "pink_stained_glass.png",
                inPackName: "glass_pink.png",
            },
            {
                name: "purple_stained_glass.png",
                inPackName: "glass_purple.png",
            },
            {
                name: "red_stained_glass.png",
                inPackName: "glass_red.png",
            },
            {
                name: "white_stained_glass.png",
                inPackName: "glass_white.png",
            },
            {
                name: "yellow_stained_glass.png",
                inPackName: "glass_yellow.png",
            },
        ],
    },
    format54: {
        path: "assets/minecraft/textures/block",
        files: [
            {
                name: "glass.png",
                inPackName: "glass.png",
            },
            {
                name: "black_stained_glass.png",
                inPackName: "black_stained_glass.png",
            },
            {
                name: "blue_stained_glass.png",
                inPackName: "blue_stained_glass.png",
            },
            {
                name: "brown_stained_glass.png",
                inPackName: "brown_stained_glass.png",
            },
            {
                name: "cyan_stained_glass.png",
                inPackName: "cyan_stained_glass.png",
            },
            {
                name: "gray_stained_glass.png",
                inPackName: "gray_stained_glass.png",
            },
            {
                name: "green_stained_glass.png",
                inPackName: "green_stained_glass.png",
            },
            {
                name: "light_blue_stained_glass.png",
                inPackName: "light_blue_stained_glass.png",
            },
            {
                name: "light_gray_stained_glass.png",
                inPackName: "light_gray_stained_glass.png",
            },
            {
                name: "lime_stained_glass.png",
                inPackName: "lime_stained_glass.png",
            },
            {
                name: "magenta_stained_glass.png",
                inPackName: "magenta_stained_glass.png",
            },
            {
                name: "orange_stained_glass.png",
                inPackName: "orange_stained_glass.png",
            },
            {
                name: "pink_stained_glass.png",
                inPackName: "pink_stained_glass.png",
            },
            {
                name: "purple_stained_glass.png",
                inPackName: "purple_stained_glass.png",
            },
            {
                name: "red_stained_glass.png",
                inPackName: "red_stained_glass.png",
            },
            {
                name: "white_stained_glass.png",
                inPackName: "white_stained_glass.png",
            },
            {
                name: "yellow_stained_glass.png",
                inPackName: "yellow_stained_glass_yellow.png",
            },
        ],
    },
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 1 || format === 2 || format === 3) {
        formatData = moduleData.format321;
    } else if(format === 4 || format === 5) {
        formatData = moduleData.format54;
    } else {
        console.log('format not addressed');
        return;
    }

    // Add files
    const promises = [];
    formatData.files.forEach((fileData) => {
        promises.push(
            bucket.file(path.join("packfiles", moduleData.packFilesPath, fileData.name)).download().then((data) => {
                archive.append(data[0], {name: path.join(formatData.path, fileData.inPackName)});
                return;
            })
        );
    });
    await Promise.all(promises);
}
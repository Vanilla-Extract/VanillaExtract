const path = require('path');

// Module Data
const moduleData = {
    format54: {
        packFilesPath: "modules/ColoredBows/",
        files: [
            // Bow
            {
                name: "bow.png",
                inPackName: "bow.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "bow_pulling_0.png",
                inPackName: "bow_pulling_0.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "bow_pulling_1.png",
                inPackName: "bow_pulling_1.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "bow_pulling_2.png",
                inPackName: "bow_pulling_2.png",
                path: "assets/minecraft/textures/item"
            },
            // Crossbow
            {
                name: "crossbow_standby.png",
                inPackName: "crossbow_standby.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_pulling_0.png",
                inPackName: "crossbow_pulling_0.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_pulling_1.png",
                inPackName: "crossbow_pulling_1.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_pulling_2.png",
                inPackName: "crossbow_pulling_2.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_arrow.png",
                inPackName: "crossbow_arrow.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_firework.png",
                inPackName: "crossbow_firework.png",
                path: "assets/minecraft/textures/item"
            },
        ]
    },
    format321: {
        packFilesPath: "modules/ColoredBows/",
        files: [
            {
                name: "bow_pulling_0.png",
                inPackName: "bow_pulling_0.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "bow_pulling_1.png",
                inPackName: "bow_pulling_1.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "bow_pulling_2.png",
                inPackName: "bow_pulling_2.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "bow.png",
                inPackName: "bow_standby.png",
                path: "assets/minecraft/textures/items"
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
    } else if (format === 4 || format === 5) {
        formatData = moduleData.format54
    } else {
        console.log('format not addressed');
        return;
    }

    // Add each bow to file
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
}
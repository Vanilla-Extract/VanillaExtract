const path = require('path');

// Module Data
const moduleData = {
    packFilesPath: "modules/unobtrusive/UnobtrusiveRain",
    format: {
        files: [
            // Sounds
            {
                name: "rain1.ogg",
                inPackName: "rain1.ogg",
                path: "assets/minecraft/sounds/ambient/weather"
            },
            {
                name: "rain2.ogg",
                inPackName: "rain2.ogg",
                path: "assets/minecraft/sounds/ambient/weather"
            },
            {
                name: "rain3.ogg",
                inPackName: "rain3.ogg",
                path: "assets/minecraft/sounds/ambient/weather"
            },
            {
                name: "rain4.ogg",
                inPackName: "rain4.ogg",
                path: "assets/minecraft/sounds/ambient/weather"
            },
            {
                name: "rain5.ogg",
                inPackName: "rain5.ogg",
                path: "assets/minecraft/sounds/ambient/weather"
            },
            {
                name: "rain6.ogg",
                inPackName: "rain6.ogg",
                path: "assets/minecraft/sounds/ambient/weather"
            },
            {
                name: "rain7.ogg",
                inPackName: "rain7.ogg",
                path: "assets/minecraft/sounds/ambient/weather"
            },
            {
                name: "rain8.ogg",
                inPackName: "rain8.ogg",
                path: "assets/minecraft/sounds/ambient/weather"
            },
            // Textures
            {
                name: "rain.png",
                inPackName: "rain.png",
                path: "assets/minecraft/textures/environment"
            },
            {
                name: "drip_fall.png",
                inPackName: "drip_fall.png",
                path: "assets/minecraft/textures/particle"
            },
            {
                name: "drip_hang.png",
                inPackName: "drip_hang.png",
                path: "assets/minecraft/textures/particle"
            },
            {
                name: "drip_land.png",
                inPackName: "drip_land.png",
                path: "assets/minecraft/textures/particle"
            },
            {
                name: "splash_0.png",
                inPackName: "splash_0.png",
                path: "assets/minecraft/textures/particle"
            },
            {
                name: "splash_1.png",
                inPackName: "splash_1.png",
                path: "assets/minecraft/textures/particle"
            },
            {
                name: "splash_2.png",
                inPackName: "splash_2.png",
                path: "assets/minecraft/textures/particle"
            },
            {
                name: "splash_3.png",
                inPackName: "splash_3.png",
                path: "assets/minecraft/textures/particle"
            },
        ]
    },
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 4 || format === 5 || format === 6) {
        formatData = moduleData.format
    } else {
        console.log('format not addressed');
        return;
    }

    // Add ores to file
    const promises = formatData.files.map(async (fileData, id) => {
        await bucket.file(path.join("packfiles", moduleData.packFilesPath, fileData.name)).download().then((data) => {
            return archive.append(data[0], {name: path.join(fileData.path, fileData.inPackName)});
        });
    });
    await Promise.all(promises);
}
const path = require('path');

// Module Data
const moduleData = {
    format654: {
        packFilesPath: "modules/unobtrusive/UnobtrusiveWater",
        files: [
            {
                name: "underwater.png",
                inPackName: "underwater.png",
                path: "assets/minecraft/textures/misc"
            },
            {
                name: "water_flow.png",
                inPackName: "water_flow.png",
                path: "assets/minecraft/textures/block"
            },
            {
                inPackName: "water_flow.png.mcmeta",
                path: "assets/minecraft/textures/block",
                data: `
                {
                    "animation": {}
                }`
            },
            {
                name: "water_overlay.png",
                inPackName: "water_overlay.png",
                path: "assets/minecraft/textures/block"
            },
            {
                name: "water_still.png",
                inPackName: "water_still.png",
                path: "assets/minecraft/textures/block"
            },
            {
                inPackName: "water_still.png.mcmeta",
                path: "assets/minecraft/textures/block",
                data: `
                {
                    "animation": {
                        "frametime": 2
                    }
                }`
            },
        ]
    },
    format321: {
        packFilesPath: "modules/unobtrusive/UnobtrusiveWater",
        files: [
            {
                name: "underwater.png",
                inPackName: "underwater.png",
                path: "assets/minecraft/textures/misc"
            },
            {
                name: "water_flow.png",
                inPackName: "water_flow.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                inPackName: "water_flow.png.mcmeta",
                path: "assets/minecraft/textures/blocks",
                data: `
                {
                    "animation": {}
                }`
            },
            {
                name: "water_overlay.png",
                inPackName: "water_overlay.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                name: "water_still.png",
                inPackName: "water_still.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                inPackName: "water_still.png.mcmeta",
                path: "assets/minecraft/textures/blocks",
                data: `
                {
                    "animation": {
                        "frametime": 2,
                        "frames": [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16,
                            17,
                            18,
                            19,
                            20,
                            21,
                            22,
                            23,
                            24,
                            25,
                            26,
                            27,
                            28,
                            29,
                            30,
                            31
                        ]
                    }
                }`
            },
        ]
    },
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 1 || format === 2 || format === 3) {
        formatData= moduleData.format321
    } else if(format === 4 || format === 5 || format === 6) {
        formatData = moduleData.format654
    } else {
        console.log('format not addressed');
        return;
    }

    // Add files to pack
    const promises = formatData.files.map(async (fileData, id) => {
        if (fileData.name) {
            // If its a normal file
            await bucket.file(path.join("packfiles", formatData.packFilesPath, fileData.name)).download().then((data) => {
                return archive.append(data[0], {name: path.join(fileData.path, fileData.inPackName)});
            });
        } else if (fileData.data) {
            // If its a text file (JSON or mcmeta)
            archive.append(fileData.data, {name: path.join(fileData.path, fileData.inPackName)});
        } else {
            // If the map is invalid throw an error
            console.error("Encountered invalid file map");
        }
    });
    await Promise.all(promises);
}
const path = require('path');

const moduleData = {
    format6543: {
        file: {
            data: `{
                "parent": "builtin/generated",
                "gui_light": "front",
                "textures": {
                  "layer0": "minecraft:item/totem_of_undying"
                },
                "display": {
                    "ground": {
                        "rotation": [ 0, 0, 0 ],
                        "translation": [ 0, 2, 0],
                        "scale":[ 0.5, 0.5, 0.5 ]
                    },
                    "head": {
                        "rotation": [ 0, 180, 0 ],
                        "translation": [ 0, 13, 7],
                        "scale":[ 1, 1, 1]
                    },
                    "thirdperson_righthand": {
                        "rotation": [ 0, 0, 0 ],
                        "translation": [ 0, 3, 1 ],
                        "scale": [ 0.55, 0.55, 0.55 ]
                    },
                    "firstperson_righthand": {
                        "rotation": [ 0, -90, 25 ],
                        "translation": [ 2, -30, 1.13],
                        "scale": [ 0.68, 0.68, 0.68 ]
                    },
                    "fixed": {
                        "rotation": [ 0, 180, 0 ],
                        "scale": [ 1, 1, 1 ]
                    }
                }
            }`,
            inPackName: "totem_of_undying.json",
            path: "assets/minecraft/models/item"
        },
    },
}

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 3 || format === 4 || format === 5 || format === 6) {
        formatData = moduleData.format6543
    } else {
        console.log('format not addressed');
        return;
    }

    // Add each json file to zip
    archive.append(formatData.file.data, {name: path.join(formatData.file.path, formatData.file.inPackName)});
    return;
}
const path = require('path');

// Module Data
const moduleData = {
    packFilesPath: "modules/BetterObservers/",
    format3: {
        path: "assets/minecraft/textures/blocks",
        files: [
            {
                name: "observer_back.png",
                inPackName: "observer_back.png",
            },
            {
                name: "observer_back_on.png",
                inPackName: "observer_back_on.png",
            },
            {
                name: "observer_front_powered.png",
                inPackName: "observer_front_powered.png",
            },
            {
                name: "observer_side.png",
                inPackName: "observer_side.png",
            },
            {
                name: "observer_side_powered.png",
                inPackName: "observer_side_powered.png",
            },
            {
                name: "observer_top.png",
                inPackName: "observer_top.png",
            },
            {
                name: "observer_top_powered.png",
                inPackName: "observer_top_powered.png",
            },
        ],
    },
    format54: {
        path: "assets/minecraft/textures/block",
        files: [
            {
                name: "observer_back.png",
                inPackName: "observer_back.png",
            },
            {
                name: "observer_back_on.png",
                inPackName: "observer_back_on.png",
            },
            {
                name: "observer_front_powered.png",
                inPackName: "observer_front_powered.png",
            },
            {
                name: "observer_side.png",
                inPackName: "observer_side.png",
            },
            {
                name: "observer_side_powered.png",
                inPackName: "observer_side_powered.png",
            },
            {
                name: "observer_top.png",
                inPackName: "observer_top.png",
            },
            {
                name: "observer_top_powered.png",
                inPackName: "observer_top_powered.png",
            },
        ],
    },
    models: {
        path: "assets/minecraft/models/blocks",
        files: [
            {
                inPackName: "observer.json",
                data: `{
                    "parent": "block/block",
                    "textures": {
                        "bottom": "block/observer_back",
                        "side": "block/observer_side",
                        "top": "block/observer_top",
                        "front": "block/observer_front",
                        "particle": "block/observer_front"
                    },
                    "elements": [
                        {
                            "from": [
                                0,
                                0,
                                0
                            ],
                            "to": [
                                16,
                                16,
                                16
                            ],
                            "faces": {
                                "down": {
                                    "uv": [
                                        0,
                                        0,
                                        16,
                                        16
                                    ],
                                    "texture": "#top",
                                    "cullface": "down"
                                },
                                "up": {
                                    "uv": [
                                        0,
                                        16,
                                        16,
                                        0
                                    ],
                                    "texture": "#top",
                                    "cullface": "up"
                                },
                                "north": {
                                    "uv": [
                                        0,
                                        0,
                                        16,
                                        16
                                    ],
                                    "texture": "#front",
                                    "cullface": "north"
                                },
                                "south": {
                                    "uv": [
                                        0,
                                        0,
                                        16,
                                        16
                                    ],
                                    "texture": "#bottom",
                                    "cullface": "south"
                                },
                                "west": {
                                    "uv": [
                                        16,
                                        16,
                                        0,
                                        0
                                    ],
                                    "texture": "#side",
                                    "cullface": "west"
                                },
                                "east": {
                                    "uv": [
                                        0,
                                        16,
                                        16,
                                        0
                                    ],
                                    "texture": "#side",
                                    "cullface": "east"
                                }
                            }
                        }
                    ]
                }`,
            },
            {
                inPackName: "observer_on.json",
                data: `{
                    "parent": "block/observer",
                    "textures": {
                        "bottom": "block/observer_back_on",
                        "front": "block/observer_front_powered",
                        "side": "block/observer_side_powered",
                        "top": "block/observer_top_powered"
                    },
                    "elements": [
                        {
                            "from": [
                                0,
                                0,
                                0
                            ],
                            "to": [
                                16,
                                16,
                                16
                            ],
                            "faces": {
                                "down": {
                                    "uv": [
                                        0,
                                        0,
                                        16,
                                        16
                                    ],
                                    "texture": "#top",
                                    "cullface": "down"
                                },
                                "up": {
                                    "uv": [
                                        0,
                                        16,
                                        16,
                                        0
                                    ],
                                    "texture": "#top",
                                    "cullface": "up"
                                },
                                "north": {
                                    "uv": [
                                        0,
                                        0,
                                        16,
                                        16
                                    ],
                                    "texture": "#front",
                                    "cullface": "north"
                                },
                                "south": {
                                    "uv": [
                                        0,
                                        0,
                                        16,
                                        16
                                    ],
                                    "texture": "#bottom",
                                    "cullface": "south"
                                },
                                "west": {
                                    "uv": [
                                        16,
                                        16,
                                        0,
                                        0
                                    ],
                                    "texture": "#side",
                                    "cullface": "west"
                                },
                                "east": {
                                    "uv": [
                                        0,
                                        16,
                                        16,
                                        0
                                    ],
                                    "texture": "#side",
                                    "cullface": "east"
                                }
                            }
                        }
                    ]
                }`,
            },
        ],
    }
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 3) {
        formatData = moduleData.format3;
    } else if(format === 4 || format === 5) {
        formatData = moduleData.format54;
    } else {
        console.log('format not addressed');
        return;
    }

    // Add models
    archive.append(moduleData.models.files[0].data, {name: path.join(moduleData.models.path, moduleData.models.files[0].inPackName)});
    archive.append(moduleData.models.files[1].data, {name: path.join(moduleData.models.path, moduleData.models.files[1].inPackName)});

    // Add files
    const promises = formatData.files.map(async (fileData, id) => {
        await bucket.file(path.join("packfiles", moduleData.packFilesPath, fileData.name)).download().then((data) => {
            return archive.append(data[0], {name: path.join(formatData.path, fileData.inPackName)});
        });
    });
    await Promise.all(promises);
}
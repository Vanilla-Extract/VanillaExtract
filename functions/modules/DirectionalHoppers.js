const path = require('path');

// Module Data
const moduleData = {
    packFilesPath: "modules/DirectionalHoppers",
    path321: "assets/minecraft/textures/blocks",
    path54: "assets/minecraft/textures/block",
    modelsPath: "assets/minecraft/models/block",
    files: [
        {
            fileName: "hopper_back.png",
            inPackName: "hopper_back.png",
        },
        {
            fileName: "hopper_inside.png",
            inPackName: "hopper_inside.png",
        },
        {
            fileName: "hopper_outside.png",
            inPackName: "hopper_outside.png",
        },
        {
            fileName: "hopper_outside_flipped.png",
            inPackName: "hopper_outside_flipped.png",
        },
    ],
    models: [
        {
            inPackName: "hopper.json",
            data: `{
                "ambientocclusion": false,
                "textures": {
                    "particle": "block/hopper_back",
                    "top": "block/hopper_top",
                    "side": "block/hopper_back",
                    "inside": "block/hopper_inside"
                },
                "elements": [
                    {
                        "from": [
                            0,
                            10,
                            0
                        ],
                        "to": [
                            16,
                            11,
                            16
                        ],
                        "faces": {
                            "down": {
                                "texture": "#side"
                            },
                            "up": {
                                "texture": "#inside"
                            },
                            "north": {
                                "texture": "#side"
                            },
                            "south": {
                                "texture": "#side"
                            },
                            "west": {
                                "texture": "#side"
                            },
                            "east": {
                                "texture": "#side"
                            }
                        }
                    },
                    {
                        "from": [
                            0,
                            11,
                            0
                        ],
                        "to": [
                            2,
                            16,
                            16
                        ],
                        "faces": {
                            "down": {
                                "texture": "#side"
                            },
                            "up": {
                                "texture": "#top"
                            },
                            "north": {
                                "texture": "#side"
                            },
                            "south": {
                                "texture": "#side"
                            },
                            "west": {
                                "texture": "#side"
                            },
                            "east": {
                                "texture": "#side"
                            }
                        }
                    },
                    {
                        "from": [
                            14,
                            11,
                            0
                        ],
                        "to": [
                            16,
                            16,
                            16
                        ],
                        "faces": {
                            "down": {
                                "texture": "#side"
                            },
                            "up": {
                                "texture": "#top"
                            },
                            "north": {
                                "texture": "#side"
                            },
                            "south": {
                                "texture": "#side"
                            },
                            "west": {
                                "texture": "#side"
                            },
                            "east": {
                                "texture": "#side"
                            }
                        }
                    },
                    {
                        "from": [
                            2,
                            11,
                            0
                        ],
                        "to": [
                            14,
                            16,
                            2
                        ],
                        "faces": {
                            "down": {
                                "texture": "#side"
                            },
                            "up": {
                                "texture": "#top"
                            },
                            "north": {
                                "texture": "#side"
                            },
                            "south": {
                                "texture": "#side"
                            },
                            "west": {
                                "texture": "#side"
                            },
                            "east": {
                                "texture": "#side"
                            }
                        }
                    },
                    {
                        "from": [
                            2,
                            11,
                            14
                        ],
                        "to": [
                            14,
                            16,
                            16
                        ],
                        "faces": {
                            "down": {
                                "texture": "#side"
                            },
                            "up": {
                                "texture": "#top"
                            },
                            "north": {
                                "texture": "#side"
                            },
                            "south": {
                                "texture": "#side"
                            },
                            "west": {
                                "texture": "#side"
                            },
                            "east": {
                                "texture": "#side"
                            }
                        }
                    },
                    {
                        "from": [
                            4,
                            4,
                            4
                        ],
                        "to": [
                            12,
                            10,
                            12
                        ],
                        "faces": {
                            "down": {
                                "texture": "#side"
                            },
                            "up": {
                                "texture": "#side"
                            },
                            "north": {
                                "texture": "#side"
                            },
                            "south": {
                                "texture": "#side"
                            },
                            "west": {
                                "texture": "#side"
                            },
                            "east": {
                                "texture": "#side"
                            }
                        }
                    },
                    {
                        "from": [
                            6,
                            0,
                            6
                        ],
                        "to": [
                            10,
                            4,
                            10
                        ],
                        "faces": {
                            "down": {
                                "texture": "#side"
                            },
                            "up": {
                                "texture": "#side"
                            },
                            "north": {
                                "texture": "#side"
                            },
                            "south": {
                                "texture": "#side"
                            },
                            "west": {
                                "texture": "#side"
                            },
                            "east": {
                                "texture": "#side"
                            }
                        }
                    }
                ]
            }`,
        },
        {
            inPackName: "hopper_side.json",
            data: `{
                "ambientocclusion": false,
                "textures": {
                    "4": "block/hopper_outside_flipped",
                    "top": "block/hopper_top",
                    "side": "block/hopper_outside",
                    "particle": "block/hopper_outside",
                    "inside": "block/hopper_inside_side",
                    "back": "block/hopper_back"
                },
                "elements": [
                    {
                        "name": "Element",
                        "from": [0, 10, 0],
                        "to": [16, 11, 16],
                        "faces": {
                            "north": {"uv": [0, 5, 16, 6], "texture": "#side", "cullface": "north"},
                            "east": {"uv": [0, 5, 16, 6], "texture": "#side", "cullface": "east"},
                            "south": {"uv": [0, 5, 16, 6], "texture": "#side", "cullface": "south"},
                            "west": {"uv": [0, 5, 16, 6], "texture": "#side", "cullface": "west"},
                            "up": {"uv": [0, 0, 16, 16], "texture": "#inside", "cullface": "up"},
                            "down": {"uv": [0, 0, 16, 16], "texture": "#back"}
                        }
                    },
                    {
                        "name": "Element",
                        "from": [0, 11, 0],
                        "to": [2, 16, 16],
                        "faces": {
                            "north": {"uv": [14, 0, 16, 5], "texture": "#side", "cullface": "north"},
                            "east": {"uv": [0, 0, 16, 5], "texture": "#back", "cullface": "up"},
                            "south": {"uv": [0, 0, 2, 5], "texture": "#side", "cullface": "south"},
                            "west": {"uv": [0, 0, 16, 5], "texture": "#4", "cullface": "west"},
                            "up": {"uv": [0, 0, 2, 16], "texture": "#top", "cullface": "up"}
                        }
                    },
                    {
                        "name": "Element",
                        "from": [14, 11, 0],
                        "to": [16, 16, 16],
                        "faces": {
                            "north": {"uv": [0, 0, 2, 5], "texture": "#side", "cullface": "north"},
                            "east": {"uv": [0, 0, 16, 5], "texture": "#side", "cullface": "east"},
                            "south": {"uv": [14, 0, 16, 5], "texture": "#side", "cullface": "south"},
                            "west": {"uv": [0, 0, 16, 5], "texture": "#back", "cullface": "up"},
                            "up": {"uv": [14, 0, 16, 16], "texture": "#top", "cullface": "up"}
                        }
                    },
                    {
                        "name": "Element",
                        "from": [2, 11, 0],
                        "to": [14, 16, 2],
                        "faces": {
                            "north": {"uv": [2, 0, 14, 5], "texture": "#back", "cullface": "north"},
                            "south": {"uv": [2, 0, 14, 5], "texture": "#back", "cullface": "up"},
                            "up": {"uv": [2, 0, 14, 2], "texture": "#top", "cullface": "up"}
                        }
                    },
                    {
                        "name": "Element",
                        "from": [2, 11, 14],
                        "to": [14, 16, 16],
                        "faces": {
                            "north": {"uv": [2, 0, 14, 5], "texture": "#back", "cullface": "up"},
                            "south": {"uv": [2, 0, 14, 5], "texture": "#back", "cullface": "south"},
                            "up": {"uv": [2, 14, 14, 16], "texture": "#top", "cullface": "up"}
                        }
                    },
                    {
                        "name": "Element",
                        "from": [4, 4, 4],
                        "to": [12, 10, 12],
                        "faces": {
                            "north": {"uv": [4, 6, 12, 12], "texture": "#side"},
                            "east": {"uv": [4, 6, 12, 12], "texture": "#side"},
                            "south": {"uv": [4, 6, 12, 12], "texture": "#side"},
                            "west": {"uv": [4, 6, 12, 12], "texture": "#side"},
                            "down": {"uv": [4, 4, 12, 12], "texture": "#back"}
                        }
                    },
                    {
                        "name": "Element",
                        "from": [6, 4, 0],
                        "to": [10, 8, 4],
                        "faces": {
                            "north": {"uv": [6, 8, 10, 12], "texture": "#side", "cullface": "north"},
                            "east": {"uv": [12, 8, 16, 12], "texture": "#side"},
                            "west": {"uv": [0, 8, 4, 12], "texture": "#side"},
                            "up": {"uv": [6, 0, 10, 4], "texture": "#side"},
                            "down": {"uv": [6, 12, 10, 16], "texture": "#back"}
                        }
                    }
                ]
            }`
        },
    ]
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let filePath;
    if (format === 1 || format === 2 || format === 3) {
        filePath = moduleData.path321;
    } else if (format === 4 || format === 5) {
        filePath = moduleData.path54;
    } else {
        console.log('format not addressed');
        return;
    }

    // Add models
    archive.append(moduleData.models[0].data, {name: path.join(moduleData.modelsPath, moduleData.models[0].inPackName)});
    archive.append(moduleData.models[1].data, {name: path.join(moduleData.modelsPath, moduleData.models[1].inPackName)});

    // Add blank ores to file
    const promises = [];
    moduleData.files.forEach((fileData) => {
        promises.push(
            bucket.file(path.join("packfiles", moduleData.packFilesPath, fileData.fileName)).download().then((data) => {
                return archive.append(data[0], {name: path.join(filePath, fileData.inPackName)});
            })
        );
    });
    await Promise.all(promises);
}
const path = require('path');

const addToFile = async function(formatData, archive, bucket){
    // Add each piston model and texture to file
    const promises = [];
    formatData.files.forEach((fileData) => {
        if (fileData.name === undefined || fileData.name === null) {
            archive.append(fileData.data, {name: path.join(fileData.path, fileData.inPackName)});
        } else {
            promises.push(
                bucket.file(path.join("packfiles", formatData.packFilesPath, fileData.name)).download().then((data) => {
                    const contents = data[0];
                    archive.append(contents, {name: path.join(fileData.path, fileData.inPackName)});
                    return;
                })
            );
        }
    });
    await Promise.all(promises);
    return;
};

module.exports = {
    name: "StickyPistonSides",
    addToFile: addToFile,
    format54: {
        packFilesPath: "modules/StickyPistonSides/",
        files: [
            {
                name: "piston_side_sticky.png",
                inPackName: "piston_side_sticky.png",
                path: "assets/minecraft/textures/block"
            },
            {
                inPackName: "piston_head_short_sticky.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "parent": "block/template_piston_head_short_sticky",
                    "textures": {
                        "unsticky": "block/piston_top",
                        "side": "block/piston_side_sticky",
                        "unsticky_side": "block/piston_side",
                        "platform": "block/piston_top_sticky"
                    }
                }`,
            },
            {
                inPackName: "piston_head_sticky.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "parent": "block/template_piston_head_sticky",
                    "textures": {
                        "unsticky": "block/piston_top_sticky",
                        "side": "block/piston_side_sticky",
                        "unsticky_side": "block/piston_side",
                        "platform": "block/piston_top_sticky"
                    }
                }`,
            },
            {
                inPackName: "sticky_piston.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "parent": "block/template_piston",
                    "textures": {
                        "bottom": "block/piston_bottom",
                        "side": "block/piston_side_sticky",
                        "platform": "block/piston_top_sticky"
                    }
                }`,
            },
            {
                inPackName: "sticky_piston_inventory.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "parent": "block/template_piston",
                    "textures": {
                        "bottom": "block/piston_bottom",
                        "side": "block/piston_side_sticky",
                        "platform": "block/piston_top_sticky"
                    }
                }`,
            },
            {
                inPackName: "template_piston_head_short_sticky.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "parent": "block/cube_bottom_top",
                    "textures": {
                        "bottom": "block/piston_bottom",
                        "side": "block/piston_side_sticky",
                        "top": "block/piston_top_sticky"
                    }
                }`,
            },
            {
                inPackName: "template_piston_head_sticky.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "textures": {
                        "particle": "#platform"
                    },
                    "elements": [
                        {   "from": [ 0, 0, 0 ],
                            "to": [ 16, 16, 4 ],
                            "faces": {
                                "down":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "cullface": "down", "rotation": 180 },
                                "up":    { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "cullface": "up" },
                                "north": { "uv": [ 0, 0, 16, 16 ], "texture": "#platform", "cullface": "north" },
                                "south": { "uv": [ 0, 0, 16, 16 ], "texture": "#unsticky" },
                                "west":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "rotation": 270, "cullface": "west" },
                                "east":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "rotation": 90, "cullface": "east" }
                            }
                        },
                        {   "from": [ 6, 6, 4 ],
                            "to": [ 10, 10, 16 ],
                            "faces": {
                                "down": { "uv": [  4, 0, 16, 4 ], "texture": "#unsticky_side", "rotation": 90 },
                                "up":   { "uv": [  4, 0, 16, 4 ], "texture": "#unsticky_side", "rotation": 270 },
                                "west": { "uv": [ 16, 4,  4, 0 ], "texture": "#unsticky_side" },
                                "east": { "uv": [  4, 0, 16, 4 ], "texture": "#unsticky_side" }
                            }
                        }
                    ]
                }`,
            },
            {
                inPackName: "sticky_piston.json",
                path: "assets/minecraft/models/item",
                data: `{
                    "textures": {
                        "particle": "#platform"
                    },
                    "elements": [
                        {   "from": [ 0, 0, 0 ],
                            "to": [ 16, 16, 4 ],
                            "faces": {
                                "down":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "cullface": "down", "rotation": 180 },
                                "up":    { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "cullface": "up" },
                                "north": { "uv": [ 0, 0, 16, 16 ], "texture": "#platform", "cullface": "north" },
                                "south": { "uv": [ 0, 0, 16, 16 ], "texture": "#unsticky" },
                                "west":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "rotation": 270, "cullface": "west" },
                                "east":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "rotation": 90, "cullface": "east" }
                            }
                        },
                        {   "from": [ 6, 6, 4 ],
                            "to": [ 10, 10, 20 ],
                            "faces": {
                                "down": { "uv": [  0, 0, 16, 4 ], "texture": "#unsticky_side", "rotation": 90 },
                                "up":   { "uv": [  0, 0, 16, 4 ], "texture": "#unsticky_side", "rotation": 270 },
                                "west": { "uv": [ 16, 4,  0, 0 ], "texture": "#unsticky_side" },
                                "east": { "uv": [  0, 0, 16, 4 ], "texture": "#unsticky_side" }
                            }
                        }
                    ]
                }`,
            },
        ]
    },
    format321: {
        packFilesPath: "modules/StickyPistonSides/",
        files: [
            {
                name: "piston_side_sticky_old.png",
                inPackName: "piston_side_sticky.png",
                path: "assets/minecraft/textures/blocks"
            },
            {
                inPackName: "piston_head_different_arm_tex.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "textures": {
                        "particle": "#platform"
                    },
                    "elements": [
                        {   "from": [ 0, 0, 0 ],
                            "to": [ 16, 16, 4 ],
                            "faces": {
                                "down":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "cullface": "down", "rotation": 180 },
                                "up":    { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "cullface": "up" },
                                "north": { "uv": [ 0, 0, 16, 16 ], "texture": "#platform", "cullface": "north" },
                                "south": { "uv": [ 0, 0, 16, 16 ], "texture": "#unsticky" },
                                "west":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "rotation": 270, "cullface": "west" },
                                "east":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "rotation": 90, "cullface": "east" }
                            }
                        },
                        {   "from": [ 6, 6, 4 ],
                            "to": [ 10, 10, 20 ],
                            "faces": {
                                "down": { "uv": [  0, 0, 16, 4 ], "texture": "#arm", "rotation": 90 },
                                "up":   { "uv": [  0, 0, 16, 4 ], "texture": "#arm", "rotation": 270 },
                                "west": { "uv": [ 16, 4,  0, 0 ], "texture": "#arm" },
                                "east": { "uv": [  0, 0, 16, 4 ], "texture": "#arm" }
                            }
                        }
                    ]
                }`,
            },
            {
                inPackName: "piston_head_short_different_arm_tex.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "textures": {
                        "particle": "#platform"
                    },
                    "elements": [
                        {   "from": [ 0, 0, 0 ],
                            "to": [ 16, 16, 4 ],
                            "faces": {
                                "down":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "cullface": "down", "rotation": 180 },
                                "up":    { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "cullface": "up" },
                                "north": { "uv": [ 0, 0, 16, 16 ], "texture": "#platform", "cullface": "north" },
                                "south": { "uv": [ 0, 0, 16, 16 ], "texture": "#unsticky" },
                                "west":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "rotation": 270, "cullface": "west" },
                                "east":  { "uv": [ 0, 0, 16,  4 ], "texture": "#side", "rotation": 90, "cullface": "east" }
                            }
                        },
                        {   "from": [ 6, 6, 4 ],
                            "to": [ 10, 10, 16 ],
                            "faces": {
                                "down": { "uv": [  4, 0, 16, 4 ], "texture": "#arm", "rotation": 90 },
                                "up":   { "uv": [  4, 0, 16, 4 ], "texture": "#arm", "rotation": 270 },
                                "west": { "uv": [ 16, 4,  4, 0 ], "texture": "#arm" },
                                "east": { "uv": [  4, 0, 16, 4 ], "texture": "#arm" }
                            }
                        }
                    ]
                }`,
            },
            {
                inPackName: "piston_head_short_sticky.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "parent": "block/piston_head_short",
                    "textures": {
                        "unsticky": "blocks/piston_top_sticky",
                        "side": "blocks/piston_side_sticky",
                        "platform": "blocks/piston_top_sticky",
                        "arm": "blocks/piston_side"
                    }
                }`,
            },
            {
                inPackName: "piston_head_sticky.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "parent": "block/piston_head_different_arm_tex",
                    "textures": {
                        "unsticky": "blocks/piston_top_sticky",
                        "side": "blocks/piston_side_sticky",
                        "platform": "blocks/piston_top_sticky",
                        "arm": "blocks/piston_side"
                    }
                }`,
            },
            {
                inPackName: "piston_inventory_sticky.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "parent": "block/cube_bottom_top",
                    "textures": {
                        "bottom": "blocks/piston_bottom",
                        "side": "blocks/piston_side_sticky",
                        "top": "blocks/piston_top_sticky"
                    }
                }`,
            },
            {
                inPackName: "sticky_piston.json",
                path: "assets/minecraft/models/block",
                data: `{
                    "parent": "block/piston",
                    "textures": {
                        "bottom": "blocks/piston_bottom",
                        "side": "blocks/piston_side_sticky",
                        "platform": "blocks/piston_top_sticky"
                    }
                }`,
            },
        ]
    },
};
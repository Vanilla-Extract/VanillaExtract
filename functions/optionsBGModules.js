const path = require('path');

const packFilesPath = "Backgrounds/";
const inPackName = "options_background.png";
const inPackPath = "assets/minecraft/textures/gui";
const files = {
    AcaciaPlanksBG: "AcaciaPlanks.png",
    AncientDebrisBG: "AncientDebris.png",
    AndesiteBG: "andesite.png",
    BedrockBG: "bedrock.png",
    BetterBedrockBG: "BetterBadrock.png",
    BirchPlanksBG: "BirchPlanks.png",
    DarkOakPlanksBG: "DarkOakPlanks.png",
    DioriteBG: "diorite.png",
    EndStoneBG: "EndStone.png",
    GraniteBG: "granite.png",
    HoneycombBG: "HoneycombBlock.png",
    JunglePlanksBG: "JunglePlanks.png",
    NetherrackBG: "netherack.png",
    NetherrackBrightBG: "NetherackBright.png",
    OakPlanksBG: "OakPlanks.png",
    ObsidianBG: "obsidian.png",
    PebblelessDirtBG: "PebblelessDirt.png",
    SprucePlanksBG: "SprucePlanks.png",
    StoneBG: "stone.png",
};

const addModules = async function(moduleName, archive, bucket){
    // If it exists
    if (files[moduleName] !== undefined && files[moduleName] !== null) {
        await bucket.file(path.join("packfiles", packFilesPath, files[moduleName])).download().then((data) => {
            archive.append(data[0], {name: path.join(inPackPath, inPackName)});
            return;
        });
    }
    return;
};

module.exports = {
    addModules: addModules,
};
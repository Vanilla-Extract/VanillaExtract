import * as path from 'path';
import { Archiver } from 'archiver';
import { Bucket } from '@google-cloud/storage';

const packFilesPath = "modules/optionsBG";
const inPackName = "options_background.png";
const inPackPath = "assets/minecraft/textures/gui";
const files: Record<string, string> = {
    AcaciaPlanksBG: "AcaciaPlanks.png",
    AncientDebrisBG: "AncientDebris.png",
    AndesiteBG: "andesite.png",
    BedrockBG: "bedrock.png",
    BetterBedrockBG: "BetterBedrock.png",
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

export async function addOptionsBG(moduleName: string, archive: Archiver, bucket: Bucket){
    // If it exists
    if (files[moduleName] !== undefined && files[moduleName] !== null) {
        
        archive.file(path.join('images', packFilesPath, files[moduleName]), {name: path.join(inPackPath, inPackName)})
        // await bucket.file(path.join("packfiles", packFilesPath, files[moduleName])).download().then((data) => {
        //     return archive.append(data[0], {name: path.join(inPackPath, inPackName)});
        // });
    }
    return;
};

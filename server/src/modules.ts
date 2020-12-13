import { Archiver } from "archiver";
import * as path from 'path';
import * as fs from 'fs';

// ----- MODULES -----
const modulesData: Record<string, any> = {
//  ModuleID               : './path/to/moduleid.json',

    // Animation
    AnimatedSelectorArrows      : '/animation/AnimatedSelectorArrows.json',
    FurnaceAnimations       : '/animation/FurnaceAnimations.json',
    // Fixes
    BoatOarFix      : '/fixes/BoatOarFix.json',
    BoneColoredBonemeal      : '/fixes/BoneColoredBonemeal.json',
    CrimsonNyliumTopFix     : '/fixes/CrimsonNyliumTopFix.json',
    OffCenterFix          : '/fixes/OffCenterFix.json',
    // Fun
    CrimsonToTyrian     : '/fun/CrimsonToTyrian.json',
    StickTrident        : '/fun/StickTrident.json',
    // Utility
    BowChargeIndicator          : '/utility/BowChargeIndicator.json',
    OutlinedWool          : '/utility/OutlinedWool.json',
    ShortSwords          : '/utility/ShortSwords.json',
    SlicedSwords          : '/utility/SlicedSwords.json',
    OutlinedArmour          : '/utility/OutlinedArmour.json',
    PotionIcons          : '/utility/PotionIcons.json',
    Eggmoticons          : '/utility/Eggmoticons.json',
    VisualExclusiveEnchantments          : '/utility/VisualExclusiveEnchantments.json',
    
}

// Figure out which modules to add
export async function addModules(format: string, archive: Archiver, modules: string[]) {
    // For each module
    const promises = modules.map(async (modName) => {
        // If the module exists
        if (modulesData[modName] !== undefined && modulesData[modName] !== null) {
            const obj = JSON.parse(fs.readFileSync(path.join('./src/modules/', modulesData[modName]), 'utf8'));

            // Try to get module path
            let directory;
            try {
                directory = obj[format];
            } catch (e) {
                // If version has no path return
                console.log('Invalid Version: '+e);
                return;
            }
            
            // Make path to files
            const DLPath = path.join('images', directory);

            // List files
            archive.directory(DLPath, false);
        }
    });
    return Promise.all(promises);
}
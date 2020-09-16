import { Archiver } from "archiver";
import {Bucket} from '@google-cloud/storage';
import * as path from 'path';

// ----- MODULES -----
const modulesData: Record<string, any> = {
//  ModuleID               : require('./path/to/moduleid.js'),
    TestModule             : require('./modules/testModule.js'),

    // Aesthetic
    AlternateEntities      : require('./modules/aesthetic/AlternateEntities.js'),
    BlackNetherBricks      : require('./modules/aesthetic/BlackNetherBricks.js'),
    CherryPicking          : require('./modules/aesthetic/CherryPicking.js'),
    CodeCraftedWool        : require('./modules/aesthetic/CodeCraftedWool.js'),
    PlainLeather           : require('./modules/aesthetic/PlainLeather.js'),
    RedGolemFlowers        : require('./modules/aesthetic/RedGolemFlowers.js'),
    SidewaysNuggets        : require('./modules/aesthetic/SidewaysNuggets.js'),
    SolidHoney             : require('./modules/aesthetic/SolidHoney.js'),
    UnbundledHayBales      : require('./modules/aesthetic/UnbundledHayBales.js'),
    SplashEnchanting       : require('./modules/aesthetic/SplashEnchanting.js'),
    SolidSlime             : require('./modules/aesthetic/SolidSlime.js'),
    RedCrimson             : require('./modules/aesthetic/RedCrimson.js'),
    PinkRod                : require('./modules/aesthetic/PinkRod.js'),
    EndlessRod             : require('./modules/aesthetic/EndlessRod.js'),
    GlassDoors             : require('./modules/aesthetic/GlassDoors.js'),
    ColorParticle          : require('./modules/aesthetic/ColorParticle.js'),
    AnimatedCampfire       : require('./modules/aesthetic/AnimatedCampfire.js'),
    DesatPurpur            : require('./modules/aesthetic/DesatPurpur.js'),
    OldNetherite           : require('./modules/aesthetic/OldNetherite.js'),
    FlintArrow             : require('./modules/aesthetic/FlintArrow.js'),
    JappaSpectralArrow     : require('./modules/aesthetic/JappaSpectralArrow.js'),

    // Terrain
    BetterBedrock          : require('./modules/terrain/BetterBedrock.js'),
    LowerGrassSide         : require('./modules/terrain/LowerGrassSide.js'),
    PebblelessCoarseDirt   : require('./modules/terrain/PebblelessCoarseDirt.js'),

    // Utility
    BetterObservers        : require('./modules/utility/BetterObservers.js'),
    BrokenItems            : require('./modules/utility/BrokenItems.js'),
    CleanRedstone          : require('./modules/utility/CleanRedstone.js'),
    ColoredBows            : require('./modules/utility/ColoredBows.js'),
    DirectionalHoppers     : require('./modules/utility/DirectionalHoppers.js'),
    NetherwartGrowthStage  : require('./modules/utility/NetherwartGrowthStage.js'),
    OreBorders             : require('./modules/utility/OreBorders.js'),
    SlicedSwords           : require('./modules/utility/SlicedSwords.js'),
    StackedItems           : require('./modules/utility/StackedItems.js'),
    StickyPistonSides      : require('./modules/utility/StickyPistonSides.js'),

    // Unobtrusive
    AlternateEnchantGlint  : require('./modules/unobtrusive/AlternateEnchantGlint.js'),
    BorderlessGlass        : require('./modules/unobtrusive/BorderlessGlass.js'),
    CleanBorderlessGlass   : require('./modules/unobtrusive/CleanBorderlessGlass.js'),
    CleanGlass             : require('./modules/unobtrusive/CleanGlass.js'),
    ClearPumpkinBlur       : require('./modules/unobtrusive/ClearPumpkinBlur.js'),
    InvisibleTotem         : require('./modules/unobtrusive/InvisibleTotem.js'),
    LowFire                : require('./modules/unobtrusive/LowFire.js'),
    LowShield              : require('./modules/unobtrusive/LowShield.js'),
    NoVignette             : require('./modules/unobtrusive/NoVignette.js'),
    ReducedPumpkinBlur     : require('./modules/unobtrusive/ReducedPumpkinBlur.js'),
    UnobtrusiveRain        : require('./modules/unobtrusive/UnobtrusiveRain.js'),
    UnobtrusiveScaffolding : require('./modules/unobtrusive/UnobtrusiveScaffolding.js'),
    UnobtrusiveWater       : require('./modules/unobtrusive/UnobtrusiveWater.js'),

    // UI
    DarkUI                 : require('./modules/ui/DarkUI.js'),
}

// Figure out which modules to add
export async function addModules(format: string, archive: Archiver, modules: string[], bucket: Bucket) {
    // For each module
    const promises = modules.map(async (modName) => {
        // If the module exists
        if (modulesData[modName] !== undefined && modulesData[modName] !== null) {
            // Try to get module path
            let directory;
            try {
                directory = modulesData[modName][format];
            } catch (e) {
                // If version has no path return
                console.log('Invalid Version: '+e);
                return;
            }
            
            // Make path to files
            const DLPath = path.join('packfiles', directory);

            // List files
            await bucket.getFiles({
                autoPaginate: false,
                directory: DLPath,
            }).then(async (data) => {
                // For each file
                // tslint:disable-next-line: no-shadowed-variable
                const promises = data[0].map(async (file) => {
                    // Download
                    await file.download().then((fileData) => {
                        // Remove beginning of path from file name
                        const fileName = file.name.replace(DLPath, '');
                        // Add file to zip
                        return archive.append(fileData[0], {name: fileName});
                    });
                });
                await Promise.all(promises);
                return;
            });
        }
    });
    return Promise.all(promises);
}
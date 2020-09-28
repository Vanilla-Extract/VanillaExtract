import { Archiver } from "archiver";
import {Bucket} from '@google-cloud/storage';
import * as path from 'path';

// ----- MODULES -----
const modulesData: Record<string, any> = {
//  ModuleID               : require('./path/to/moduleid.js'),
    TestModule             : require('./modules/testModule.js'),

    // Aesthetic
    AlternateDestruction   : require('./modules/aesthetic/AlternateDestruction.js'),
    AlternateEntities      : require('./modules/aesthetic/AlternateEntities.js'),
    AnimatedCampfire       : require('./modules/aesthetic/AnimatedCampfire.js'),
    BedIcons               : require('./modules/aesthetic/BedIcons.js'),
    BlackNetherBricks      : require('./modules/aesthetic/BlackNetherBricks.js'),
    CherryPicking          : require('./modules/aesthetic/CherryPicking.js'),
    CodeCraftedWool        : require('./modules/aesthetic/CodeCraftedWool.js'),
    ColorParticle          : require('./modules/aesthetic/ColorParticle.js'),
    DesatPurpur            : require('./modules/aesthetic/DesatPurpur.js'),
    DifferentStems         : require('./modules/aesthetic/DifferentStems.js'),
    EndlessRod             : require('./modules/aesthetic/EndlessRod.js'),
    FlintArrow             : require('./modules/aesthetic/FlintArrow.js'),
    GlassDoors             : require('./modules/aesthetic/GlassDoors.js'),
    GreenJungle            : require('./modules/aesthetic/GreenJungle.js'),
    JappaSpectralArrow     : require('./modules/aesthetic/JappaSpectralArrow.js'),
    OldNetherite           : require('./modules/aesthetic/OldNetherite.js'),
    PinkRod                : require('./modules/aesthetic/PinkRod.js'),
    PlainLeather           : require('./modules/aesthetic/PlainLeather.js'),
    RedCrimson             : require('./modules/aesthetic/RedCrimson.js'),
    RedGolemFlowers        : require('./modules/aesthetic/RedGolemFlowers.js'),
    SidewaysNuggets        : require('./modules/aesthetic/SidewaysNuggets.js'),
    SofterWool             : require('./modules/aesthetic/SofterWool.js'),
    SmoothWarped           : require('./modules/aesthetic/SmoothWarped.js'),
    SolidHoney             : require('./modules/aesthetic/SolidHoney.js'),
    SolidSlime             : require('./modules/aesthetic/SolidSlime.js'),
    SplashEnchanting       : require('./modules/aesthetic/SplashEnchanting.js'),
    UnbundledHayBales      : require('./modules/aesthetic/UnbundledHayBales.js'),
    UniqueDyes             : require('./modules/aesthetic/UniqueDyes.js'),

    // Terrain
    BetterBedrock          : require('./modules/terrain/BetterBedrock.js'),
    BrighterNether         : require('./modules/terrain/BrighterNether.js'),
    CircularSnM            : require('./modules/terrain/CircularSnM.js'),
    ClearWater             : require('./modules/terrain/ClearWater.js'),
    PebblelessCoarseDirt   : require('./modules/terrain/PebblelessCoarseDirt.js'),
    PebblelessDirt         : require('./modules/terrain/PebblelessDirt.js'),
    SmoothOak              : require('./modules/terrain/SmoothOak.js'),
    UniformOres            : require('./modules/terrain/UniformOres.js'),
    WhiterSnow             : require('./modules/terrain/WhiterSnow.js'),
    
    // Lower and Sides
    LowerCrimson           : require('./modules/sides/LowerCrimson.js'),
    LowerGrass             : require('./modules/sides/LowerGrass.js'),
    LowerMycelium          : require('./modules/sides/LowerMycelium.js'),
    LowerPaths             : require('./modules/sides/LowerPaths.js'),
    LowerPodzol            : require('./modules/sides/LowerPodzol.js'),
    LowerSnow              : require('./modules/sides/LowerSnow.js'),
    LowerWarped            : require('./modules/sides/LowerWarped.js'),
    SidesCrimson           : require('./modules/sides/SidesCrimson.js'),
    SidesGrass             : require('./modules/sides/SidesGrass.js'),
    SidesMycelium          : require('./modules/sides/SidesMycelium.js'),
    SidesSnow              : require('./modules/sides/SidesSnow.js'),
    SidesPaths             : require('./modules/sides/SidesPaths.js'),
    SidesPodzol            : require('./modules/sides/SidesPodzol.js'),
    SidesWarped            : require('./modules/sides/SidesWarped.js'),
    ShorterGrass           : require('./modules/sides/ShorterGrass.js'),
    ShorterTallGrass       : require('./modules/sides/ShorterTallGrass.js'),

    // Utility
    AgedKelp               : require('./modules/utility/AgedKelp.js'),
    BetterObservers        : require('./modules/utility/BetterObservers.js'),
    BrokenItems            : require('./modules/utility/BrokenItems.js'),
    CleanRedstone          : require('./modules/utility/CleanRedstone.js'),
    ClearPatterns          : require('./modules/utility/ClearPatterns.js'),
    ColoredBows            : require('./modules/utility/ColoredBows.js'),
    CropMarker             : require('./modules/utility/CropMarker.js'),
    DirectionalHoppers     : require('./modules/utility/DirectionalHoppers.js'),
    NetherwartGrowthStage  : require('./modules/utility/NetherwartGrowthStage.js'),
    OreBorders             : require('./modules/utility/OreBorders.js'),
    RedstonePower          : require('./modules/utility/RedstonePower.js'),
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
    SlicedSwords           : require('./modules/unobtrusive/SlicedSwords.js'),
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
            const DLPath = path.join('images', directory);

            // List files
            archive.directory(DLPath, false);
            // await bucket.getFiles({
            //     autoPaginate: false,
            //     directory: DLPath,
            // }).then(async (data) => {
            //     // For each file
            //     // tslint:disable-next-line: no-shadowed-variable
            //     const promises = data[0].map(async (file) => {
            //         // Download
            //         await file.download().then((fileData) => {
            //             // Remove beginning of path from file name
            //             const fileName = file.name.replace(DLPath, '');
            //             // Add file to zip
            //             return archive.append(fileData[0], {name: fileName});
            //         });
            //     });
            //     await Promise.all(promises);
            //     return;
            // });
        }
    });
    return Promise.all(promises);
}
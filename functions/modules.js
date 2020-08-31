const path = require('path');

// ----- MODULES -----
const modulesData = {
//  ModuleID               : require('./path/to/moduleid.js'),
    TestModule             : require('./modules/testModule.js'),

    // Aesthetic
    AlternateEntities      : require('./modules/aesthetic/AlternateEntities.js'),
    BlackNetherBricks      : require('./modules/aesthetic/BlackNetherBricks.js'),
    CherryPicking          : require('./modules/aesthetic/CherryPicking.js'),
    CleanRedstone          : require('./modules/aesthetic/CleanRedstone.js'),
    RedGolemFlowers        : require('./modules/aesthetic/RedGolemFlowers.js'),
    SidewaysNuggets        : require('./modules/aesthetic/SidewaysNuggets.js'),
    SolidHoney             : require('./modules/aesthetic/SolidHoney.js'),
    UnbundledHayBales      : require('./modules/aesthetic/UnbundledHayBales.js'),

    // Terrain
    BetterBedrock          : require('./modules/terrain/BetterBedrock.js'),
    LowerGrassSide         : require('./modules/terrain/LowerGrassSide.js'),
    PebblelessCoarseDirt   : require('./modules/terrain/PebblelessCoarseDirt.js'),

    // UI
    DarkUI                 : require('./modules/ui/DarkUI.js'),

    // Utility
    BetterObservers        : require('./modules/utility/BetterObservers.js'),
    BrokenItems            : require('./modules/utility/BrokenItems.js'),
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
}

// Figure out which modules to add
const addModules = async function(format, archive, modules, bucket){
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
                const promises = data[0].map(async (file) => {
                    // Download
                    await file.download().then((fileData) => {
                        // Remove beginning of path from file name
                        fileName = file.name.replace(DLPath, '');
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

// ----- EXPORTS -----
module.exports = {
    addModules: addModules
};
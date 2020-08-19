// ----- IMPORTS -----
const modulesData = {
//  ModuleID               : require('./path/to/moduleid.js'),

    // Aesthetic
    BlackNetherBricks      : require('./modules/aesthetic/BlackNetherBricks.js'),
    CherryPicking          : require('./modules/aesthetic/CherryPicking.js'),
    SidewaysNuggets        : require('./modules/aesthetic/SidewaysNuggets.js'),
    SolidHoney             : require('./modules/aesthetic/SolidHoney.js'),
    UnbundledHayBales      : require('./modules/aesthetic/UnbundledHayBales.js'),

    // Terrain
    BetterBedrock          : require('./modules/terrain/BetterBedrock.js'),
    PebblelessCoarseDirt   : require('./modules/terrain/PebblelessCoarseDirt.js'),

    // Utility
    BetterObservers        : require('./modules/utility/BetterObservers.js'),
    ColoredBows            : require('./modules/utility/ColoredBows.js'),
    DirectionalHoppers     : require('./modules/utility/DirectionalHoppers.js'),
    OreBorders             : require('./modules/utility/OreBorders.js'),
    StickyPistonSides      : require('./modules/utility/StickyPistonSides.js'),

    // Unobtrusive
    AlternateEnchantGlint  : require('./modules/unobtrusive/AlternateEnchantGlint.js'),
    ClearPumpkinBlur       : require('./modules/unobtrusive/ClearPumpkinBlur.js'),
    InvisibleTotem         : require('./modules/unobtrusive/InvisibleTotem.js'),
    LowFire                : require('./modules/unobtrusive/LowFire.js'),
    LowShield              : require('./modules/unobtrusive/LowShield.js'),
    NoVignette             : require('./modules/unobtrusive/NoVignette.js'),
    ReducedPumpkinBlur     : require('./modules/unobtrusive/ReducedPumpkinBlur.js'),
    SlicedSwords           : require('./modules/unobtrusive/SlicedSwords.js'),
    UnobtrusiveScaffolding : require('./modules/unobtrusive/UnobtrusiveScaffolding.js'),

    // Glass
    BorderlessGlass        : require('./modules/glass/BorderlessGlass.js'),
    CleanBorderlessGlass   : require('./modules/glass/CleanBorderlessGlass.js'),
    CleanGlass             : require('./modules/glass/CleanGlass.js'),
}

// Figure out which modules to add
const addModules = async function(format, archive, modules, bucket){
    const promises = [];
    modules.forEach((modName) => {
        // If the module exists
        if (modulesData[modName] !== undefined && modulesData[modName] !== null) {
            promises.push(modulesData[modName](format, archive, bucket));
        }
    });
    return Promise.all(promises);
}

// ----- EXPORTS -----
module.exports = {
    addModules: addModules
};
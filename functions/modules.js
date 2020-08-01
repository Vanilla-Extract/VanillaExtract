// ----- IMPORTS -----
const modulesData = {
//  Module ID              : require('./path/to/module.js'),
    AlternateEnchantGlint  : require('./modules/AlternateEnchantGlint.js'),
    BetterBedrock          : require('./modules/BetterBedrock.js'),
    BetterObservers        : require('./modules/BetterObservers.js'),
    BorderlessGlass        : require('./modules/BorderlessGlass.js'),
    CherryPicking          : require('./modules/CherryPicking.js'),
    CleanBorderlessGlass   : require('./modules/CleanBorderlessGlass.js'),
    CleanGlass             : require('./modules/CleanGlass.js'),
    ClearPumpkinBlur       : require('./modules/ClearPumpkinBlur.js'),
    ColoredBows            : require('./modules/ColoredBows.js'),
    DirectionalHoppers     : require('./modules/DirectionalHoppers.js'),
    InvisibleTotem         : require('./modules/InvisibleTotem.js'),
    LowFire                : require('./modules/LowFire.js'),
    LowShield              : require('./modules/LowShield.js'),
    NoVignette             : require('./modules/NoVignette.js'),
    OreBorders             : require('./modules/OreBorders.js'),
    PebblelessCoarseDirt   : require('./modules/PebblelessCoarseDirt.js'),
    ReducedPumpkinBlur     : require('./modules/ReducedPumpkinBlur.js'),
    SidewaysNuggets        : require('./modules/SidewaysNuggets.js'),
    SlicedSwords           : require('./modules/SlicedSwords.js'),
    SolidHoney             : require('./modules/SolidHoney.js'),
    StickyPistonSides      : require('./modules/StickyPistonSides.js'),
    UnbundledHayBales      : require('./modules/UnbundledHayBales.js'),
    UnobtrusiveScaffolding : require('./modules/UnobtrusiveScaffolding.js'),
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
    await Promise.all(promises);
    return;
}

// ----- EXPORTS -----
module.exports = {
    addModules: addModules
};
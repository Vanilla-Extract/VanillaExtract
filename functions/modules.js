// ----- IMPORTS -----
const modulesData = {
//  Module ID            : require('./path/to/module.js'),
    ColoredBows          : require('./modules/ColoredBows.js'),
    LowFire              : require('./modules/LowFire.js'),
    LowShield            : require('./modules/LowShield.js'),
    NoVignette           : require('./modules/NoVignette.js'),
    OreBorders           : require('./modules/OreBorders.js'),
    ReducedPumpkinBlur   : require('./modules/ReducedPumpkinBlur.js'),
    SlicedSwords         : require('./modules/SlicedSwords.js'),
    StickyPistonSides    : require('./modules/StickyPistonSides.js'),
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
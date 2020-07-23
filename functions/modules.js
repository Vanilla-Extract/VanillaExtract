// Firebase
const admin = require('firebase-admin');
const firebaseApp = require('./firebaseadmin.js');

// Modules
const obsidianBG           = require('./modules/UIBackgrounds/obsidianBG.js');
const SlicedSwords         = require('./modules/SlicedSwords.js');
const LowShield            = require('./modules/LowShield.js');
const NoVignette           = require('./modules/NoVignette.js');
const ReducedPumpkinBlur   = require('./modules/ReducedPumpkinBlur.js');
const ColoredBows          = require('./modules/ColoredBows.js');
const OreBorders           = require('./modules/OreBorders.js');
const LowFire              = require('./modules/LowFire.js');
const StickyPistonSides    = require('./modules/StickyPistonSides.js');

// Storage bucket
const bucket = admin.storage().bucket();

// Figure out which modules to add
const addModules = async function(format, archive, modules){
    if (format == 1) {
        // FORMAT 1
        const promises = [];
        modules.forEach((modName) => {
            if (modName === SlicedSwords.name) {
                // Sliced Swords
                promises.push(SlicedSwords.addToFile(SlicedSwords.format321, archive, bucket));
            } else if (modName === obsidianBG.name) {
                // obsidianBG
                promises.push(obsidianBG.addToFile(obsidianBG.format321, archive, bucket));
            } else if (modName === NoVignette.name) {
                // No Vignette
                promises.push(NoVignette.addToFile(NoVignette.format54321, archive, bucket));
            } else if (modName === ReducedPumpkinBlur.name) {
                // Reduced Pumpkin Blur
                promises.push(ReducedPumpkinBlur.addToFile(ReducedPumpkinBlur.format54321, archive, bucket));
            } else if (modName === ColoredBows.name) {
                // Colored Bows
                promises.push(ColoredBows.addToFile(ColoredBows.format321, archive, bucket));
            } else if (modName === OreBorders.name) {
                // Ore Borders
                promises.push(OreBorders.addToFile(OreBorders.format321, archive, bucket));
            } else if (modName === LowFire.name) {
                // Low Fire
                promises.push(LowFire.addToFile(LowFire.format321, archive, bucket));
            } else if (modName === StickyPistonSides.name) {
                // Sticky Piston Sides
                promises.push(StickyPistonSides.addToFile(StickyPistonSides.format321, archive, bucket));
            } else {
                console.log(modName +" is not a real module.");
            }
        });
        await Promise.all(promises);
        return;
    } else if (format == 2) {
        // FORMAT 2
        const promises = [];
        modules.forEach((modName) => {
            if (modName === SlicedSwords.name) {
                // Sliced Swords
                promises.push(SlicedSwords.addToFile(SlicedSwords.format321, archive, bucket));
            } else if (modName === obsidianBG.name) {
                // obsidianBG
                promises.push(obsidianBG.addToFile(obsidianBG.format321, archive, bucket));
            } else if (modName === LowShield.name) {
                // Low Shield
                promises.push(LowShield.addToFile(LowShield.format5432, archive, bucket));
            } else if (modName === NoVignette.name) {
                // No Vignette
                promises.push(NoVignette.addToFile(NoVignette.format54321, archive, bucket));
            } else if (modName === ReducedPumpkinBlur.name) {
                // Reduced Pumpkin Blur
                promises.push(ReducedPumpkinBlur.addToFile(ReducedPumpkinBlur.format54321, archive, bucket));
            } else if (modName === ColoredBows.name) {
                // Colored Bows
                promises.push(ColoredBows.addToFile(ColoredBows.format321, archive, bucket));
            } else if (modName === OreBorders.name) {
                // Ore Borders
                promises.push(OreBorders.addToFile(OreBorders.format321, archive, bucket));
            } else if (modName === LowFire.name) {
                // Low Fire
                promises.push(LowFire.addToFile(LowFire.format321, archive, bucket));
            } else if (modName === StickyPistonSides.name) {
                // Sticky Piston Sides
                promises.push(StickyPistonSides.addToFile(StickyPistonSides.format321, archive, bucket));
            } else {
                console.log(modName +" is not a real module.");
            }
        });
        await Promise.all(promises);
        return;
    } else if (format == 3) {
        // FORMAT 3
        const promises = [];
        modules.forEach((modName) => {
            if (modName === SlicedSwords.name) {
                // Sliced Swords
                promises.push(SlicedSwords.addToFile(SlicedSwords.format321, archive, bucket));
            } else if (modName === obsidianBG.name) {
                // obsidianBG
                promises.push(obsidianBG.addToFile(obsidianBG.format321, archive, bucket));
            } else if (modName === LowShield.name) {
                // Low Shield
                promises.push(LowShield.addToFile(LowShield.format5432, archive, bucket));
            } else if (modName === NoVignette.name) {
                // No Vignette
                promises.push(NoVignette.addToFile(NoVignette.format54321, archive, bucket));
            } else if (modName === ReducedPumpkinBlur.name) {
                // Reduced Pumpkin Blur
                promises.push(ReducedPumpkinBlur.addToFile(ReducedPumpkinBlur.format54321, archive, bucket));
            } else if (modName === ColoredBows.name) {
                // Colored Bows
                promises.push(ColoredBows.addToFile(ColoredBows.format321, archive, bucket));
            } else if (modName === OreBorders.name) {
                // Ore Borders
                promises.push(OreBorders.addToFile(OreBorders.format321, archive, bucket));
            } else if (modName === LowFire.name) {
                // Low Fire
                promises.push(LowFire.addToFile(LowFire.format321, archive, bucket));
            } else if (modName === StickyPistonSides.name) {
                // Sticky Piston Sides
                promises.push(StickyPistonSides.addToFile(StickyPistonSides.format321, archive, bucket));
            } else {
                console.log(modName +" is not a real module.");
            }
        });
        await Promise.all(promises);
        return;
    } else if (format == 4) {
        // FORMAT 4
        const promises = [];
        modules.forEach((modName) => {
            if (modName === SlicedSwords.name) {
                // Sliced Swords
                promises.push(SlicedSwords.addToFile(SlicedSwords.format4, archive, bucket));
            } else if (modName === obsidianBG.name) {
                // obsidianBG
                promises.push(obsidianBG.addToFile(obsidianBG.format54, archive, bucket));
            } else if (modName === LowShield.name) {
                // Low Shield
                promises.push(LowShield.addToFile(LowShield.format5432, archive, bucket));
            } else if (modName === NoVignette.name) {
                // No Vignette
                promises.push(NoVignette.addToFile(NoVignette.format54321, archive, bucket));
            } else if (modName === ReducedPumpkinBlur.name) {
                // Reduced Pumpkin Blur
                promises.push(ReducedPumpkinBlur.addToFile(ReducedPumpkinBlur.format54321, archive, bucket));
            } else if (modName === ColoredBows.name) {
                // Colored Bows
                promises.push(ColoredBows.addToFile(ColoredBows.format54, archive, bucket));
            } else if (modName === OreBorders.name) {
                // Ore Borders
                promises.push(OreBorders.addToFile(OreBorders.format4, archive, bucket));
            } else if (modName === LowFire.name) {
                // Low Fire
                promises.push(LowFire.addToFile(LowFire.format4, archive, bucket));
            } else if (modName === StickyPistonSides.name) {
                // Sticky Piston Sides
                promises.push(StickyPistonSides.addToFile(StickyPistonSides.format54, archive, bucket));
            } else {
                console.log(modName +" is not a real module.");
            }
        });
        await Promise.all(promises);
        return;
    } else if (format == 5) {
        // FORMAT 5
        const promises = [];
        modules.forEach((modName) => {
            if (modName === SlicedSwords.name) {
                // Sliced Swords
                promises.push(SlicedSwords.addToFile(SlicedSwords.format5, archive, bucket));
            } else if (modName === obsidianBG.name) {
                // obsidianBG
                promises.push(obsidianBG.addToFile(obsidianBG.format54, archive, bucket));
            } else if (modName === LowShield.name) {
                // Low Shield
                promises.push(LowShield.addToFile(LowShield.format5432, archive, bucket));
            } else if (modName === NoVignette.name) {
                // No Vignette
                promises.push(NoVignette.addToFile(NoVignette.format54321, archive, bucket));
            } else if (modName === ReducedPumpkinBlur.name) {
                // Reduced Pumpkin Blur
                promises.push(ReducedPumpkinBlur.addToFile(ReducedPumpkinBlur.format54321, archive, bucket));
            } else if (modName === ColoredBows.name) {
                // Colored Bows
                promises.push(ColoredBows.addToFile(ColoredBows.format54, archive, bucket));
            } else if (modName === OreBorders.name) {
                // Ore Borders
                promises.push(OreBorders.addToFile(OreBorders.format5, archive, bucket));
            } else if (modName === LowFire.name) {
                // Low Fire
                promises.push(LowFire.addToFile(LowFire.format5, archive, bucket));
            } else if (modName === StickyPistonSides.name) {
                // Sticky Piston Sides
                promises.push(StickyPistonSides.addToFile(StickyPistonSides.format54, archive, bucket));
            } else {
                console.log(modName +" is not a real module.");
            }
        });
        await Promise.all(promises);
        return;
    } else {
        console.log("format invalid");
    }
    return;
}

// ----- EXPORTS -----
module.exports = {
    addModules: addModules
};
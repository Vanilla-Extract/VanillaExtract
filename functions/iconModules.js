// ICON MODULES ARE HANDLED DIFFERENTLY THAN REGULAR MODULES
// Firebase
const admin = require('firebase-admin');
const firebaseApp = require('./firebaseadmin.js');

// async for each
const asyncForEach = require('./asyncForEach.js');

// Path
const path = require('path');

// Image merging
const { createCanvas, loadImage, Image } = require('canvas')

// Storage bucket
const bucket = admin.storage().bucket();

// Figure out which modules to add
const addIconModules = async function(modules, archive){
    // Set all modes to default
    let hungerMode = 0;
    let pingMode = 0;
    let witherHeartsMode = 0;
    let xpMode = 0;

    // Image buffer variables
    const defaultIcons = new Image; // Default
    const hungerIcons = new Image; // Hunger
    const pingIcons = new Image; // Ping
    const witherIcons = new Image;  // Wither
    const xpIcons = new Image; // XP
    
    /*
    ----- KEY FOR ICON MODULE MODES -----
    0 = default
    
    Hunger:
        1 = Melons

    Ping:
        1 = Rainbow
    
    WitherHearts:
        1 = Blue
    
    XP:
        1 = Rainbow

    */

    // Interpret modules so it can be used to make the icon.png file later
    await asyncForEach(modules, async (modName) => {
        if (modName === "MelonHunger") {
            hungerMode = 1;
        } else if (modName === "ColoredPing") {
            pingMode = 1;
        } else if (modName === "BlueWitherHearts") {
            witherHeartsMode = 1;
        } else if (modName === "RainbowXP") {
            xpMode = 1;
        } else {
            console.log(modName + " is not a valid icon mod");
        }
    });

    // Get defualt icons.png
    await bucket.file(path.join("packfiles/modules/IconsFileMods", "default.png")).download().then((data) => {
        defaultIcons.src = data[0];
    });

    // Get hunger icons
    if (hungerMode === 0) {
        await bucket.file(path.join("packfiles/modules/IconsFileMods", "hunger", "default.png")).download().then((data) => {
            hungerIcons.src = data[0];
        });
    } else if (hungerMode === 1) {
        await bucket.file(path.join("packfiles/modules/IconsFileMods", "hunger", "melons.png")).download().then((data) => {
            hungerIcons.src = data[0];
        });
    }

    // Get ping icons
    if (pingMode === 0) {
        await bucket.file(path.join("packfiles/modules/IconsFileMods", "ping", "default.png")).download().then((data) => {
            pingIcons.src = data[0];
        });
    } else if (pingMode === 1) {
        await bucket.file(path.join("packfiles/modules/IconsFileMods", "ping", "colored.png")).download().then((data) => {
            pingIcons.src = data[0];
        });
    }

    // Get wither icons
    if (witherHeartsMode === 0) {
        await bucket.file(path.join("packfiles/modules/IconsFileMods", "witherhearts", "default.png")).download().then((data) => {
            witherIcons.src = data[0];
        });
    } else if (witherHeartsMode === 1) {
        await bucket.file(path.join("packfiles/modules/IconsFileMods", "witherhearts", "blue.png")).download().then((data) => {
            witherIcons.src = data[0];
        });
    }

    // Get XP icons
    if (xpMode === 0) {
        await bucket.file(path.join("packfiles/modules/IconsFileMods", "xp", "default.png")).download().then((data) => {
            xpIcons.src = data[0];
        });
    } else if (xpMode === 1) {
        await bucket.file(path.join("packfiles/modules/IconsFileMods", "xp", "rainbow.png")).download().then((data) => {
            xpIcons.src = data[0];
        });
    }

    // Mix the images together
    const canvas = createCanvas(512, 512); // Make canvas
    const ctx = canvas.getContext('2d'); // Canvas context

    // Draw icons
    ctx.drawImage(defaultIcons, 0, 0);
    ctx.drawImage(hungerIcons, 0, 0);
    ctx.drawImage(pingIcons, 0, 0);
    ctx.drawImage(witherIcons, 0, 0);
    ctx.drawImage(xpIcons, 0, 0);
    
    // Add image to zip archive
    archive.append(canvas.toBuffer(), {name: path.join("assets/minecraft/textures/gui", "icons.png")});

    return;
}

// ----- EXPORTS -----
module.exports = {
    addIconModules: addIconModules
};
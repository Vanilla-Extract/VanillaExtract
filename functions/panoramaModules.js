const path = require('path');

const packFilesPath = "MenuPanoramas/";
const inPackPath = "assets/minecraft/textures/gui/title/background";
const folders = {
    ClassicPano: "ClassicPanorama",
    BastionPano: "PiglinBastion",
    SeirinsPano: "SeirinsSurvival",
};

const addModules = async function(moduleName, archive, bucket){


    // If it exists
    if (folders[moduleName] !== undefined && folders[moduleName] !== null) {
        // Image 0
        await bucket.file(path.join("packfiles", packFilesPath, folders[moduleName], '0.png')).download().then((data) => {
            archive.append(data[0], {name: path.join(inPackPath, 'panorama_0.png')});
            return;
        });

        // Image 1
        await bucket.file(path.join("packfiles", packFilesPath, folders[moduleName], '1.png')).download().then((data) => {
            archive.append(data[0], {name: path.join(inPackPath, 'panorama_1.png')});
            return;
        });
        
        // Image 2
        await bucket.file(path.join("packfiles", packFilesPath, folders[moduleName], '2.png')).download().then((data) => {
            archive.append(data[0], {name: path.join(inPackPath, 'panorama_2.png')});
            return;
        });
        
        // Image 3
        await bucket.file(path.join("packfiles", packFilesPath, folders[moduleName], '3.png')).download().then((data) => {
            archive.append(data[0], {name: path.join(inPackPath, 'panorama_3.png')});
            return;
        });
        
        // Image 4
        await bucket.file(path.join("packfiles", packFilesPath, folders[moduleName], '4.png')).download().then((data) => {
            archive.append(data[0], {name: path.join(inPackPath, 'panorama_4.png')});
            return;
        });
        
        // Image 5
        await bucket.file(path.join("packfiles", packFilesPath, folders[moduleName], '5.png')).download().then((data) => {
            archive.append(data[0], {name: path.join(inPackPath, 'panorama_5.png')});
            return;
        });
    }
    return;
};

module.exports = {
    addModules: addModules,
};
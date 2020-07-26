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
        const promises = [];

        // For all 5 images
        for (let i = 0; i <= 5; i++) {
            promises.push(
                bucket.file(path.join("packfiles", packFilesPath, folders[moduleName], i.toString()+'.png')).download().then((data) => {
                    const contents = data[0];
                    archive.append(contents, {name: path.join(inPackPath, 'panorama_'+i.toString()+'.png')});
                    return;
                })
            );
        }
        await Promise.all(promises);
    }
    return;
};

module.exports = {
    addModules: addModules,
};
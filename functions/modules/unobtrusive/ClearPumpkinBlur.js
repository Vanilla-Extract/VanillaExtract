const path = require('path');

// Module Data
const moduleData = {
    format654321: {
        packFilesPath: "modules/unobtrusive/ReducedPumpkinBlur/",
        files: [
            {
                name: "pumpkinblurClear.png",
                inPackName: "pumpkinblur.png",
                path: "assets/minecraft/textures/misc"
            },
        ]
    },
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 1 || format === 2 || format === 3 || format === 4 || format === 5 || format === 6) {
        formatData = moduleData.format654321
    } else {
        console.log('format not addressed');
        return;
    }

    // Add pumpkin overlay
    await bucket.file(path.join("packfiles", formatData.packFilesPath, formatData.files[0].name)).download().then((data) => {
        return archive.append(data[0], {name: path.join(formatData.files[0].path, formatData.files[0].inPackName)});
    });
}
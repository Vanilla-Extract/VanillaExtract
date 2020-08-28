const path = require('path');
const DirectionalHoppers = require('./utility/DirectionalHoppers');

// Module Data
const moduleData = {
    "1.16.2": "/modules/hud/",
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let directory;
    if (format === 1 || format === 2 || format === 3 || format === 4 || format === 5 || format === 6) {
        directory = moduleData["1.16.2"];
    } else {
        console.log('format not addressed');
        return;
    }
    const DLPath = path.join('packfiles', directory);

    // Add each bow to file
    await bucket.getFiles({
        autoPaginate: false,
        directory: DLPath,
    }).then(async (data) => {
        const promises = data[0].map(async (file) => {
            await file.download().then((fileData) => {
                fileName = file.name.replace(DLPath, '');
                return archive.append(fileData[0], {name: fileName});
            });
        });
        await Promise.all(promises);
    });
}
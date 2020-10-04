import { Archiver } from "archiver";
import * as path from 'path';

// ----- MODULES -----
const modulesData: Record<string, any> = {
//  ModuleID               : require('./path/to/moduleid.js'),

    // Optifine
    AlternateEntities      : require('./modules/optifine/AlternateEntities.js'),
    BlackNetherBricks      : require('./modules/optifine/BlackNetherBricks.js'),
    CherryPicking          : require('./modules/optifine/CherryPicking.js'),
    CodeCraftedWool        : require('./modules/optifine/CodeCraftedWool.js'),
    PlainLeather           : require('./modules/optifine/PlainLeather.js'),
    RedGolemFlowers        : require('./modules/optifine/RedGolemFlowers.js'),
    SidewaysNuggets        : require('./modules/optifine/SidewaysNuggets.js'),
    SolidHoney             : require('./modules/optifine/SolidHoney.js'),
    UnbundledHayBales      : require('./modules/optifine/UnbundledHayBales.js'),
}

// Figure out which modules to add
export async function addModules(format: string, archive: Archiver, modules: string[]) {
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
            const DLPath = path.join('images', directory);

            // List files
            archive.directory(DLPath, false);
            // await bucket.getFiles({
            //     autoPaginate: false,
            //     directory: DLPath,
            // }).then(async (data) => {
            //     // For each file
            //     // tslint:disable-next-line: no-shadowed-variable
            //     const promises = data[0].map(async (file) => {
            //         // Download
            //         await file.download().then((fileData) => {
            //             // Remove beginning of path from file name
            //             const fileName = file.name.replace(DLPath, '');
            //             // Add file to zip
            //             return archive.append(fileData[0], {name: fileName});
            //         });
            //     });
            //     await Promise.all(promises);
            //     return;
            // });
        }
    });
    return Promise.all(promises);
}
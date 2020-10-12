import { Archiver } from "archiver";
import * as path from 'path';
import * as fs from 'fs';

// ----- MODULES -----
const modulesData: Record<string, any> = {
//  ModuleID               : './path/to/moduleid.json',

    // Optifine
    AlternateEntities      : '/optifine/AlternateEntities.json',
    BlackNetherBricks      : '/optifine/BlackNetherBricks.json',
    CherryPicking          : '/optifine/CherryPicking.json',
    CodeCraftedWool        : '/optifine/CodeCraftedWool.json',
    PlainLeather           : '/optifine/PlainLeather.json',
    RedGolemFlowers        : '/optifine/RedGolemFlowers.json',
    SidewaysNuggets        : '/optifine/SidewaysNuggets.json',
    SolidHoney             : '/optifine/SolidHoney.json',
    UnbundledHayBales      : '/optifine/UnbundledHayBales.json',
}

// Figure out which modules to add
export async function addModules(format: string, archive: Archiver, modules: string[]) {
    // For each module
    const promises = modules.map(async (modName) => {
        // If the module exists
        if (modulesData[modName] !== undefined && modulesData[modName] !== null) {
            const obj = JSON.parse(fs.readFileSync(path.join('./src/modules/', modulesData[modName]), 'utf8'));

            // Try to get module path
            let directory;
            try {
                directory = obj[format];
            } catch (e) {
                // If version has no path return
                console.log('Invalid Version: '+e);
                return;
            }
            
            // Make path to files
            const DLPath = path.join('images', directory);

            // List files
            archive.directory(DLPath, false);
        }
    });
    return Promise.all(promises);
}
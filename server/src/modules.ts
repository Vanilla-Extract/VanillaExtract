import { Archiver } from 'archiver';
import * as path from 'path';
import * as fs from 'fs';

// ----- MODULES -----
const modulesData: Record<string, any> = {
	//  ModuleID               : './path/to/moduleid.json',

	// Aesthetic
	BetterPowdersAndDusts: '/aesthetic/BetterPowdersAndDusts.json',
	ChiseledFaces: '/aesthetic/ChiseledFaces.json',
	CreamierMilk: '/aesthetic/CreamierMilk.json',
	RealisticCoal: '/aesthetic/RealisticCoal.json',
	UniqueSeaPickleItem: '/aesthetic/UniqueSeaPickleItem.json',
	// Animation
	AnimatedSelectorArrows: '/animation/AnimatedSelectorArrows.json',
	FurnaceAnimations: '/animation/FurnaceAnimations.json',
	// Connected Texures
   	ConnectedGoldAndDiamondBlocks: '/connectedTextures/ConnectedGoldAndDiamondBlocks.json',
    	ConnectedLogs: '/connectedTextures/ConnectedLogs.json',
	ConnectedSpawners: '/connectedTextures/ConnectedSpawners.json',
	// Fixes
	BoatOarFix: '/fixes/BoatOarFix.json',
	BoneColoredBonemeal: '/fixes/BoneColoredBonemeal.json',
	ConsistentBlazeItems: '/fixes/ConsistentBlazeItems.json',
	ConsistentDoorItems: '/fixes/ConsistentDoorItems.json',
	ConsistentMooshroomEyes: '/fixes/ConsistentMooshroomEyes.json',
	ConsistentZombie: '/fixes/ConsistentZombie.json',
	CrimsonNyliumTopFix: '/fixes/CrimsonNyliumTopFix.json',
	HeartParticleFix: '/fixes/HeartParticleFix.json',
	OffCenterFix: '/fixes/OffCenterFix.json',
	RedstoneDustFix: '/fixes/RedstoneDustFix.json',
	ReverseGlisteringMelon: '/fixes/ReverseGlisteringMelon.json',
	// Fun
	CrimsonToTyrian: '/fun/CrimsonToTyrian.json',
	StickTrident: '/fun/StickTrident.json',
	BonemealColoredBones: '/fun/BonemealColoredBones.json',
	// Unobtrusive
	NoEnchantmentGlint: '/unobtrusive/NoEnchantmentGlint.json',
	ShortSwords: '/unobtrusive/ShortSwords.json',
	SlicedSwords: '/unobtrusive/SlicedSwords.json',
	// Utility
	BackTools: '/utility/BackTools.json',
	BowChargeIndicator: '/utility/BowChargeIndicator.json',
	Eggmoticons: '/utility/Eggmoticons.json',
	OutlinedWool: '/utility/OutlinedWool.json',
	OutlinedArmour: '/utility/OutlinedArmour.json',
	PotionIcons: '/utility/PotionIcons.json',
	VisualExclusiveEnchantments: '/utility/VisualExclusiveEnchantments.json'
};

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
				console.log('Invalid Version: ' + e);
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

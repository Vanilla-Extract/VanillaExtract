import { Archiver } from 'archiver';
import * as path from 'path';
import * as fs from 'fs';

// ----- MODULES -----
const modulesData: Record<string, any> = {
	//  ModuleID               : './path/to/moduleid.json',

	// Aesthetic
	BetterEggColor: '/aesthetic/BetterEggColor.json',
	BetterNetherWart: '/aesthetic/BetterNetherWart.json',
	BetterPowdersAndDusts: '/aesthetic/BetterPowdersAndDusts.json',
	BetterPressurePlates: '/aesthetic/BetterPressurePlates.json',
	BlackBlackstone: '/aesthetic/BlackBlackstone.json',
	BlackerNetherite: '/aesthetic/BlackerNetherite.json',
	BrownLeather: '/aesthetic/BrownLeather.json',
	ChineseLanterns: '/aesthetic/ChineseLanterns.json',
	ChiseledFaces: '/aesthetic/ChiseledFaces.json',
	CleanerShulkers: '/aesthetic/CleanerShulkers.json',
	ConcreteBricks: '/aesthetic/ConcreteBricks.json',
	CreamierMilk: '/aesthetic/CreamierMilk.json',
	DyeBowls: '/aesthetic/DyeBowls.json',
	GlassDoors: '/aesthetic/GlassDoors.json',
	HexagonalPrismarineBricks: '/aesthetic/HexagonalPrismarineBricks.json',
	ItemlessItemFrame: '/aesthetic/ItemlessItemFrame.json',
	LapisEnchantingTable: '/aesthetic/LapisEnchantingTable.json',
	NetheriteLodestone: '/aesthetic/NetheriteLodestone.json',
	NetherPortalEnderChest: '/aesthetic/NetherPortalEnderChest.json',
	PaintBuckets: '/aesthetic/PaintBuckets.json',
	PurpleEnder: '/aesthetic/PurpleEnder.json',
	RealisticCoal: '/aesthetic/RealisticCoal.json',
	RockierStoneTools: '/aesthetic/RockierStoneTools.json',
	RoundLogs: '/aesthetic/RoundLogs.json',
	SeamlessGlass: '/aesthetic/SeamlessGlass.json',
	SeaPickleCandles: '/aesthetic/SeaPickleCandles.json',
	SmallUniformBricks: '/aesthetic/SmallUniformBricks.json',
	SmootherBedrock: '/aesthetic/SmootherBedrock.json',
	TextlessTNT: '/aesthetic/TextlessTNT.json',
	UniqueMelonPumpkinItems: '/aesthetic/UniqueMelonPumpkinItems.json',
	UniqueProcessedOres: '/aesthetic/UniqueProcessedOres.json',
	UniqueSeaPickleItem: '/aesthetic/UniqueSeaPickleItem.json',
	WholePumpkinPie: '/aesthetic/WholePumpkinPie.json',
	WoodToBark: '/aesthetic/WoodToBark.json',
	// Animation
	AnimatedSelectorArrows: '/animation/AnimatedSelectorArrows.json',
	FurnaceAnimations: '/animation/FurnaceAnimations.json',
	// Connected Texures
	ConnectedGoldAndDiamondBlocks: '/connectedTextures/ConnectedGoldAndDiamondBlocks.json',
	ConnectedLogs: '/connectedTextures/ConnectedLogs.json',
	ConnectedPolishedStones: '/connectedTextures/ConnectedPolishedStones.json',
	ConnectedSeaLanterns: '/connectedTextures/ConnectedSeaLanterns.json',
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
	BonemealColoredBones: '/fixes/BonemealColoredBones.json',
	// Fun
	CrimsonToTyrian: '/fun/CrimsonToTyrian.json',
	ReallyShortSwords: '/fun/ReallyShortSwords.json',
	StickTrident: '/fun/StickTrident.json',

	// Unobtrusive
	LowerFire: '/unobtrusive/LowerFire.json',
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
	VisualExclusiveEnchantments: '/utility/VisualExclusiveEnchantments.json',
	VisuallyStackedItems: '/utility/VisuallyStackedItems.json',
	VisualEnchantmentBooks: '/utility/VisualEnchantmentBooks.json',
	TextIcons: '/utility/TextIcons.json',
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

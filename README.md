[<img src="https://faithfultweaks.com/images/logo.png" alt="Faithful Tweaks Logo" width="150px" />](https://faithfultweaks.com/)

# Faithful Tweaks
<p>
    <a href="https://github.com/FaithfulTweaks/FaithfulTweaks/actions"><img alt="Website Deploy" src="https://github.com/FaithfulTweaks/FaithfulTweaks/workflows/Website%20Deploy/badge.svg"></a>
    <a href="https://github.com/FaithfulTweaks/FaithfulTweaks/actions"><img alt="Functions Deploy" src="https://github.com/FaithfulTweaks/FaithfulTweaks/workflows/Functions%20Deploy/badge.svg"></a>
    <a href="https://github.com/FaithfulTweaks/FaithfulTweaks/actions"><img alt="Images Deploy" src="https://github.com/FaithfulTweaks/FaithfulTweaks/workflows/Images%20Deploy/badge.svg"></a>
    <a href="https://github.com/FaithfulTweaks/FaithfulTweaks/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/FaithfulTweaks/FaithfulTweaks"></a>
    <a href="https://github.com/FaithfulTweaks/FaithfulTweaks/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/FaithfulTweaks/FaithfulTweaks"></a>
    <a href="https://github.com/FaithfulTweaks/FaithfulTweaks/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/FaithfulTweaks/FaithfulTweaks"></a>
    <a href="https://github.com/FaithfulTweaks/FaithfulTweaks/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/FaithfulTweaks/FaithfulTweaks"></a>
</p>

An open source recreation of [Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/) for the Faithful x32 Texturepack by [The Faithful Team](https://faithful.team/).

## Creating Modules
If you're interested in creating a module, please look at [the wiki](https://github.com/FaithfulTweaks/FaithfulTweaks/wiki).

Notice: Icon/HUD modules, options background modules, and menu panorama modules are not implemented in the traditional fashion.

## Available Versions
- 1.16.2
- 1.16
- 1.15
- 1.14
- 1.13
- 1.12
- 1.11
- 1.10
- 1.9
- 1.8

## Available Modules
### Aesthetic
- AlternateEntities
- BlackNetherBricks
- CherryPicking
- CodeCraftedWool
- PlainLeather
- RedGolemFlowers
- SidewaysNuggets
- SolidHoney
- UnbundledHayBales
- PlainLeather
- SplashEnchanting
- RedGolemFlowers

### Terrain
- BetterBedrock
- LowerGrassSide
- PebblelessCoarseDirt

### Utility
- BetterObservers
- BrokenItems
- CleanRedstone
- ColoredBows
- DirectionalHoppers
- NetherwartGrowthStage
- OreBorders
- SlicedSwords
- StackedItems
- StickyPistonSides

### Unobtrusive
- AlternateEnchantGlint
- BorderlessGlass
- CleanBorderlessGlass
- CleanGlass
- ClearPumpkinBlur
- InvisibleTotem
- LowFire
- LowShield
- NoVignette
- ReducedPumpkinBlur
- UnobtrusiveRain
- UnobtrusiveScaffolding
- UnobtrusiveWater

### HUD
- BreadHunger
- BlueWitherHearts
- ColoredPing
- MelonHunger
- RainbowXP

### GUI
- DarkUI

### Options Background
- AcaciaPlanksBG
- AncientDebrisBG
- AndesiteBG
- BedrockBG
- BetterBedrockBG
- BirchPlanksBG
- DarkOakPlanksBG
- DioriteBG
- EndStoneBG
- GraniteBG
- HoneycombBG
- JunglePlanksBG
- NetherrackBG
- NetherrackBrightBG
- OakPlanksBG
- ObsidianBG
- PebblelessDirtBG
- SprucePlanksBG
- StoneBG

### Menu Panorama
- BastionPano
- ClassicPano
- EndPano
- SeirinsPano

### Coming Soon
- AlternateBlockDestruction
- FullyAgedCropMarker
- ProgressBarBlockDestruction
- PebblelessDirt
- 3DIronBars (Needs updating)
- 3DLadders (Needs updating)
- 3DLilyPads (Needs updating)
- 3DRails (Needs updating)
- 3DReeds (Needs updating)
- BrighterNether (Needs updating)

## Making requests to the Cloud Function
Example body of POST request:
```json
{
    "format":  "1.16.2",
    "modules":  ["SlicedSwords", "ReducedPumpkinBlur", "ColoredBows", "OreBorders", "StickyPistonSides"],
    "iconModules": ["MelonHunger", "ColoredPing", "BlueWitherHearts", "RainbowXP"],
    "optionsBackground": "AcaciaPlanksBG",
    "panoOption": "ClassicPano"
}
```

Example response from POST request:
```json
{
    "url": "https://firebasestorage.googleapis.com/v0/b/faithfultweaks-app.appspot.com/o/FaithfulTweaks%2F900000000-0000-0000-0000-000000000000.zip?alt=media&token=00000000-0000-0000-0000-000000000000"
}
```

## Credits
⚠ **NOTE** We try to give credit to those that created the textures but we're not great at keeping track. If you believe some textures are yours please contact us and we'll add you to this list (or take your textures down upon request).
- [Banakin](https://banakin.github.io): Making the website and various tweaks
- Doge: FullyAgedCropMarker and AlternateBlockDestruction
- [The Faithful Team](https://faithful.team/): Making the Faithful Texture Pack
- [Nekzuris](https://twitter.com/Nekzuris): ColoredPing
- Pomik108: RainbowXPBar
- Redcoke26: MelonHunger
- Seirin-Blu: Unobtrusive Rain, Unobtrusive Water
- TheRandomGamerTRG: Making the information site and various tweaks
- [Stridey](https://www.planetminecraft.com/member/stridey/): LowShield
- [Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/): Inspiration
- [jogurciQ](https://www.planetminecraft.com/member/jogurciq/): Dark UI textures

## Tech Used
- [Firebase](https://firebase.google.com/) - Backend (API, Hosting, Storage)
- [node.js](https://nodejs.org/) - Used for the API
- [Canvas](https://github.com/Automattic/node-canvas) - Combining images
- [Archiver](https://github.com/archiverjs/node-archiver) - Creating the ZIP file
- [Hugo](https://gohugo.io/) - Website framework
- [Webpack](https://webpack.js.org/) - Bundler
- [Bootstrap](https://getbootstrap.com/) - CSS framework for the website
- [jQuery](https://jquery.com/) - JavaScript Framework for the website
- [Popper](https://popper.js.org/) - Engine for description popups
- [Font Awesome](https://fontawesome.com/) - Icons used on the website

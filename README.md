[<img src="https://faithfultweaks.com/images/logo.png" alt="Faithful Tweaks Logo" width="150px" />](https://faithfultweaks.com/)

# Faithful Tweaks
<p>
    <a href="https://github.com/Banakin/FaithfulTweaks/actions"><img alt="Website Deploy" src="https://github.com/Banakin/FaithfulTweaks/workflows/Website%20Deploy/badge.svg"></a>
    <a href="https://github.com/Banakin/FaithfulTweaks/actions"><img alt="Functions Deploy" src="https://github.com/Banakin/FaithfulTweaks/workflows/Functions%20Deploy/badge.svg"></a>
    <a href="https://github.com/Banakin/FaithfulTweaks/actions"><img alt="Images Deploy" src="https://github.com/Banakin/FaithfulTweaks/workflows/Images%20Deploy/badge.svg"></a>
    <a href="https://github.com/Banakin/FaithfulTweaks/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Banakin/FaithfulTweaks"></a>
    <a href="https://github.com/Banakin/FaithfulTweaks/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Banakin/FaithfulTweaks"></a>
    <a href="https://github.com/Banakin/FaithfulTweaks/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Banakin/FaithfulTweaks"></a>
    <a href="https://github.com/Banakin/FaithfulTweaks/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Banakin/FaithfulTweaks"></a>
</p>

An open source recreation of [Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/) for the Faithful x32 Texturepack by [The Faithful Team](https://faithful.team/).

## Creating Modules
A guide on making modules is coming soon so stay tuned! For now check out [the Better Bedrock commit](https://github.com/Banakin/FaithfulTweaks/commit/4591749e34ed5151675eec693b40d28588471928) or [the Black Nether Bricks commit](https://github.com/Banakin/FaithfulTweaks/commit/bdac7167f59ed335b278229e1e11b3ae5a5915e0) (there was an issue with Black Nether Bricks, the fix was made [here](https://github.com/Banakin/FaithfulTweaks/commit/23d536ccdcbd489a6a139f4064c498d7cde491b2)).

These two commits cover updating `README.md` (this file), creating the module's javascript file, adding the module to `/functions/modules.js`, adding the module to the website, and adding the module to `/images`.

To create a module some github and javascript experience will be helpful but these files have been made so that they are fairly simple to understand.

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
- BlackNetherBricks
- CherryPicking
- SidewaysNuggets
- SolidHoney
- UnbundledHayBales

### Terrain
- BetterBedrock
- PebblelessCoarseDirt

### Utility
- BetterObservers
- ColoredBows
- DirectionalHoppers
- OreBorders
- StickyPistonSides

### Unobtrusive
- AlternateEnchantGlint
- ClearPumpkinBlur
- InvisibleTotem
- LowFire
- LowShield
- NoVignette
- ReducedPumpkinBlur
- SlicedSwords
- UnobtrusiveRain
- UnobtrusiveScaffolding
- UnobtrusiveWater

### Glass
- BorderlessGlass
- CleanBorderlessGlass
- CleanGlass

### HUD
- BlueWitherHearts
- ColoredPing
- MelonHunger
- RainbowXP

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
- DarkUI (Needs updating)

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
    "url": "https://firebasestorage.googleapis.com/v0/b/faithfultweaks.appspot.com/o/FaithfulTweaks%2F900000000-0000-0000-0000-000000000000.zip?alt=media&token=00000000-0000-0000-0000-000000000000"
}
```

## Credits
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
- [Ozzymand](https://www.planetminecraft.com/member/ozzymand/): Dark UI textures

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

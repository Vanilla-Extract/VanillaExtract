[<img src="https://faithfultweaks.web.app/images/logo.png" alt="Faithful Tweaks Logo" width="150px" />](https://faithfultweaks.web.app/)

# Faithful Tweaks

[![Website Deploy](https://github.com/Banakin/FaithfulTweaks/workflows/Website%20Deploy/badge.svg)](https://github.com/Banakin/FaithfulTweaks/actions)
[![Functions Deploy](https://github.com/Banakin/FaithfulTweaks/workflows/Functions%20Deploy/badge.svg)](https://github.com/Banakin/FaithfulTweaks/actions)
<!-- [![Storage Deploy](https://github.com/Banakin/FaithfulTweaks/workflows/Storage%20Deploy/badge.svg)](https://github.com/Banakin/FaithfulTweaks/actions) -->

An open source recreation of [Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/) for the Faithful x32 Texturepack by [The Faithful Team](https://faithful.team/).

## Creating Modules

A guide on making modules is coming soon so stay tuned! For now check out [the Better Bedrock commit](https://github.com/Banakin/FaithfulTweaks/commit/4591749e34ed5151675eec693b40d28588471928) or [the Black Nether Bricks commit](https://github.com/Banakin/FaithfulTweaks/commit/bdac7167f59ed335b278229e1e11b3ae5a5915e0) (there was an issue with Black Nether Bricks, the fix was made [here](https://github.com/Banakin/FaithfulTweaks/commit/23d536ccdcbd489a6a139f4064c498d7cde491b2)).

These two commits cover updating `README.md` (this file), creating the module's javascript file, adding the module to `/functions/modules.js`, adding the module to the website, and adding the module to `/images`.

To create a module some github and javascript experience will be helpful but these files have been made so that they are fairly simple to understand.

Notice: Icon/HUD modules, options background modules, and menu panorama modules are not implemented in the traditional fashion.

## Available Modules

### Aesthetic

- BlackNetherBricks
- CherryPicking
- UnbundledHayBales
- SolidHoney
- SidewaysNuggets

### Terrain

- BetterBedrock
- PebblelessCoarseDirt

### Utility

- OreBorders
- StickyPistonSides
- DirectionalHoppers
- BetterObservers
- ColoredBows

### Unobtrusive

- UnobtrusiveScaffolding
- LowFire
- LowShield
- NoVignette
- ReducedPumpkinBlur
- ClearPumpkinBlur
- AlternateEnchantGlint
- InvisibleTotem
- SlicedSwords

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

- BrighterNether
- DarkUI
- MineProgressBar
- PebblelessDirt
- UnobtrusiveRain
- UnobtrusiveWater

## Making requests to the Cloud Function

Example body of POST request:

```json
{
    "format":  5,
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
- [The Faithful Team](https://faithful.team/): Making the Faithful Texture Pack
- [Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/): Inspiration
- [Stridey](https://www.planetminecraft.com/member/stridey/): LowShield
- Redcoke26: MelonHunger
- [Nekzuris](https://twitter.com/Nekzuris): ColoredPing
- Pomik108: RainbowXPBar
- Seirin-Blu: Unobtrusive Rain, Unobtrusive Water

## Tech Used

- [Firebase](https://firebase.google.com/) - Backend (API, Hosting, Storage)
- [node.js](https://nodejs.org/) - Used for the API
- [Canvas](https://github.com/Automattic/node-canvas) - Combining images
- [Archiver](https://github.com/archiverjs/node-archiver) - Creating the ZIP file
- [Hugo](https://gohugo.io/) - Website framework
- [Bootstrap](https://getbootstrap.com/) - CSS framework for the website
- [jQuery](https://jquery.com/) - JavaScript Framework for the website
- [Popper](https://popper.js.org/) - Engine for description popups
- [Font Awesome](https://fontawesome.com/) - Icons used on the website

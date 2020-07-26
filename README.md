# Faithful Tweaks (MC 1.6.1 - 1.16.1)
An open source recreation of [Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/) for the Faithful x32 Texturepack by [The Faithful Team](https://faithful.team/)

For an example commit check out [this commit](https://github.com/Banakin/FaithfulTweaks/commit/289d1dc68b6eab63027fb9f9afcf7a6f910bdfc8)

I plan on redoing the frontend to accomodate for new backgrounds and version specific modules. Also I need to drop Bootsrap Studio asap (Also add the discord to the website).

`Notice: Icon/HUD modules, options background modules, and menu panorama modules are not implemented in the raditional fashon`

### Avalable Modules
- LowShield
- NoVignette
- SlicedSwords
- ReducedPumpkinBlur
- ColoredBows
- OreBorders
- LowFire
- StickyPistonSides

### Icon Modules
- MelonHunger
- ColoredPing
- BlueWitherHearts
- RainbowXP

### Backgrounds
- ObsidianBG
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
- SprucePlanksBG
- StoneBG
- PebblelessDirtBG

### Panoramas
- ClassicPano
- BastionPano
- SeirinsPano

### Coming Soon
- ClearPumpkinBlur
- DirectionalHoppers
- DarkUI
- BetterObservers
- BrighterNether
- CherryPicking
- DirectionalHoppers
- MineProgressBar
- PebblelessCoarseDirt
- PebblelessDirt
- SidewaysNuggets
- SolidHoney
- UnbundledHayBales
- UnobtrusiveRain
- UnobtrusiveScaffolding
- UnobtrusiveWater
- CleanGlass
- BorderlessGlass
- CleanAndBorderlessGlass

## Making requests to the Cloud Function
Example body of POST request:
```json
{
	"format":  5,
	"modules":  ["ObsidianBG", "LowShield", "NoVignette", "SlicedSwords", "ReducedPumpkinBlur", "ColoredBows", "OreBorders", "LowFire", "StickyPistonSides"],
	"iconModules": ["MelonHunger", "ColoredPing", "BlueWitherHearts", "RainbowXP"],
	"optionsBackground": "ObsidianBG",
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
-  [Banakin](https://banakin.github.io): Making the website and various tweaks
-  [The Faithful Team](https://faithful.team/): Making the Faithful Texture Pack
-  [Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/): Inspiration
-  [Stridey](https://www.planetminecraft.com/member/stridey/): LowShield
- Redcoke26: MelonHunger
-  [Nekzuris](https://twitter.com/Nekzuris): ColoredPing
- Pomik108: RainbowXPBar
- Seirin-Blu: Unobtrusive Rain, Unobtrusive Water

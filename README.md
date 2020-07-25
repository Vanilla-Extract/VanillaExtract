# Faithful Tweaks (MC 1.6.1 - 1.16.1)
An open source recreation of [Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/) for the Faithful x32 Texturepack by [The Faithful Team](https://faithful.team/)

For an example commit check out [this commit](https://github.com/Banakin/FaithfulTweaks/commit/289d1dc68b6eab63027fb9f9afcf7a6f910bdfc8)

### Avalable Modules
- ObsidianBG
- LowShield
- NoVignette
- SlicedSwords
- ReducedPumpkinBlur
- ColoredBows
- OreBorders
- LowFire
- StickyPistonSides

### Icon Modules
- MelonHunger (ICON)
- ColoredPing (ICON)
- BlueWitherHearts (ICON)
- RainbowXP (ICON)

`Notice: Modules labeled "(ICON)" modify the icon.png file and are not implemented like traditional modules.`

### Coming Soon
- DirectionalHoppers
- DarkUI


## Making requests to the Cloud Function
Example body of POST request:
```json
{
	"format":  5,
	"modules":  ["ObsidianBG", "LowShield", "NoVignette", "SlicedSwords", "ReducedPumpkinBlur", "ColoredBows", "OreBorders", "LowFire", "StickyPistonSides"],
	"iconModules": ["MelonHunger", "ColoredPing", "BlueWitherHearts", "RainbowXP"]
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

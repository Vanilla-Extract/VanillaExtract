
# Faithful Tweaks (MC 1.6.1 - 1.16.1)


Credits:
-  [Banakin](https://banakin.github.io): Making the website and various tweaks
-  [The Faithful Team](https://faithful.team/): Making the Faithful Texture Pack
-  [Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/): Inspiration
-  [Stridey](https://www.planetminecraft.com/member/stridey/): LowShield
- Redcoke26: MelonHunger
-  [Nekzuris](https://twitter.com/Nekzuris): ColoredPing
- Pomik108: RainbowXPBar

  

Avalable Modules:
- obsidianBG
- LowShield
- NoVignette
- SlicedSwords
- ReducedPumpkinBlur
- ColoredBows
- OreBorders
- LowFire
- StickyPistonSides

Icon Modules:
- MelonHunger (ICON)
- ColoredPing (ICON)
- BlueWitherHearts (ICON)
- RainbowXP (ICON)

Coming Soon:
- DirectionalHoppers
- DarkUI


Notice: Modules labeled "(ICON)" modify the icon.png file and are not implemented like traditional modules.

Body of POST request:
```json
{
	"format":  5,
	"modules":  ["obsidianBG", "LowShield", "NoVignette", "SlicedSwords", "ReducedPumpkinBlur", "ColoredBows", "OreBorders", "LowFire", "StickyPistonSides"],
	"iconModules": ["MelonHunger", "ColoredPing", "BlueWitherHearts", "RainbowXP"]
}
```

Response of POST request:
```json
{
	"url": "https://example.com/pack.zip"
}
```
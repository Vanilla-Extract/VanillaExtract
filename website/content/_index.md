---
title: Home

formats:
    - id: 1
      display: "1.6.1 - 1.8.9"
    - id: 2
      display: "1.9 - 1.10.2"
    - id: 3
      display: "1.11 - 1.12.2"
    - id: 4
      display: "1.13 - 1.14.4"
    - id: 5
      display: "1.15 - 1.16.1"
      default: true


# Normal modules
normal_modules:
# ----- KEY TO MODULES LIST -----
#     id = The id of your module (set in functions/modules.js inside modulesData) THIS IS CASE SENSITIVE 
#     name = The name that will display on the website
#     image = The url to the image (should be in the website/static/images/modules/normal/ folder)
#     description = A description of what the module should do
#     origin = Where the module came from, should be "community" unless told otherwise (options are vanillatweaks, faithfultweaks, community)
#     notcompatable = Resource pack formats that the module is incompatible with (options are 1, 2, 3, 4, 5)

    - id: "LowShield"
      name: "Low Shield"
      image: "/images/modules/normal/LowShield.png"
      description: "Lowers the sheild when its held"
      origin: "vanillatweaks"
      notcompatable:
        - 1
    
    - id: "NoVignette"
      name: "No Vignette"
      image: "/images/modules/normal/NoVignette.png"
      origin: "vanillatweaks"
    
    - id: "SlicedSwords"
      name: "Sliced Swords"
      image: "/images/modules/normal/SlicedSwords.png"
      origin: "faithfultweaks"
    
    - id: "ReducedPumpkinBlur"
      name: "Reduced Pumpkin Blur"
      image: "/images/modules/normal/ReducedPumpkinBlur.png"
      origin: "vanillatweaks"
    
    - id: "ColoredBows"
      name: "Colored Bow Stages"
      image: "/images/modules/normal/ColoredBows.png"
      origin: "faithfultweaks"
    
    - id: "OreBorders"
      name: "Ore Borders"
      image: "/images/modules/normal/OreBorders.png"
      origin: "vanillatweaks"
    
    - id: "LowFire"
      name: "Low Fire"
      image: "/images/modules/normal/LowFire.png"
      origin: "vanillatweaks"
    
    - id: "StickyPistonSides"
      name: "Sticky Piston Sides"
      image: "/images/modules/normal/StickyPistonSides.png"
      origin: "vanillatweaks"

# Options backgrounds
options_backgrounds:
    - id: "ObsidianBG"
      name: "Obsidian"
      image: "/images/modules/optionsbg/Obsidian.png"
      origin: "faithfultweaks"

# Hud modules
HUD_modules:
    - id: "MelonHunger"
      name: "Melon Hunger"
      image: "/images/modules/hudmods/MelonHunger.png"
      origin: "faithfultweaks"

    - id: "ColoredPing"
      name: "Colored Ping"
      image: "/images/modules/hudmods/ColoredPing.png"
      origin: "vanillatweaks"
      
    - id: "BlueWitherHearts"
      name: "Blue Wither Hearts"
      image: "/images/modules/hudmods/BlueWitherHearts.png"
      origin: "faithfultweaks"
      
    - id: "RainbowXP"
      name: "Rainbow XP Bar"
      image: "/images/modules/hudmods/RainbowXP.png"
      origin: "vanillatweaks"
---
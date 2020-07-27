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
      display: "1.15.1 - 1.16.1"


# Normal modules
normal_modules:
# ----- KEY TO MODULES LIST -----
#     id = The id of your module (set in functions/modules.js inside modulesData) THIS IS CASE SENSITIVE 
#     name = The name that will display on the website
#     image = The url to the image (should be in the website/static/images/ folder)
#     description = A description of what the module should do
#     origin = Where the module came from, should be "community" unless told otherwise (options are vanillatweaks, faithfultweaks, community)
#     notcompatable = Resource pack formats that the module is incompatible with (options are 1, 2, 3, 4, 5)

    - id: "LowShield"
      name: "Low Shield"
      image: "/images/normal/LowShield.png"
      description: "Lowers the sheild when its held"
      origin: "vanillatweaks"
      notcompatable:
        - 1
    
    - id: "NoVignette"
      name: "No Vignette"
      image: "/images/normal/NoVignette.png"
      origin: "vanillatweaks"
    
    - id: "SlicedSwords"
      name: "Sliced Swords"
      image: "/images/normal/SlicedSwords.png"
      origin: "faithfultweaks"
    
    - id: "ReducedPumpkinBlur"
      name: "Reduced Pumpkin Blur"
      image: "/images/normal/ReducedPumpkinBlur.png"
      origin: "vanillatweaks"
    
    - id: "ColoredBows"
      name: "Colored Bow Stages"
      image: "/images/normal/ColoredBows.png"
      origin: "faithfultweaks"
    
    - id: "OreBorders"
      name: "Ore Borders"
      image: "/images/normal/OreBorders.png"
      origin: "vanillatweaks"
    
    - id: "LowFire"
      name: "Low Fire"
      image: "/images/normal/LowFire.png"
      origin: "vanillatweaks"
    
    - id: "StickyPistonSides"
      name: "Sticky Piston Sides"
      image: "/images/normal/StickyPistonSides.png"
      origin: "vanillatweaks"

# Options backgrounds
options_bakcgrounds:
    - id: "ObsidianBG"
      name: "Obsidian"
      image: "/images/optionsbg/Obsidian.png"
      origin: "faithfultweaks"

# Hud modules
HUD_modules:
    - id: "MelonHunger"
      name: "Melon Hunger"
      image: "/images/hudmods/MelonHunger.png"
      origin: "faithfultweaks"

    - id: "ColoredPing"
      name: "Colored Ping"
      image: "/images/hudmods/ColoredPing.png"
      origin: "vanillatweaks"
      
    - id: "BlueWitherHearts"
      name: "Blue Wither Hearts"
      image: "/images/hudmods/BlueWitherHearts.png"
      origin: "faithfultweaks"
      
    - id: "RainbowXP"
      name: "Rainbow XP Bar"
      image: "/images/hudmods/RainbowXP.png"
      origin: "vanillatweaks"
---
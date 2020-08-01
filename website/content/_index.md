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

sections:
  # Normal modules
  - id: "normalSection"
    display: "Normal Modules"
    modules:
# ----- KEY TO MODULES LIST -----
#       id = The id of your module (set in functions/modules.js inside modulesData) THIS IS CASE SENSITIVE 
#       name = The name that will display on the website
#       image = The url to the image (should be in the website/static/images/modules/normal/ folder)
#       description = A description of what the module should do
#       origin = Where the module came from, should be "community" unless told otherwise (options are vanillatweaks, faithfultweaks, community)
#       notcompatable = Resource pack formats that the module is incompatible with (options are 1, 2, 3, 4, 5)
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
        description: "Removes the darkened corners of the screen that occur in darker areas when graphics are set to 'fancy'."
        origin: "vanillatweaks"
      
      - id: "SlicedSwords"
        name: "Sliced Swords"
        image: "/images/modules/normal/SlicedSwords.png"
        origin: "faithfultweaks"
      
      - id: "ReducedPumpkinBlur"
        name: "Reduced Pumpkin Blur"
        image: "/images/modules/normal/ReducedPumpkinBlur.png"
        description: "Increases visibility when wearing Pumpkins."
        origin: "vanillatweaks"
      
      - id: "ColoredBows"
        name: "Colored Bow Stages"
        image: "/images/modules/normal/ColoredBows.png"
        origin: "faithfultweaks"
      
      - id: "OreBorders"
        name: "Ore Borders"
        image: "/images/modules/normal/OreBorders.png"
        description: "Places a border around ores for easier visibility."
        origin: "vanillatweaks"
      
      - id: "LowFire"
        name: "Low Fire"
        image: "/images/modules/normal/LowFire.png"
        description: "Lowers the height of fire."
        origin: "vanillatweaks"
      
      - id: "StickyPistonSides"
        name: "Sticky Piston Sides"
        image: "/images/modules/normal/StickyPistonSides.png"
        description: "Displays Slime on the sides of Sticky Pistons to easily differentiate them from regular pistons."
        origin: "vanillatweaks"
        
      - id: "AlternateEnchantGlint"
        name: "Alternate Enchantment Glint"
        image: "/images/modules/normal/AlternateEnchantGlint.png"
        origin: "vanillatweaks"

      - id: "BetterObservers"
        name: "Better Observers"
        image: "/images/modules/normal/BetterObservers.png"
        origin: "vanillatweaks"

      - id: "CherryPicking"
        name: "Cherry Picking"
        image: "/images/modules/normal/CherryPicking.png"
        origin: "vanillatweaks"

      - id: "ClearPumpkinBlur"
        name: "Clear Pumpkin Blur"
        image: "/images/modules/normal/ClearPumpkinBlur.png"
        origin: "vanillatweaks"

      - id: "DirectionalHoppers"
        name: "Directional Hoppers"
        image: "/images/modules/normal/DirectionalHoppers.png"
        origin: "vanillatweaks"

      - id: "InvisibleTotem"
        name: "Invisible Totem"
        image: "/images/modules/normal/InvisibleTotem.png"
        origin: "vanillatweaks"

      - id: "PebblelessCoarseDirt"
        name: "Pebbleless Coarse Dirt"
        image: "/images/modules/normal/PebblelessCoarseDirt.png"
        origin: "vanillatweaks"

      - id: "SidewaysNuggets"
        name: "Sideways Nuggets"
        image: "/images/modules/normal/SidewaysNuggets.png"
        origin: "vanillatweaks"

      - id: "SolidHoney"
        name: "Solid Honey Blocks"
        image: "/images/modules/normal/SolidHoney.png"
        origin: "vanillatweaks"

      - id: "UnbundledHayBales"
        name: "Unbundled Hay Bales"
        image: "/images/modules/normal/UnbundledHayBales.png"
        origin: "vanillatweaks"

      - id: "UnobtrusiveScaffolding"
        name: "Unobtrusive Scaffolding"
        image: "/images/modules/normal/UnobtrusiveScaffolding.png"
        origin: "vanillatweaks"
      
      - id: "BetterBedrock"
        name: "Better Bedrock"
        image: "/images/modules/normal/BetterBedrock.png"
        origin: "vanillatweaks"
  
  # Glass Modules
  - id: "glassSection"
    display: "Glass Modules"
    modules:
      - id: "BorderlessGlass"
        name: "Borderless Glass"
        image: "/images/modules/normal/BorderlessGlass.png"
        origin: "vanillatweaks"

      - id: "CleanBorderlessGlass"
        name: "Clean Borderless Glass"
        image: "/images/modules/normal/CleanBorderlessGlass.png"
        origin: "vanillatweaks"

      - id: "CleanGlass"
        name: "Clean Glass"
        image: "/images/modules/normal/CleanGlass.png"
        origin: "vanillatweaks"

  # Hud modules
  - id: "hudSection"
    display: "HUD Modules"
    modules:
      - id: "MelonHunger"
        name: "Melon Hunger"
        image: "/images/modules/hudmods/MelonHunger.png"
        description: "Replaces hunger bar with melon icons."
        origin: "faithfultweaks"

      - id: "ColoredPing"
        name: "Colored Ping"
        image: "/images/modules/hudmods/ColoredPing.png"
        description: "Changes the color of the ping bars based on your connection."
        origin: "vanillatweaks"
        
      - id: "BlueWitherHearts"
        name: "Blue Wither Hearts"
        image: "/images/modules/hudmods/BlueWitherHearts.png"
        description: "Makes Hearts blue for better visibility while you're under the wither effect."
        origin: "faithfultweaks"
        
      - id: "RainbowXP"
        name: "Rainbow XP Bar"
        image: "/images/modules/hudmods/RainbowXP.png"
        description: "Changes the XP bar to a rainbow XP bar."
        origin: "vanillatweaks"
    
  # Options Background modules
  - id: "optionsbgSection"
    display: "Options Background"
    modules:
      - id: "AcaciaPlanksBG"
        name: "Acacia Planks"
        image: "/images/modules/optionsbg/AcaciaPlanks.png"
        origin: "vanillatweaks"

      - id: "AncientDebrisBG"
        name: "Ancient Debris"
        image: "/images/modules/optionsbg/AncientDebris.png"
        origin: "vanillatweaks"

      - id: "AndesiteBG"
        name: "Andesite"
        image: "/images/modules/optionsbg/andesite.png"
        origin: "vanillatweaks"

      - id: "BedrockBG"
        name: "Bedrock"
        image: "/images/modules/optionsbg/bedrock.png"
        origin: "vanillatweaks"

      - id: "BetterBedrockBG"
        name: "Better Bedrock"
        image: "/images/modules/optionsbg/BetterBedrock.png"
        origin: "faithfultweaks"

      - id: "BirchPlanksBG"
        name: "Birch Planks"
        image: "/images/modules/optionsbg/BirchPlanks.png"
        origin: "vanillatweaks"

      - id: "DarkOakPlanksBG"
        name: "Dark Oak Planks"
        image: "/images/modules/optionsbg/DarkOakPlanks.png"
        origin: "vanillatweaks"

      - id: "DioriteBG"
        name: "Diorite"
        image: "/images/modules/optionsbg/diorite.png"
        origin: "vanillatweaks"

      - id: "EndStoneBG"
        name: "End Stone"
        image: "/images/modules/optionsbg/EndStone.png"
        origin: "vanillatweaks"

      - id: "GraniteBG"
        name: "Granite"
        image: "/images/modules/optionsbg/granite.png"
        origin: "vanillatweaks"

      - id: "HoneycombBG"
        name: "Honeycomb"
        image: "/images/modules/optionsbg/HoneycombBlock.png"
        origin: "vanillatweaks"

      - id: "JunglePlanksBG"
        name: "Jungle Planks"
        image: "/images/modules/optionsbg/JunglePlanks.png"
        origin: "vanillatweaks"

      - id: "NetherrackBG"
        name: "Netherrack"
        image: "/images/modules/optionsbg/netherrack.png"
        origin: "vanillatweaks"

      - id: "NetherrackBrightBG"
        name: "Bright Netherrack"
        image: "/images/modules/optionsbg/NetherrackBright.png"
        origin: "faithfultweaks"

      - id: "OakPlanksBG"
        name: "Oak Planks"
        image: "/images/modules/optionsbg/OakPlanks.png"
        origin: "vanillatweaks"
      
      - id: "ObsidianBG"
        name: "Obsidian"
        image: "/images/modules/optionsbg/Obsidian.png"
        origin: "faithfultweaks"

      - id: "PebblelessDirtBG"
        name: "Pebbleless Dirt"
        image: "/images/modules/optionsbg/PebblelessDirt.png"
        origin: "faithfultweaks"

      - id: "SprucePlanksBG"
        name: "Spruce Planks"
        image: "/images/modules/optionsbg/SprucePlanks.png"
        origin: "vanillatweaks"

      - id: "StoneBG"
        name: "Stone"
        image: "/images/modules/optionsbg/stone.png"
        origin: "vanillatweaks"
    
  # Panoramas Background modules
  - id: "panoramasSection"
    display: "Menu Panorama"
    modules:
      - id: "ClassicPano"
        name: "Classic Panorama"
        image: "/images/modules/panos/Classic.png"
        description: "The classic beta 1.8 background."
        origin: "vanillatweaks"

      - id: "BastionPano"
        name: "Piglin Bastion"
        image: "/images/modules/panos/Bastion.png"
        description: "A partially rebuilt Piglin Bastion."
        origin: "faithfultweaks"

      - id: "SeirinsPano"
        name: "Seirin's Survival World"
        image: "/images/modules/panos/Seirin.png"
        origin: "faithfultweaks"
---
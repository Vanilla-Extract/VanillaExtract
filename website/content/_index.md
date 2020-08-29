---
title: Home

formats:
    - id: 1-8
      display: "1.8"
    - id: 1-9
      display: "1.9"
    - id: 1-10
      display: "1.10"
    - id: 1-11
      display: "1.11"
    - id: 1-12
      display: "1.12"
    - id: 1-13
      display: "1.13"
    - id: 1-14
      display: "1.14"
    - id: 1-15
      display: "1.15"
    - id: 1-16
      display: "1.16"
    - id: 1-16-2
      display: "1.16.2"
      default: true

# ----- KEY TO MODULES LIST -----
#       id = The id of your module (set in functions/modules.js inside modulesData) THIS IS CASE SENSITIVE 
#       name = The name that will display on the website
#       image = The url to the image (should be in the website/static/images/modules/normal/ folder)
#       description = A description of what the module should do
#       origin = Where the module came from, should be "community" unless told otherwise (options are vanillatweaks, faithfultweaks, community)
#       notcompatable = Versions that the module is incompatible with (Options are the id's of the format section above)

sections:
  # Aesthetic
  - id: "aestheticSection"
    display: "Aesthetic"
    modules:
      - id: "CherryPicking"
        name: "Cherry Picking"
        image: "/images/modules/aesthetic/CherryPicking.png"
        description: "Changes the texture of cake to remove the large cherry in the center."
        origin: "vanillatweaks"

      - id: "UnbundledHayBales"
        name: "Unbundled Hay Bales"
        image: "/images/modules/aesthetic/UnbundledHayBales.png"
        description: "Gets rid of the red strings around Hay Bales."
        origin: "vanillatweaks"

      - id: "SolidHoney"
        name: "Solid Honey Blocks"
        image: "/images/modules/aesthetic/SolidHoney.png"
        description: "Eliminates Honey Block transparency."
        origin: "vanillatweaks"
        notcompatable:
          - 1-8
          - 1-9
          - 1-10
          - 1-11
          - 1-12
          - 1-13
          - 1-14

      - id: "SidewaysNuggets"
        name: "Sideways Nuggets"
        image: "/images/modules/aesthetic/SidewaysNuggets.png"
        description: "Rotates Iron Nuggets to be consistent with the other nugget textures."
        origin: "vanillatweaks"
        notcompatable:
          - 1-8
          - 1-9
          - 1-10

      - id: "BlackNetherBricks"
        name: "Black Nether Bricks"
        image: "/images/modules/aesthetic/BlackNetherBricks.png"
        description: "Changes the texture of Nether Bricks to make them black."
        origin: "vanillatweaks"
  
  # Terrain
  - id: "terrainSection"
    display: "Terrain"
    modules:
      - id: "BetterBedrock"
        name: "Better Bedrock"
        image: "/images/modules/terrain/BetterBedrock.png"
        description: "Changes the texture of Bedrock to be less noisy and more natural-looking."
        origin: "vanillatweaks"

      - id: "PebblelessCoarseDirt"
        name: "Pebbleless Coarse Dirt"
        image: "/images/modules/terrain/PebblelessCoarseDirt.png"
        description: "Gets rid of the white pebbles in Coarse Dirt."
        origin: "vanillatweaks"
  
  # Utility
  - id: "utilitySection"
    display: "Utility"
    modules:
      - id: "OreBorders"
        name: "Ore Borders"
        image: "/images/modules/utility/OreBorders.png"
        description: "Places a border around ores for easier visibility."
        origin: "vanillatweaks"
      
      - id: "StickyPistonSides"
        name: "Sticky Piston Sides"
        image: "/images/modules/utility/StickyPistonSides.png"
        description: "Displays Slime on the sides of Sticky Pistons to easily differentiate them from regular pistons."
        origin: "vanillatweaks"

      - id: "DirectionalHoppers"
        name: "Directional Hoppers"
        image: "/images/modules/utility/DirectionalHoppers.png"
        description: "Gives Hoppers arrows on top to indicate in which direction they are pointing."
        origin: "vanillatweaks"

      - id: "BetterObservers"
        name: "Better Observers"
        image: "/images/modules/utility/BetterObservers.png"
        description: "Gives all sides of the Observer block directional indicators which display updates."
        origin: "vanillatweaks"
        notcompatable:
          - 1-8
          - 1-9
          - 1-10
      
      - id: "ColoredBows"
        name: "Colored Bow Stages"
        image: "/images/modules/utility/ColoredBows.png"
        description: "Colors the bow handle to show how far back you've pulled." 
        origin: "faithfultweaks"

  # Unobtrusive
  - id: "unobtrusiveSection"
    display: "Unobtrusive"
    modules:
      - id: "UnobtrusiveScaffolding"
        name: "Unobtrusive Scaffolding"
        image: "/images/modules/unobtrusive/UnobtrusiveScaffolding.png"
        description: "Creates a hole in the top of scaffolding, allowing you to traverse up and down them more comfortably."
        origin: "vanillatweaks"
        notcompatable:
          - 1-8
          - 1-9
          - 1-10
          - 1-11
          - 1-12
          - 1-13
      
      - id: "LowFire"
        name: "Low Fire"
        image: "/images/modules/unobtrusive/LowFire.png"
        description: "Lowers the height of fire."
        origin: "vanillatweaks"

      - id: "LowShield"
        name: "Low Shield"
        image: "/images/modules/unobtrusive/LowShield.png"
        description: "Lowers the sheild when its held"
        origin: "vanillatweaks"
        notcompatable:
          - 1-8
      
      - id: "NoVignette"
        name: "No Vignette"
        image: "/images/modules/unobtrusive/NoVignette.png"
        description: "Removes the darkened corners of the screen that occur in darker areas when graphics are set to 'fancy'."
        origin: "vanillatweaks"
      
      - id: "ReducedPumpkinBlur"
        name: "Reduced Pumpkin Blur"
        image: "/images/modules/unobtrusive/ReducedPumpkinBlur.png"
        description: "Increases visibility when wearing Pumpkins."
        origin: "vanillatweaks"

      - id: "ClearPumpkinBlur"
        name: "Clear Pumpkin Blur"
        image: "/images/modules/unobtrusive/ClearPumpkinBlur.png"
        description: "Removes the pumpkin overlay completely when worn."
        origin: "vanillatweaks"

      - id: "AlternateEnchantGlint"
        name: "Alternate Enchantment Glint"
        image: "/images/modules/unobtrusive/AlternateEnchantGlint.png"
        description: "Changes the enchantment glint to a much more sleek and less overpowering glint."
        origin: "vanillatweaks"

      - id: "InvisibleTotem"
        name: "Invisible Totem"
        image: "/images/modules/unobtrusive/InvisibleTotem.png"
        description: "Renders the Totem of Undying as completely invisible when in first person mode."
        origin: "vanillatweaks"
        notcompatable:
          - 1-8
          - 1-9
          - 1-10
      
      - id: "SlicedSwords"
        name: "Sliced Swords"
        image: "/images/modules/unobtrusive/SlicedSwords.png"
        description: "Changes the sword texture to be shorter for more visibility."
        origin: "faithfultweaks"

      - id: "UnobtrusiveRain"
        name: "Unobtrusive Rain"
        image: "/images/modules/unobtrusive/UnobtrusiveRain.png"
        description: "Makes rain smaller and clearer to allow for better visibility and a nicer effect from rain."
        origin: "vanillatweaks"
        notcompatable:
          - 1-8
          - 1-9
          - 1-10
          - 1-11
          - 1-12
          - 1-13

      - id: "UnobtrusiveWater"
        name: "Unobtrusive Water"
        image: "/images/modules/unobtrusive/UnobtrusiveWater.png"
        description: "Makes water more transparent so it is easier to see through."
        origin: "faithfultweaks"
  
  # Glass Modules
  - id: "glassSection"
    display: "Glass Modules"
    modules:
      - id: "BorderlessGlass"
        name: "Borderless Glass"
        image: "/images/modules/glass/BorderlessGlass.png"
        description: "Gets rid of the border on the edges of the glass textures to provide for cleaner and more transparent glass."
        origin: "vanillatweaks"

      - id: "CleanBorderlessGlass"
        name: "Clean Borderless Glass"
        image: "/images/modules/glass/CleanBorderlessGlass.png"
        description: "Gets rid of the border and glass streaks."
        origin: "vanillatweaks"

      - id: "CleanGlass"
        name: "Clean Glass"
        image: "/images/modules/glass/CleanGlass.png"
        description: "Gets rid of glass streaks, resulting in clean-looking glass."
        origin: "vanillatweaks"

  # Hud modules
  - id: "hudSection"
    display: "HUD Modules"
    modules:
      - id: "MelonHunger"
        name: "Melon Hunger"
        image: "/images/modules/hud/MelonHunger.png"
        description: "Replaces hunger bar with melon icons."
        origin: "faithfultweaks"

      - id: "ColoredPing"
        name: "Colored Ping"
        image: "/images/modules/hud/ColoredPing.png"
        description: "Changes the color of the ping bars based on your connection."
        origin: "vanillatweaks"
        
      - id: "BlueWitherHearts"
        name: "Blue Wither Hearts"
        image: "/images/modules/hud/BlueWitherHearts.png"
        description: "Makes Hearts blue for better visibility while you're under the wither effect."
        origin: "faithfultweaks"
        
      - id: "RainbowXP"
        name: "Rainbow XP Bar"
        image: "/images/modules/hud/RainbowXP.png"
        description: "Changes the XP bar to a rainbow XP bar."
        origin: "vanillatweaks"

  # UI modules
  - id: "uiSection"
    display: "UI Modules"
    modules:
      - id: "DarkUI"
        name: "Dark UI"
        image: "/images/modules/ui/DarkUI.png"
        description: "Changes all inventories and UIs to be darker."
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
        image: "/images/modules/panoramas/Classic.png"
        description: "The classic beta 1.8 background."
        origin: "vanillatweaks"

      - id: "BastionPano"
        name: "Piglin Bastion"
        image: "/images/modules/panoramas/Bastion.png"
        description: "A partially rebuilt Piglin Bastion."
        origin: "faithfultweaks"

      - id: "EndPano"
        name: "The End Dimension"
        image: "/images/modules/panoramas/End.png"
        description: "An End City"
        origin: "faithfultweaks"

      - id: "SeirinsPano"
        name: "Seirin's Survival World"
        image: "/images/modules/panoramas/Seirin.png"
        description: "The survival world of Seirin"
        origin: "faithfultweaks"
---
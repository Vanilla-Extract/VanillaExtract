let format = "5";
let modules = [];
let iconModules = [];
let optionsBackground;
let panoOption;

// On clicks
$(document).ready(function(){
    // Hide alerts on close instead of removing them from the dom
    $('.alert .close').on('click', function(){
        $(this).parent().hide();
    });

    // Download
    $('#downloadPack').click(downloadPack);

    // Format buttons
    $('#format1').click(setFormat);
    $('#format2').click(setFormat);
    $('#format3').click(setFormat);
    $('#format4').click(setFormat);
    $('#format5').click(setFormat);

    // Backgrounds
    $('#AcaciaPlanksBG').click(setBackground);
    $('#AncientDebrisBG').click(setBackground);
    $('#AndesiteBG').click(setBackground);
    $('#BedrockBG').click(setBackground);
    $('#BetterBedrockBG').click(setBackground);
    $('#BirchPlanksBG').click(setBackground);
    $('#DarkOakPlanksBG').click(setBackground);
    $('#DioriteBG').click(setBackground);
    $('#EndStoneBG').click(setBackground);
    $('#GraniteBG').click(setBackground);
    $('#HoneycombBG').click(setBackground);
    $('#JunglePlanksBG').click(setBackground);
    $('#NetherrackBG').click(setBackground);
    $('#NetherrackBrightBG').click(setBackground);
    $('#OakPlanksBG').click(setBackground);
    $('#ObsidianBG').click(setBackground);
    $('#PebblelessDirtBG').click(setBackground);
    $('#SprucePlanksBG').click(setBackground);
    $('#StoneBG').click(setBackground);

    // Panoramas
    // $('#ClassicPano').click(setPano);

    // Modules
    $('#LowShield').click(setModule);
    $('#NoVignette').click(setModule);
    $('#SlicedSwords').click(setModule);
    $('#ReducedPumpkinBlur').click(setModule);
    $('#ColoredBows').click(setModule);
    $('#OreBorders').click(setModule);
    $('#LowFire').click(setModule);
    $('#StickyPistonSides').click(setModule);

    // Icon modules
    $('#MelonHunger').click(setIconModule);
    $('#ColoredPing').click(setIconModule);
    $('#BlueWitherHearts').click(setIconModule);
    $('#RainbowXP').click(setIconModule);
})

// Set format to the last number of ID
function setFormat() {
    $(this).siblings().attr("class","btn btn-light");
    $(this).attr("class","btn btn-dark");
    format = $(this).attr('id').slice(-1);

    // Hide things incompatible with 1.6.1 - 1.8.9
    if (format == 1) {
        $('.hideFormat1').hide();
    } else {
        $('.hideFormat1').show();
    }

    // Hide things incompatible with 1.9 - 1.10.2
    if (format == 2) {
        $('.hideFormat2').hide();
    } else {
        $('.hideFormat2').show();
    }

    // Hide things incompatible with 1.11 - 1.12.2
    if (format == 3) {
        $('.hideFormat3').hide();
    } else {
        $('.hideFormat3').show();
    }

    // Hide things incompatible with 1.13 - 1.14.4
    if (format == 4) {
        $('.hideFormat4').hide();
    } else {
        $('.hideFormat4').show();
    }

    // Hide things incompatible with 1.15 - 1.16.1
    if (format == 5) {
        $('.hideFormat5').hide();
    } else {
        $('.hideFormat5').show();
    }

}

// Set background function
function setBackground() {
    $(this).siblings().removeClass("enabled");

    if ($(this).hasClass('enabled')) {
        // If already enabled then disable and clear var
        optionsBackground = undefined;
    } else {
        // If disabled then enable
        optionsBackground = $(this).attr('id');
    }
    $(this).toggleClass('enabled'); // Toggle class    
}

// Set pano function
function setBackground() {
    $(this).siblings().removeClass("enabled");

    if ($(this).hasClass('enabled')) {
        // If already enabled then disable and clear var
        panoOption = undefined;
    } else {
        // If disabled then enable
        panoOption = $(this).attr('id');
    }
    $(this).toggleClass('enabled'); // Toggle class 
}

// Set module function
function setModule() {
    if ($(this).hasClass('enabled')) {
        // If already enabled then disable
        let i = modules.indexOf($(this).attr('id'));
        modules.splice(i, 1);
    } else {
        // If disabled then enable
        modules.push($(this).attr('id'));
    }
    $(this).toggleClass('enabled'); // Toggle class
}

// Set icon module function
function setIconModule() {
    if ($(this).hasClass('enabled')) {
        // If already enabled then disable
        let i = iconModules.indexOf($(this).attr('id'));
        iconModules.splice(i, 1);
    } else {
        // If disabled then enable
        iconModules.push($(this).attr('id'));
    }
    $(this).toggleClass('enabled'); // Toggle class
}

// Download the resource pack
function downloadPack() {
    // Hide alerts
    $(".alert").hide();
    // Create alert
    $('#creating-alert').show();
    $.post(
        "https://us-central1-faithfultweaks.cloudfunctions.net/makePack",
        {
            "format": format,
            "modules": modules,
            "iconModules": iconModules,
            "optionsBackground": optionsBackground,
            "panoOption": panoOption,
        },
        function(data) {
            $('#created-alert').show();
            window.location.href = data.url;
            $('#download-link').attr('href', data.url);
            $('#download-alert').show();
        },
        "json"
    ).fail(function(e) {
        $('#fail-alert').show();
    });
}
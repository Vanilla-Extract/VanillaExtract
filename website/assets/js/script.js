let format = "5";
let modules = [];
let glassModule;
let iconModules = [];
let optionsBackground;
let panoOption;

// On clicks
$(document).ready(function(){
    // Hide alerts on close instead of removing them from the dom
    $('.alert .close').on('click', function(){
        $(this).parent().hide();
    });

    // Description popovers
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
    });
    
    $('#downloadPack').click(downloadPack); // Download
    $('#formatGroup').on('click', '> *', setFormat); // Format buttons
    $('#normalSection').on('click', '>> *', setModule); // Modules
    $('#glassSection').on('click', '>> *', setGlass); // Glass Modules
    $('#hudSection').on('click', '>> *', setIconModule); // Hud modules
    $('#optionsbgSection').on('click', '>> *', setBackground); // Backgrounds
    $('#panoramasSection').on('click', '>> *', setPano); // Panoramas
})


// Set format to the last number of ID
function setFormat() {
    $(this).siblings().attr("class","btn btn-light");
    $(this).attr("class","btn btn-dark");
    format = $(this).attr('id').slice(-1);

    // Hide things incompatible with 1.6.1 - 1.8.9
    if (format == 1) {
        // Show all
        $('.hideFormat2').show();
        $('.hideFormat3').show();
        $('.hideFormat4').show();
        $('.hideFormat5').show();
        // Hide format one
        $('.hideFormat1').hide();
    }

    // Hide things incompatible with 1.9 - 1.10.2
    if (format == 2) {
        // Show all
        $('.hideFormat1').show();
        $('.hideFormat3').show();
        $('.hideFormat4').show();
        $('.hideFormat5').show();
        // Hide format one
        $('.hideFormat2').hide();
    }

    // Hide things incompatible with 1.11 - 1.12.2
    if (format == 3) {
        // Show all
        $('.hideFormat1').show();
        $('.hideFormat2').show();
        $('.hideFormat4').show();
        $('.hideFormat5').show();
        // Hide format one
        $('.hideFormat3').hide();
    }

    // Hide things incompatible with 1.13 - 1.14.4
    if (format == 4) {
        // Show all
        $('.hideFormat1').show();
        $('.hideFormat2').show();
        $('.hideFormat3').show();
        $('.hideFormat5').show();
        // Hide format one
        $('.hideFormat4').hide();
    }

    // Hide things incompatible with 1.15 - 1.16.1
    if (format == 5) {
        // Show all
        $('.hideFormat1').show();
        $('.hideFormat2').show();
        $('.hideFormat3').show();
        $('.hideFormat4').show();
        // Hide format one
        $('.hideFormat5').hide();
    }

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

// Set glass module function
function setGlass() {
    $(this).siblings().removeClass("enabled");

    if ($(this).hasClass('enabled')) {
        // If already enabled then disable and clear var
        glassModule = undefined;
    } else {
        // If disabled then enable
        glassModule = $(this).attr('id');
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
function setPano() {
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

// Download the resource pack
function downloadPack() {
    let downloadModules = modules;
    // If glass is set
    if (glassModule !== undefined) {
        downloadModules.push(glassModule);
    }

    // Hide alerts
    $(".alert").hide();
    // Create alert
    $('#creating-alert').show();
    $.post(
        "https://us-central1-faithfultweaks.cloudfunctions.net/makePack",
        {
            "format": format,
            "modules": downloadModules,
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
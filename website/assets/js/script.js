let format = "6";
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

    // Open All Collapsibles
    $('#openAll').click(() => {
        $(".collapse").collapse('show');
    });
    
    $('#downloadPack').click(downloadPack); // Download
    $('#formatGroup').on('click', '> *', setFormat); // Format buttons

    // Modules
    $('#aestheticSection').on('click', '>> *', setModule); // Aesthetic
    $('#terrainSection').on('click', '>> *', setModule); // Terrain
    $('#utilitySection').on('click', '>> *', setModule); // Utility
    $('#unobtrusiveSection').on('click', '>> *', setModule); // Unobtrusive

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


    // Show all
    $('.hideFormat1').show();
    $('.hideFormat2').show();
    $('.hideFormat3').show();
    $('.hideFormat4').show();
    $('.hideFormat5').show();
    $('.hideFormat6').show();

    // Hide incompatible modules
    $('.hideFormat'+format).hide();
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
            window.location.href = data.url;
            $('#download-link').attr('href', data.url); // Set download link
            $('#creating-alert').hide(); // Hide old alert
            $('#created-alert').show(); // Show created alert
        },
        "json"
    ).fail(function(e) {
        $('#creating-alert').hide(); // Hide old alert
        $('#fail-alert').show(); // Show fail alert
    });
}
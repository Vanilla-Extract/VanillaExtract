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

    // Description popovers
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
    });
    
    $('#downloadPack').click(downloadPack); // Download
    $('#formatGroup').on('click', '> *', setFormat); // Format buttons
    $('#normalSection').on('click', '>> *', setModule); // Modules
    $('#hudSection').on('click', '>> *', setIconModule); // Hud modules
    $('#optionsbgSection').on('click', '>> *', setBackground); // Backgrounds
    $('#panoramasSection').on('click', '>> *', setPano); // Panoramas
})


// Set format to the last number of ID
function setFormat() {
    console.log($(this).attr('id'));
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
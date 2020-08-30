import 'bootstrap';

let format = "1-16-2";
const modules = [];
const iconModules = [];
let optionsBackground;
let panoOption;

// When content is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Hide alerts on close instead of removing them from the dom
    document.querySelectorAll('.alert .close').forEach((e) => {
        e.addEventListener('click', () => {
            e.parentNode.style.display = 'none';
        });
    });

    // Boostrap 4
        // Description popovers
        $('[data-toggle="popover"]').popover({
            placement : 'top',
            trigger : 'hover'
        });
    // Boostrap 5
        // document.querySelectorAll('[data-toggle="popover"]').forEach((e) => {
        //     new bootstrap.Popover(e, {
        //         placement : 'top',
        //         trigger : 'hover'
        //     });
        // });

    // Open All Collapsibles
    document.querySelector('#openAll').addEventListener('click', () => {
        // Boostrap 4
            $(".collapse").collapse('show');
        // Boostrap 5
            // TODO: ADD BOOSTRAP 5 JS
            // document.querySelectorAll('.collapse').forEach((e) => {
            //     new new bootstrap.Collapse(e, {
            //         show: false
            //     });
            // });
            
    });
    
    document.querySelector('#downloadPack').addEventListener('click', downloadPack); // Download
    document.querySelectorAll('#formatGroup                >*').forEach(e => e.addEventListener('click', setFormat));                    // Format buttons

    // Modules
    document.querySelectorAll('#normalModules              >*').forEach(e => e.addEventListener('click', setModule));                  // Normal modules
    document.querySelectorAll('#normalModulesConflicting   >*').forEach(e => e.addEventListener('click', setModuleConflicting));       // Conflicting normal modules

    // HUD
    document.querySelectorAll('#hudModules                 >*').forEach(e => e.addEventListener('click', setIconModule));              // Normal modules
    document.querySelectorAll('#hudModulesConflicting      >*').forEach(e => e.addEventListener('click', setIconModuleConflicting));   // Conflicting normal modules

    // Options and Panoramas
    document.querySelectorAll('#optionsbgModules           >*').forEach(e => e.addEventListener('click', setBackground));              // Backgrounds
    document.querySelectorAll('#panoramasModules           >*').forEach(e => e.addEventListener('click', setPano));                    // Panoramas
});


// Set format to the last number of ID
function setFormat() {
    // Make all buttons light
    Array.from(this.parentNode.children).forEach(e => {
        e.classList.remove("btn-dark");
        e.classList.add("btn-light");
    });

    // Set clicked button to dark
    this.classList.remove("btn-light");
    this.classList.add("btn-dark");

    // Set format to last character of the buttons ID
    format = this.id.replace('format', '');

    // Show all
    document.querySelectorAll('.module-selector').forEach(e => e.style.display = '');

    // Hide incompatible modules
    document.querySelectorAll('.hideFormat'+format).forEach(e => e.style.display = 'none');
}

// Set module function
function setModule() {
    if (this.classList.contains('enabled')) {
        // If already enabled then disable
        const i = modules.indexOf(this.id);
        if (i > -1) {
            modules.splice(i, 1);
        }
        this.classList.remove('enabled'); // Remove class
    } else {
        // If disabled then enable
        modules.push(this.id);
        this.classList.add('enabled'); // Add class
    }
}

// Set conflicting module function
function setModuleConflicting () {
    // For each sibling
    Array.prototype.filter.call(this.parentNode.children, c => { return c !== this; }).forEach(e => {
        const i = modules.indexOf(e.id);
        if (i > -1) {
            modules.splice(i, 1);
        }
        e.classList.remove("enabled"); // Remove class
    });

    // If not in list enable
    const i = modules.indexOf(this.id);
    if (i === -1) {
        modules.push(this.id);
        this.classList.add('enabled'); // Add class
    } else {
        // Else disable
        modules.splice(i, 1);
        this.classList.remove("enabled"); // Remove class
    }
};

// Set icon module function
function setIconModule() {
    if (this.classList.contains('enabled')) {
        // If already enabled then disable
        const i = iconModules.indexOf(this.id);
        if (i > -1) {
            iconModules.splice(i, 1);
        }
        this.classList.remove('enabled'); // Remove class
    } else {
        // If disabled then enable
        iconModules.push(this.id);
        this.classList.add('enabled'); // Add class
    }
}

// Set conflicting icon module function
function setIconModuleConflicting () {
    // For each sibling
    Array.prototype.filter.call(this.parentNode.children, c => { return c !== this; }).forEach(e => {
        const i = iconModules.indexOf(e.id);
        if (i > -1) {
            iconModules.splice(i, 1);
        }
        e.classList.remove("enabled"); // Remove class
    });

    // If not in list enable
    const i = iconModules.indexOf(this.id);
    if (i === -1) {
        iconModules.push(this.id);
        this.classList.add('enabled'); // Add class
    } else {
        // Else disable
        iconModules.splice(i, 1);
        this.classList.remove("enabled"); // Remove class
    }
};

// Set background function
function setBackground() {
    // For each sibling
    Array.prototype.filter.call(this.parentNode.children, c => { return c !== this; }).forEach(e => e.classList.remove("enabled"));

    // If is var disable
    if (optionsBackground === this.id) {
        optionsBackground = undefined;
        this.classList.remove('enabled'); // Remove class
    } else {
        // Else enable
        optionsBackground = this.id;
        this.classList.add("enabled"); // Add class
    }
}

// Set pano function
function setPano() {
    // For each sibling
    Array.prototype.filter.call(this.parentNode.children, c => { return c !== this; }).forEach(e => e.classList.remove("enabled"));

    // If is var disable
    if (panoOption === this.id) {
        panoOption = undefined;
        this.classList.remove('enabled'); // Remove class
    } else {
        // Else enable
        panoOption = this.id;
        this.classList.add("enabled"); // Add class
    }
}

// Download the resource pack
function downloadPack() {
    // Update format to fit version number scheme
    const version = format.replace('-', '.').replace('-', '.'); // Somewhat messy way of making sure both "-"s get changed 

    document.querySelectorAll('.alert').forEach(e => e.style.display = 'none'); // Hide alerts
    document.querySelector('#creating-alert').style.display = 'block'; // Create alert

    // POST Request
    const request = new XMLHttpRequest(); // Request
    const url = process.env.NODE_ENV !== 'production' ? "http://localhost:5001/faithfultweaks/us-central1/makePack" : "https://us-central1-faithfultweaks-app.cloudfunctions.net/makePack"; // URL (based on node environment status)
    const data = {
        "format": version,
        "modules": modules,
        "iconModules": iconModules,
        "optionsBackground": optionsBackground,
        "panoOption": panoOption,
    };
    
    request.open('POST', url, true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status == 200) {
            // Request finished
            const data = JSON.parse(this.responseText);
            window.location.href = data.url;
            document.querySelector('#download-link').setAttribute('href', data.url); // Set download link
            document.querySelector('#creating-alert').style.display = 'none'; // Hide old alert
            document.querySelector('#finished-alert').style.display = 'block'; // Show created alert
        } else if (this.readyState === 4) {
            // Request error
            document.querySelector('#creating-alert').style.display = 'none'; // Hide old alert
            document.querySelector('#fail-alert').style.display = 'block'; // Show fail alert
        }
    };
    request.send(JSON.stringify(data));
}
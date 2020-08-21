import 'bootstrap';

let format = "6";
let modules = [];
let glassModule;
let iconModules = [];
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
    document.querySelectorAll('#formatGroup          >*').forEach(e => e.addEventListener('click', setFormat)); // Format buttons

    // Modules
    document.querySelectorAll('#aestheticSection     >*>*').forEach(e => e.addEventListener('click', setModule));       // Aesthetic
    document.querySelectorAll('#terrainSection       >*>*').forEach(e => e.addEventListener('click', setModule));       // Terrain
    document.querySelectorAll('#unobtrusiveSection   >*>*').forEach(e => e.addEventListener('click', setModule));       // Utility
    document.querySelectorAll('#utilitySection       >*>*').forEach(e => e.addEventListener('click', setModule));       // Unobtrusive

    document.querySelectorAll('#glassSection         >*>*').forEach(e => e.addEventListener('click', setGlass));        // Glass Modules
    document.querySelectorAll('#hudSection           >*>*').forEach(e => e.addEventListener('click', setIconModule));   // Hud modules
    document.querySelectorAll('#optionsbgSection     >*>*').forEach(e => e.addEventListener('click', setBackground));   // Backgrounds
    document.querySelectorAll('#panoramasSection     >*>*').forEach(e => e.addEventListener('click', setPano));         // Panoramas
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
    format = this.id.slice(-1);

    // Show all
    document.querySelectorAll('.hideFormat1, .hideFormat2, .hideFormat3, .hideFormat4, .hideFormat5, .hideFormat6').forEach(e => e.style.display = '');

    // Hide incompatible modules
    document.querySelectorAll('.hideFormat'+format).forEach(e => e.style.display = 'none');
}

// Set module function
function setModule() {
    if (this.classList.contains('enabled')) {
        // If already enabled then disable
        let i = modules.indexOf(this.id);
        modules.splice(i, 1);
    } else {
        // If disabled then enable
        modules.push(this.id);
    }
    this.classList.toggle('enabled'); // Toggle class
}

// Set glass module function
function setGlass() {
    Array.prototype.filter.call(this.parentNode.children, c => { return c !== this; }).forEach(e => e.classList.remove("enabled"));

    if (this.classList.contains('enabled')) {
        // If already enabled then disable and clear var
        glassModule = undefined;
    } else {
        // If disabled then enable
        glassModule = this.id;
    }
    this.classList.toggle('enabled'); // Toggle class
}

// Set icon module function
function setIconModule() {
    if (this.classList.contains('enabled')) {
        // If already enabled then disable
        let i = iconModules.indexOf(this.id);
        iconModules.splice(i, 1);
    } else {
        // If disabled then enable
        iconModules.push(this.id);
    }
    this.classList.toggle('enabled'); // Toggle class
}

// Set background function
function setBackground() {
    Array.prototype.filter.call(this.parentNode.children, c => { return c !== this; }).forEach(e => e.classList.remove("enabled"));

    if (this.classList.contains('enabled')) {
        // If already enabled then disable and clear var
        optionsBackground = undefined;
    } else {
        // If disabled then enable
        optionsBackground = this.id;
    }
    this.classList.toggle('enabled'); // Toggle class    
}

// Set pano function
function setPano() {
    Array.prototype.filter.call(this.parentNode.children, c => { return c !== this; }).forEach(e => e.classList.remove("enabled"));

    if (this.classList.contains('enabled')) {
        // If already enabled then disable and clear var
        panoOption = undefined;
    } else {
        // If disabled then enable
        panoOption = this.id;
    }
    this.classList.toggle('enabled'); // Toggle class 
}

// Download the resource pack
function downloadPack() {
    let downloadModules = modules;
    // If glass is set
    if (glassModule !== undefined) {
        downloadModules.push(glassModule);
    }

    document.querySelectorAll('.alert').forEach(e => e.style.display = 'none'); // Hide alerts
    document.querySelector('#creating-alert').style.display = 'block'; // Create alert

    // POST Request
    const request = new XMLHttpRequest(); // Request
    const url = process.env.NODE_ENV !== 'production' ? "http://localhost:5001/faithfultweaks/us-central1/makePack" : "https://us-central1-faithfultweaks.cloudfunctions.net/makePack"; // URL (based on node environment status)
    const data = {
        "format": format,
        "modules": downloadModules,
        "iconModules": iconModules,
        "optionsBackground": optionsBackground,
        "panoOption": panoOption,
    };
    
    request.open('POST', url, true);
    // request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Request finished
            const data = JSON.parse(this.responseText);
            window.location.href = data.url;
            document.querySelector('#download-link').setAttribute('href', data.url); // Set download link
            document.querySelector('#creating-alert').style.display = 'none'; // Hide old alert
            document.querySelector('#finished-alert').style.display = 'block'; // Show created alert
        } else if (XMLHttpRequest.DONE) {
            // Request error
            document.querySelector('#creating-alert').style.display = 'none'; // Hide old alert
            document.querySelector('#fail-alert').style.display = 'block'; // Show fail alert
        }
    };
    request.send(data);
}
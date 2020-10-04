import 'bootstrap';
import $ from 'jquery';

let format: string = "1-16-2";
const modules: string[] = [];
const iconModules: string[] = [];
let optionsBackground: string;
let panoOption: string;

// When content is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Hide alerts on close instead of removing them from the dom
    document.querySelectorAll('.alert .close').forEach((e) => {
        e.addEventListener('click', () => {
            (<HTMLElement>e.parentNode).style.display = 'none';
        });
    });

    // Boostrap 4
        // Description popovers
        $('[data-toggle="popover"]').popover({
            placement : 'top',
            trigger : 'manual'
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
    document.querySelectorAll('#formatGroup                >*').forEach((e: HTMLElement) => e.addEventListener('click', setFormat));                    // Format buttons

    // Hover
    document.querySelectorAll('.module-selector').forEach((e: HTMLElement) => e.addEventListener('mouseover', moduleHover));
    document.querySelectorAll('.module-selector').forEach((e: HTMLElement) => e.addEventListener('focus', moduleHover));
    // Mouse leave
    document.querySelectorAll('.module-selector').forEach((e: HTMLElement) => e.addEventListener('mouseleave', moduleMouseLeave));
    document.querySelectorAll('.module-selector').forEach((e: HTMLElement) => e.addEventListener('blur', moduleMouseLeave));

    // Modules
    document.querySelectorAll('#normalModules              >*').forEach((e: HTMLElement) => e.addEventListener('click', setModule));                  // Normal modules
    document.querySelectorAll('#normalModulesConflicting   >*').forEach((e: HTMLElement) => e.addEventListener('click', setModuleConflicting));       // Conflicting normal modules

    // HUD
    document.querySelectorAll('#hudModules                 >*').forEach((e: HTMLElement) => e.addEventListener('click', setIconModule));              // Normal modules
    document.querySelectorAll('#hudModulesConflicting      >*').forEach((e: HTMLElement) => e.addEventListener('click', setIconModuleConflicting));   // Conflicting normal modules

    // Options and Panoramas
    document.querySelectorAll('#optionsbgModules           >*').forEach((e: HTMLElement) => e.addEventListener('click', setBackground));              // Backgrounds
    document.querySelectorAll('#panoramasModules           >*').forEach((e: HTMLElement) => e.addEventListener('click', setPano));                    // Panoramas
});


// Set format to the last number of ID
function setFormat(this: HTMLElement) {
    // Make all buttons light
    Array.from(this.parentNode.children).forEach((e: HTMLElement) => {
        e.classList.remove("btn-dark");
        e.classList.add("btn-light");
    });

    // Set clicked button to dark
    this.classList.remove("btn-light");
    this.classList.add("btn-dark");

    // Set format to last character of the buttons ID
    format = this.id.replace('format', '');

    // Show all
    document.querySelectorAll('.module-selector').forEach((e: HTMLElement) => e.style.display = '');

    // Hide incompatible modules
    document.querySelectorAll('.hideFormat'+format).forEach((e: HTMLElement) => e.style.display = 'none');
}

// On hover
function moduleHover(this: HTMLElement) {
    // Show popover
    let popoverContent: string;
    if (this.getAttribute('data-content') != null) {
        popoverContent = this.getAttribute('data-content');
    }
    
    // Set preview
    if (this.getAttribute('data-preview') != null) {
        document.getElementById('previewImage').setAttribute('src', this.getAttribute('data-preview'));
    }

    // Set bg if a conflict is selected
    if (this.getAttribute('data-conflicting') != null) {
        // Turn conflicts into array
        const conflicts: Array<string> = this.getAttribute('data-conflicting').split(' ');

        // If there are conflicts active then do the following
        if (conflicts.some(r=> modules.includes(r))) {
            // Make popover text
            let styledConflicts = "Cannot enable because you have selected the following: ";
            const conflictList: Array<string> = conflicts.filter(e => modules.indexOf(e) !== -1);

            conflictList.forEach((e, i) => {
                if (i === 0) {
                    styledConflicts = styledConflicts + document.getElementById(e).children[1].textContent;
                } else if (i === (conflictList.length - 1) && conflictList.length === 2) {
                    styledConflicts = styledConflicts + " and " + document.getElementById(e).children[1].textContent;
                } else if (i === (conflictList.length - 1)) {
                    styledConflicts = styledConflicts + ", and " + document.getElementById(e).children[1].textContent;
                } else {
                    styledConflicts = styledConflicts + ", " + document.getElementById(e).children[1].textContent;
                }
            })
            styledConflicts = styledConflicts + ".";

            // Change background and text color
            this.style.backgroundColor = "var(--danger)";
            this.style.color = "#ffffff";
            this.setAttribute('data-content', styledConflicts);
        }
    }

    $(this).popover("show");
    if (popoverContent != null || popoverContent != undefined) {
        this.setAttribute('data-content', popoverContent);
    } else {
        this.removeAttribute('data-content');
    }
}

// After hover
function moduleMouseLeave(this: HTMLElement) {
    // Hide popover
    $(this).popover("hide");

    // Reset preview
    document.getElementById('previewImage').setAttribute('src', "/images/previews/default.svg");

    // Reset background
    this.style.removeProperty('background-color');
    this.style.removeProperty('color');
}

// Set module function
function setModule(this: HTMLElement) {
    if (!(this.getAttribute('data-conflicting') != null && this.getAttribute('data-conflicting').split(' ').some(r=> modules.includes(r)))) {
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
}

// Set conflicting module function
function setModuleConflicting (this: HTMLElement) {
    if (!(this.getAttribute('data-conflicting') != null && this.getAttribute('data-conflicting').split(' ').some(r=> modules.includes(r)))) {
        // For each sibling
        Array.prototype.filter.call(this.parentNode.children, (c: HTMLElement) => { return c !== this; }).forEach((e: HTMLElement) => {
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
    }
};

// Set icon module function
function setIconModule(this: HTMLElement) {
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
function setIconModuleConflicting (this: HTMLElement) {
    // For each sibling
    Array.prototype.filter.call(this.parentNode.children, (c: HTMLElement) => { return c !== this; }).forEach((e: HTMLElement) => {
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
function setBackground(this: HTMLElement) {
    // For each sibling
    Array.prototype.filter.call(this.parentNode.children, (c: HTMLElement) => { return c !== this; }).forEach((e: HTMLElement) => e.classList.remove("enabled"));

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
function setPano(this: HTMLElement) {
    // For each sibling
    Array.prototype.filter.call(this.parentNode.children, (c: HTMLElement) => { return c !== this; }).forEach((e: HTMLElement) => e.classList.remove("enabled"));

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

    document.querySelectorAll('.alert').forEach((e: HTMLElement) => e.style.display = 'none'); // Hide alerts
    (<HTMLElement>document.querySelector('#creating-alert')).style.display = 'block'; // Create alert

    // POST Request
    const request = new XMLHttpRequest(); // Request
    const url = process.env["NODE_ENV"] !== 'production' ? "http://localhost:5000/makePack" : "https://example.com/makePack"; // URL (based on node environment status)
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
            (<HTMLElement>document.querySelector('#download-link')).setAttribute('href', data.url); // Set download link
            (<HTMLElement>document.querySelector('#creating-alert')).style.display = 'none'; // Hide old alert
            (<HTMLElement>document.querySelector('#finished-alert')).style.display = 'block'; // Show created alert
        } else if (this.readyState === 4) {
            // Request error
            (<HTMLElement>document.querySelector('#creating-alert')).style.display = 'none'; // Hide old alert
            (<HTMLElement>document.querySelector('#fail-alert')).style.display = 'block'; // Show fail alert
        }
    };
    request.send(JSON.stringify(data));
}

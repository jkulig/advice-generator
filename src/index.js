import Alpine from 'alpinejs';

// HTML page structure
import header from './html/header.html?raw';
import main from "./html/main.html?raw";
import footer from './html/footer.html?raw';

// components
import adviceGenerator from './adviceGenerator.js';

const headerContent = document.createElement("header");
const mainContent = document.createElement("main");
const footerContent = document.createElement("footer");

headerContent.innerHTML = header;
mainContent.innerHTML = main;
footerContent.innerHTML = footer;

document.body.appendChild(headerContent);
document.body.appendChild(mainContent);
document.body.appendChild(footerContent);

window.Alpine = Alpine
Alpine.data('adviceGenerator', adviceGenerator);

Alpine.start()


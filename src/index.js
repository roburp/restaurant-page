import addHome from "./home.js";
import addMenu from "./menu.js";
import addContact from "./contact.js";

const homeButton = document.querySelector("button#home");
homeButton.addEventListener("click", addHome);

const menuButton = document.querySelector("button#menu");
menuButton.addEventListener("click", addMenu);

const contactButton = document.querySelector("button#contact");
contactButton.addEventListener("click", addContact);

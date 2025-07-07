import { crEl, clearTab } from "./domHelpers.js";

export default function addHome() {
  const content = document.querySelector("div#content");
  content.innerHTML = "";

  content.append(crEl("h1", "Locsin Lokal", "home-header"));
}

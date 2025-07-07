import { crEl, clearTab } from "./domHelpers.js";

export default function addMenu() {
  clearTab();
  const content = document.querySelector("div#content");

  content.append(crEl("h1", "Menu", "menu-header"));
}

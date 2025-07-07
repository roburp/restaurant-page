import { crEl, clearTab } from "./domHelpers.js";

export default function addContact() {
  clearTab();
  const content = document.querySelector("div#content");

  content.append(crEl("h1", "Contact", "contact-header"));
}

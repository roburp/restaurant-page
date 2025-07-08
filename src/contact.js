import { crEl, clearTab } from "./domHelpers.js";

export default function addContact() {
  clearTab();
  const content = document.querySelector("div#content");

  //h1 Contact text
  content.append(crEl("h2", "Contact Information", "contact-header"));

  //div Contact Info
  const contactDiv = crEl("div", "", "contact-info");

  const emailPara = crEl("p", "Email: ", "email");
  emailPara.append(crEl("span", "hello@locsinlokal.ph", "email-value"));
  contactDiv.append(emailPara);

  const phonePara = crEl("p", "Phone: ", "phone");
  phonePara.append(crEl("span", "+63 917 123 4567", "phone-value"));
  contactDiv.append(phonePara);

  const addressPara = crEl("p", "Address: ", "address");
  addressPara.append(
    crEl(
      "span",
      `123 Kain St., Barangay Masarap, Quezon City, 
      Metro Manila, Philippines`,
      "address-value"
    )
  );
  contactDiv.append(addressPara);
  content.append(contactDiv);
}

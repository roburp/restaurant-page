import { crEl, clearTab } from "./domHelpers.js";

export default function addHome() {
  clearTab();
  const content = document.querySelector("div#content");

  //h1 Locsin Lokal
  // content.append(crEl("h1", "Locsin Lokal", "home-header"));

  //div Welcome text
  const welcomeDiv = crEl("div", "", "welcome");
  welcomeDiv.append(crEl("h2", "Welcome", "welcome-header"));
  welcomeDiv.append(crEl("p", "Welcome to Locsin Lokal — where every dish tells a story."));
  welcomeDiv.append(
    crEl(
      "p",
      `Rooted in Filipino tradition and inspired by local flavors, we serve up comforting classics and bold, modern
      takes on the dishes we grew up with. Whether you're craving a hearty bowl of sinigang, crispy lumpia,
      or something new with a local twist, you'll find it here.`
    )
  );
  welcomeDiv.append(crEl("p", "Come in hungry. Leave feeling at home."));
  content.append(welcomeDiv);

  //div About text
  const aboutDiv = crEl("div", "", "about");
  aboutDiv.append(crEl("h2", "About", "about-header"));
  aboutDiv.append(
    crEl(
      "p",
      "Locsin Lokal was born from a simple idea: to celebrate Filipino food the way it deserves — with pride, creativity, and heart."
    )
  );
  aboutDiv.append(
    crEl(
      "p",
      `Founded by the Locsin family, our restaurant is a tribute to homegrown flavors, regional recipes, and the warmth of Filipino
    hospitality. We believe that food is more than nourishment — it's memory, identity, and culture on a plate.`
    )
  );
  aboutDiv.append(
    crEl(
      "p",
      `Every ingredient we use is locally sourced, and every dish we serve is crafted with care. Whether you're a long-time fan of 
    Pinoy cuisine or trying it for the first time, there's a seat for you at our table.`
    )
  );
  aboutDiv.append(crEl("p", "Welcome to Locsin Lokal — local by name, local by heart."));
  content.append(aboutDiv);
}

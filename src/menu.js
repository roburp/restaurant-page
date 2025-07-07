import { crEl, clearTab } from "./domHelpers.js";
import item1Image from "./assets/images/tokwa-truffle.png";
import item2Image from "./assets/images/balut.png";
import item3Image from "./assets/images/isaw.png";
import item4Image from "./assets/images/lumpia.png";
import item5Image from "./assets/images/kwek.png";

export default function addMenu() {
  clearTab();
  const content = document.querySelector("div#content");

  //h1 Menu
  content.append(crEl("h1", "Menu", "menu-header"));

  //menu-item-1
  const menuItem1 = crEl("div", "", "menu-item-1");
  //Item 1 Name
  menuItem1.append(crEl("h2", "Tokwa't Truffle", "item1-header"));
  //Item 1 Image
  const imgItem1 = document.createElement("img");
  imgItem1.src = item1Image;
  imgItem1.alt = "Tokwa't Truffle";
  imgItem1.className = "item1-image";
  menuItem1.append(imgItem1);
  //Item 1 Text
  menuItem1.append(
    crEl(
      "p",
      `Crispy fried tofu tossed in soy-vinegar reduction, 
      topped with caramelized onions and drizzled with a hint of truffle oil.`
    )
  );
  content.append(menuItem1);

  //menu-item-2
  const menuItem2 = crEl("div", "", "menu-item-2");
  //Item 2 Name
  menuItem2.append(crEl("h2", "Balut Tempura with Sinamak Glaze", "item2-header"));
  //Item 2 Image
  const imgItem2 = document.createElement("img");
  imgItem2.src = item2Image;
  imgItem2.alt = "Balut Tempura with Sinamak Glaze";
  imgItem2.className = "item2-image";
  menuItem2.append(imgItem2);
  //Item 2 Text
  menuItem2.append(
    crEl(
      "p",
      `Delicately battered and deep-fried balut served with a 
      sweet-and-spicy native vinegar glaze and microgreens.`
    )
  );
  content.append(menuItem2);

  //menu-item-3
  const menuItem3 = crEl("div", "", "menu-item-3");
  //Item 3 Name
  menuItem3.append(crEl("h2", "Wagyu Isaw Skewers", "item3-header"));
  //Item 3 Image
  const imgItem3 = document.createElement("img");
  imgItem3.src = item3Image;
  imgItem3.alt = "Wagyu Isaw Skewers";
  imgItem3.className = "item3-image";
  menuItem3.append(imgItem3);
  //Item 3 Text
  menuItem3.append(
    crEl(
      "p",
      `Grilled wagyu beef intestines glazed in garlic-soy barbecue 
      sauce, finished with calamansi aioli and chili threads.`
    )
  );
  content.append(menuItem3);

  //menu-item-4
  const menuItem4 = crEl("div", "", "menu-item-4");
  //Item 4 Name
  menuItem4.append(crEl("h2", "Sisig Lumpia Cups", "item4-header"));
  //Item 4 Image
  const imgItem4 = document.createElement("img");
  imgItem4.src = item4Image;
  imgItem4.alt = "Sisig Lumpia Cups";
  imgItem4.className = "item4-image";
  menuItem4.append(imgItem4);
  // Item 4 Text
  menuItem4.append(
    crEl(
      "p",
      `Mini crispy lumpia shells filled with sizzling pork sisig, 
      topped with quail egg and calamansi foam.`
    )
  );
  content.append(menuItem4);

  //menu-item-5
  const menuItem5 = crEl("div", "", "menu-item-5");
  //Item 5 Name
  menuItem5.append(crEl("h2", "Kwek-Kwek Relleno", "item5-header"));
  //Item 5 Image
  const imgItem5 = document.createElement("img");
  imgItem5.src = item5Image;
  imgItem5.alt = "Kwek-Kwek Relleno";
  imgItem5.className = "item5-image";
  menuItem5.append(imgItem5);
  //Item 5 Text
  menuItem5.append(
    crEl(
      "p",
      `Quail eggs stuffed with spiced longganisa, coated in a light 
      orange batter and served with elevated sweet-spicy manong sauce.`
    )
  );
  content.append(menuItem5);
}

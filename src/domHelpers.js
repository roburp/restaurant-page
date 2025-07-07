//create element
export function crEl(element, content, className) {
  const el = document.createElement(element);
  el.textContent = content;
  el.className = className;
  return el;
}

//clear tab contents
export function clearTab() {
  const content = document.querySelector("div#content");
  content.innerHTML = "";
}

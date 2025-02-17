/* 

<!-- before begin -->

<p> 

<!-- after begin -->

lorium

<!-- before end -->

</p>

<!-- after end -->

*/

// Insert Adjacent Element

function adjElement() {
  const head = document.createElement("h3");
  head.appendChild(document.createTextNode("This is head Element"));

  document.querySelector("ul").insertAdjacentElement("beforebegin", head);
}

// Insert Adjacent text node

function adjtext() {
  document.querySelector("ul").insertAdjacentText("beforeend", "Hello World");
}

// Insert Adjacent html

function adjHtml() {
  document
    .querySelector("button")
    .insertAdjacentHTML("beforeend", "<div>Hello</div>");
}

function insertionBeforeElementUsingparent() {
  const parent = document.querySelector("ul");
  const child = document.querySelector("li:nth-child(3)");

  const elementToAdd = document.createElement("li");
  elementToAdd.innerText = "Bello";

  parent.insertBefore(elementToAdd, child);
  parent;
}

adjElement();
adjHtml();
adjtext();

insertionBeforeElementUsingparent();

function customInsertAfter(parent, child, customEle) {
  if (child.nextElementSibling) {
    parent.insertBefore(customEle, child.nextElementSibling);
  } else {
    parent.appendChild(customEle) 
  }
}

const newButtonToAdd  =  document.createElement("button")

newButtonToAdd.innerText = "Bello "

customInsertAfter( document.querySelector(".container")  , document.querySelector("#lastList") , newButtonToAdd )
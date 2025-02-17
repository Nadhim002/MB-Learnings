function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.innerText = "Replaced One";

  firstItem.replaceWith(li);
  // First way to replace element
}

replaceFirstItem();

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  // It is similar to replace the overall item itself
  secondItem.outerHTML = "<li>Replace using Outer HTML</li>";
}

replaceSecondItem();

function replaceAll(){

    const allLiList = document.querySelectorAll("li")

    allLiList.forEach( 
        (liElement , i ) => liElement.outerHTML = `<li>Honuored ${i+1} </li>`
        )
}


replaceAll()

function replaceUsingParent(){

    const parent = document.querySelector("header")

    const newChild = document.createElement("h4")
    newChild.innerText = "I'm a New Child"

    oldChild = parent.querySelector("h1")

    parent.replaceChild( newChild , oldChild  )

}

replaceUsingParent()
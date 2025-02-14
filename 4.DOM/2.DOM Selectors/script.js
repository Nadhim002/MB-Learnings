let output ; 

// document,getElementById()
// To get a particular element
output = document.getElementById("app-title")

// to get id
output = document.getElementById("app-title").id
output = document.getElementById("app-title").getAttribute("id")

// to get class
output = document.getElementById("app-title").className


// to change or set the attribute
document.getElementById("app-title").setAttribute("class","changed-app-title") 
output = document.getElementById("app-title").getAttribute("class")

// console.log(output)


/* 

To get or set contents

*/

let content  ; 

content = document.getElementById("app-title")

// both does the same thimg
content.textContent = "Hello World"
content.innerText = "Bello World"

content.innerHTML = "<b>Shopping List</b>"

// Change CSS using DOM

content.style.color = "red"
// in js style will not have dash instead it will have camelCase
content.style.backgroundColor = "green"

content.style.padding = "10px"
content.style.borderRadius = "50%"

console.log(content)

// document.querySelector()

console.log( document.querySelector("h1") ) // by tag name 
console.log( document.querySelector("#app-title") ) // by id 
console.log( document.querySelector(".changed-app-title") ) // by tag name 


console.log( document.querySelector('input[type="text"]') )

console.log( document.querySelector('li:nth-child(2)').innerHTML )
const  secondItem = document.querySelector('li:nth-child(2)')

secondItem.innerText = "Orange fruit changes"
secondItem.style.color = "yellow"
secondItem.style.backgroundColor = "black"

// Acessing inner elements using parent 

const unOrderedList = document.querySelector("ul")

const firstItem = unOrderedList.querySelector("li")
firstItem.style.color = "purple"

console.log(firstItem)
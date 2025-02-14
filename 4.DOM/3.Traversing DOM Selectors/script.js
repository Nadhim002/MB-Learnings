let output ; 


const parentElement = document.querySelector(".parent")

parentElement.style.border = " 1px solid black "

console.log( parentElement )

// to get the first children
console.log( parentElement.firstElementChild )

// to get the last children
console.log( parentElement.lastElementChild )

output = parentElement.children[1].nodeName // DIV

parentElement.children[1].innerText = "Changed Child 2"


console.log("******************")

// To access parent from Child 

const sampleChild = document.querySelector(".child:nth-child(2)")

// acess parent from child
output = sampleChild.parentElement

sampleChild.nextElementSibling.style.color = "blue"

sampleChild.previousElementSibling.style.color = "pink"

console.log( output)
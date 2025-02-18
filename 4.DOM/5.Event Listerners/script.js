// Never use HTML inline Event Listerner 
//  onclick="alert('Button Thodatha')"
const clrButton = document.querySelector("#clear")

// Traditional Way

// clrButton.onclick = function(){  alert("You are trying to clear It") }

// Modern Way 

let  buttonEvent =   function(){ alert("kaiya Edu") }

// We can have as much as event listerner's in Modern way 
clrButton.addEventListener("click" , buttonEvent )

// Remove event Listerner 
setTimeout( () => clrButton.removeEventListener("click" , buttonEvent) , 3000 )

// We can make artifical clicks

// setTimeout( () => clrButton.click() , 2500 )

// Remove all items using clear 

function onClear(){

document.querySelector("ul").innerHTML = ""

}

clrButton.addEventListener( "click" , onClear )
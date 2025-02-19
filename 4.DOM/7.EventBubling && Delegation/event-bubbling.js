console.log("Hello World")

const listElement = document.querySelector("li")
listElement.addEventListener("click" , (e) => {
    e.stopPropagation()
    console.log("Clicked Item")
} )

const unOrderedList = document.querySelector("ul")
unOrderedList.addEventListener("click" , () => console.log("Clicked Unordered List ") )


const body = document.querySelector("body")
body.addEventListener("click" , () => console.log("Clicked Body ") )

// The Child event will trigger parent event also , if the trigger type is same
// to prevent that use stopPropagation which is method of event Object
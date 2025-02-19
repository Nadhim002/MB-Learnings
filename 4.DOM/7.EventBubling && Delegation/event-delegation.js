// Adding events to all lists

const allLists = document.querySelectorAll("li")

console.log(allLists)

allLists.forEach(function (e) {
  e.addEventListener("click", function (e) {

    if ( e.target.tagName == "LI" )
    e.target.remove()

  })
})


// Use Event Delegation 


const wholeListElement = document.querySelector("ul")

wholeListElement.addEventListener("click" ,  function(e) {

    if ( e.target.tagName == "LI" )
    {e.target.remove() }
}
)
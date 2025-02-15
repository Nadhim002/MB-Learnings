const div = document.createElement("div")
div.className = "Bello OWrld"
div.id = "hello Id"

div.setAttribute("title","vanakkam")

const textContentForDiv = document.createTextNode("This is a new div")
div.appendChild(textContentForDiv)


// Adding that div to existing html page

// document.querySelector("ul").appendChild(div)

console.log( div )


// Add new element in a proper Way

// Quick Way

function createListItem(item){

    const li = document.createElement("li")

    li.innerHTML = `${item}<button class="remove-item btn-link text-red">
                            <i class="fa-solid fa-xmark"></i>
                            </button>`

    document.querySelector("ul").appendChild(li)

}



// Best Way

function createListItemBestWay(item){

    const li = document.createElement("li")
    
    const itemtext = document.createTextNode(`${item}`)

    const button = document.createElement("button")
    button.className = "remove-item btn-link text-red"

    const i = document.createElement("i")
    i.className = "fa-solid fa-xmark"

    button.appendChild(i)
    li.appendChild( itemtext )
    li.appendChild( button )

    document.querySelector("ul").appendChild(li)
}

const item = "mouse"
const itembest = "keyboard"


createListItemBestWay(itembest)
createListItem(item)
function removeClearButton(){

     const clearButton =  document.querySelector("#clear")
     clearButton.remove()

}

removeClearButton()

function removeFirstItem(){

    const parent = document.querySelector("ul")

    const firstItem = document.querySelector("li:nth-child(2)")

    parent.removeChild( firstItem  )

}

removeFirstItem()
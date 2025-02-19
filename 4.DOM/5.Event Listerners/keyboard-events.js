const itemInput = document.getElementById("item-input")

const onkeyPress = () => console.log("You pressed Something")
const onkeyUp = () => console.log("You are done pressing ")
const onkeyDown = () => console.log("You are staring to press ")

// itemInput.addEventListener("keypress" , onkeyPress )
// itemInput.addEventListener("keyup" , onkeyUp )
// itemInput.addEventListener("keydown" , onkeyDown )

function whichKey( e ){
    // key
    if (e.key === "Enter"){
        alert("Hello Bro")
    }
    
    // will give the key code
    console.log(e.keyCode ) 

    // will give the code
    e.code 


    // Occurs when we press and hold
    if ( e.repeat ){
        console.log(`pressing ${e.key}`)
    }

    // Boolean - returns whether the given is pressed or not
    e.shiftKey 
    e.ctrlKey 
    e.alttKey 


}

itemInput.addEventListener("keydown" , whichKey )

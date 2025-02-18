const clearButton = document.querySelector("#clear")

// Here e is the event object
clearButton.addEventListener( "click" , 
    (e) => {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.currentTarget)
        // console.log(e.timeStamp )
        console.log(e.clientX )
        console.log(e.offsetY )
    } 
)


/* 

In event Object

target - represents the element which triggered the event
currentTarget - the elemet to which the listerner is attahced to
type - type of event that was triggered
timeStamp - the time in which the event is been invoked

clientX - the position of mouse click relative to the window
clientY - the position of mouse click relative to the window

offsetX - the position of mouse click relative to the element
offsetY - the position of mouse click relative to the element

*/
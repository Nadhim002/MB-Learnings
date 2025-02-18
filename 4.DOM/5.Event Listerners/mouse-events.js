const clearbtn = document.querySelector("#clear")

const btnClick = () => console.log("Single Click Detected")
const doubleBtnClick = () => console.log("Double Click Detected!")
const onRightClick = () => {
     document.querySelector("header").style.visibility == "hidden" ?
       document.querySelector("header").style.visibility = "hidden" :
            document.querySelector("header").style.visibility = "visible" 
}

const mosueDownEvent = () => document.querySelector("header").style.backgroundColor = "grey"
const onMouseWheelEvent = () => document.querySelector("header").style.backgroundColor = "blue"
const onMouseOverEvent = () => document.querySelector("header").style.backgroundColor = "red"
const onMouseOutEvent = () => document.querySelector("header").style.backgroundColor = "green"
const onDragStartEvent = () => document.querySelector("li:nth-child(1)").style.backgroundColor = "purple"
const onDragEndEvent = () => document.querySelector("li:nth-child(1)").style.backgroundColor = "yellow"


clearbtn.addEventListener("click", btnClick)
clearbtn.addEventListener("dblclick", doubleBtnClick)
clearbtn.addEventListener("contextmenu", onRightClick)

clearbtn.addEventListener("mousedown", mosueDownEvent)

clearbtn.addEventListener("wheel" , onMouseWheelEvent )

clearbtn.addEventListener("mouseover" , onMouseOverEvent )
clearbtn.addEventListener("mouseout" , onMouseOutEvent )

clearbtn.addEventListener("dragstart" , onDragStartEvent )

clearbtn.addEventListener("dragend" , onDragEndEvent )
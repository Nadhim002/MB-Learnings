import { useState } from "react"
import "./index.css"
import { useRef } from "react"
import { useEffect } from "react"

function App() {
  const [storage, setStorage] = useState(["", "", "", ""])
  const [currStep, setCurrStep] = useState(0)
  const inputTags = useRef([])

  const inputTagClassName = "border w-16 h-16"

  function onchangeHandler(e) {

    e.preventDefault()
    const element = e.target
    const elementid = element.getAttribute("id")
    console.log( elementid )
    const value = element.value

    if( value.length > 1 ){ return }

    const newStorage = [...storage]
    newStorage[elementid] = value
    console.log( newStorage )
    setStorage( newStorage )

    // If it is empty move backwards
    if (value == "" &&  elementid > 0 ) {
      setCurrStep(elementid  - 1)
    } else if ( elementid < storage.length - 1  ) {
      setCurrStep((prev) => prev + 1)
    }


  }

  useEffect( () => { 

    const inputTag = inputTags.current[ currStep ] 

    if( inputTag ){
      inputTag.focus()
    }

  } , [ currStep ] )

  return (

    <>
    <div className="flex justify-center items-center gap-6 py-10">
      {storage.map((each, index) => (
        <input
          type="text"
          className={inputTagClassName}
          key={index}
          value={each}
          id={index}
          ref={(ele) => { inputTags.current[ index ] = ele } }
          autoFocus={index == currStep}
          onChange={onchangeHandler}
        />
      ))}
    </div>


    <button className="text-center" disabled = { currStep != storage.length - 1 } 

    onClick={ () => { console.log("Hello Wolrd") } }

    > Submit</button>

    </>
  )
}

export default App

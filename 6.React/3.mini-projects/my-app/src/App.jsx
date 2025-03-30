import { useState } from "react"
import "./index.css"
import GameGrid from "./components/GameGrid"
import React from "react"

export default function App() {

  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currMove, setCurrMove] = useState(0)

  function onPlay( alteredState ){

    const newHistory = [ ...history.slice( 0 , currMove + 1  ) , alteredState ]

    setHistory( newHistory )
    setCurrMove( currMove + 1  )

  }

  function onTimeTravel( move ){

    console.log("Hello")
    console.log( move )

    setCurrMove( move )


  }

  return (
    <div className="flex gap-7">
      <div >
        <GameGrid currMove={currMove} currState = { history[ currMove ] } onPlay = {onPlay}  />
      </div>

      <div className="move-tracking">
        <ol>
          {history.map((_, index) => (
            <li key={index} className="border border-black p-2" >
              <button key={index}  onClick={ () => {  onTimeTravel( index ) } }>{ " Go To Move " + index  }</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

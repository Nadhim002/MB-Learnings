import React from "react"
import Square from "./Square"

export default function GameGrid({ currMove, currState, onPlay }) {

  const whoPlayed = (currMove%2 == 0 ) ?  "X" : "O" 

  function gridClickhandler(e) {

    e.preventDefault()
    const indexOfSelectedBox = e.target.getAttribute("sq_index")

    if ( currState[ indexOfSelectedBox ] || isWinnerAvailable( currState ) ){
        return
    }

    const whoPlayed = (currMove%2 == 0 ) ?  "X" : "O" 
    console.log( whoPlayed  )

    const alteredState = currState.slice()
    alteredState[ indexOfSelectedBox  ] = whoPlayed

    onPlay( alteredState )
  }

  let winner = isWinnerAvailable(currState)

  let WhatToShow = winner ? `The Winner is ${winner}` :  `Player to Move ${whoPlayed}` 

  return (
    <>
    <div className="status-bar">{WhatToShow}</div>
    <div
      className="game-grid grid grid-cols-3 border border-gray-800"
      onClick={gridClickhandler}
    >
      {currState.map((content, index) => (
        <Square key={index} content={content} sq_index={index} />
      ))}
    </div>
    </>
  )
}

function isWinnerAvailable(list) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let line of lines) {
    let [a, b, c] = line

    if (list[a] && list[a] === list[b] && list[b] == list[c]) {
      return list[a]
    }
  }

  return null
}

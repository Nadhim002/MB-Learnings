import React from "react"

export default function Grid({ rows, cols }) {

    let a = [ "" ]

    a.push(  <div key={""} id={""} >{""}</div> )

    for( let c = 0  ;  c < cols ; c++  ){
        a.push(  <div key={String.fromCharCode( c + 97 )} id={String.fromCharCode( c + 97 )} >{String.fromCharCode( c + 97 )}</div>  )
    }

    for ( let r  = 1 ; r < rows + 1  ; r++  ){

        console.log(  r )

        a.push(  <div key={`r-${r}`} id={ `r-${r}` } >{`r-${r}`}</div>  )

        for( let c = 0  ;  c < cols ; c++  ){
            a.push(  <div key={`r-${r}-c-${c}`} id={ `r-${r}-c-${c}` } >{`r-${r}-c-${c}`}</div>  )
        }

    
    }

    const noOfCols = cols + 1 

  return (    <div style={ {display : "grid" , gridTemplateColumns : `repeat(  ${ noOfCols } , 50px )` }} >
        { a }

  </div>)
}

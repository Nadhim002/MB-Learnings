import { useState } from "react"
import "./index.css"
import Grid from "./components/Grid"

function App() {

  const [ rows , setRows ] = useState(0) 
  const [ cols , setCols ] = useState(0)

  // console.log( String.fromCharCode( 96 +  parseInt( rows ) ) )

  console.log( rows , cols  )
 
  return (
  <>
  <input type="number" placeholder="no-of-rows" value={rows} onChange = { (e) => { setRows( Number(e.target.value) ) } } className="border" />
  <input type="number" placeholder="no-of-cols" value={cols} onChange = { (e) => { setCols( Number(e.target.value)  ) } }  className="border" />
  <Grid  rows ={rows}   cols = {cols} />
  </>
  
  )
}

export default App




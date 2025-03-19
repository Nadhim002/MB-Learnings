A jsx file function should return only a single html element - but that single element can multiple childs 


```

export default function App() {

  const name = "Nadhim"
  const nameList = ["nadhim" , "maihsa" , "hello"]

  const loggedIn = true

  const styles = { color : "red" , fontSize : "72px" }

  return (
    <>
    <div className = "text-5xl"  style = { styles } > App {name}</div>

    <ul>
      {nameList.map( (name , index ) => <li key = {index} >{name}</li>  ) }
    </ul>

    { loggedIn ? <h1  >Yes</h1> : <h1  >No</h1>}

    </>
  )
}
```
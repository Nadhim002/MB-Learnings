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


useState in React

- component state
- Global state


### **Comparison: `NavLink` vs Other Links (`a`, `Link`)**  

| Feature         | `<a>` Tag (Anchor) | `Link` (React Router) | `NavLink` (React Router) |
|---------------|--------------------|----------------------|----------------------|
| **Purpose** | Standard HTML link | Navigation in a React app (Single Page Application) | Same as `Link`, but with additional active state styling |
| **Page Reload** | Causes a full page reload | Prevents full reload, updates the route | Prevents full reload, updates the route |
| **Used In** | Any web page | React apps using React Router | React apps using React Router |
| **Styling** | Standard CSS styles | Standard CSS styles | Can apply styles dynamically based on active state |
| **Active State** | Not available | Not available | Adds `active` class or custom styles when the link is active |


---

### **Example 1: Using a Callback (✅ Correct)**
```jsx
<input type="checkbox" onChange={() => setType(true)} />
```
**Explanation:**
- Here, we are passing an **anonymous arrow function** as a callback.
- The function is **not executed immediately**; it will only execute when the event (`onChange`) occurs.

---

### **Example 2: Calling the Function Directly (❌ Incorrect)**
```jsx
<input type="checkbox" onChange={setType(true)} />
```
**What happens here?**
- `setType(true)` is **executed immediately** when the component renders.
- The result (which is `undefined` since `setType` does not return anything) is passed to `onChange`, causing unintended behavior.

---

### **Key Differences:**
| Approach | Behavior |
|----------|----------|
| **Using a callback (`() => setType(true)`)** | The function runs **only when** the event (`onChange`) occurs. ✅ |
| **Calling the function directly (`setType(true)`)** | The function runs **immediately** when the component renders, not on the event. ❌ |

---

### **When Should You Call the Function Directly?**
You can call the function directly if you're passing a reference without arguments:
```jsx
<input type="checkbox" onChange={setType} />  // This is fine (if setType does not require an argument)
```
But if you need to pass an argument, always wrap it inside a callback:
```jsx
<input type="checkbox" onChange={() => setType(true)} />
```


### useLoaderData 

React Router's data fetching system does have a built-in request deduplication mechanism that works in specific circumstances.

When multiple loader functions attempt to make the same exact request (same URL, same parameters) within a single navigation transition,
 React Router will only execute that request once and share the result with all components that need it.


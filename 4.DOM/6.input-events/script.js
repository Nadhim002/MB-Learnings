const itemInput = document.getElementById("item-input")
const priorityInput = document.getElementById("priority-input")

const checkBox = document.getElementById("checkbox")
const heading = document.querySelector("h1")

itemInput.addEventListener("input", (e) => (heading.innerText = e.target.value))

priorityInput.addEventListener(
  "change",
  (e) => (heading.innerText = e.target.value)
)

checkBox.addEventListener(
  "input",
  (e) => (heading.innerText = e.target.checked ? "Checked" : "UnChecked")
)

function onFocus() {
  console.log("OnFocus")
}
function onBlur() {
  console.log("OnBlur")
}

itemInput.addEventListener("focus", onFocus)
itemInput.addEventListener("blur", onBlur)

// Form Details

const form = document.getElementById("item-form")

// Way 01
// form.addEventListener("submit" ,(e) => onsubmitWayOne(e) )

function onsubmitWayOne(e) {
  console.log("Way One")

  e.preventDefault()

  const priorityValue = document.getElementById("priority-input").value
  const itemInputvalue = document.getElementById("item-input").value

  if (itemInputvalue == "" || priorityValue == 0) {
    alert("fill pannu bro")
    return
  }

  console.log(priorityValue, itemInputvalue)
}

// Way 02

form.addEventListener("submit", onsubmitWayTwo)

function onsubmitWayTwo(e) {
  console.log("Way Two")

  e.preventDefault()

  const formData = new FormData(form)

  if (formData.get("item") == "" || formData.get("priority") == 0) {
    // use names of input field inside get

    alert("fill pannu bro")
    return
  }

 formData.entries().forEach(element => { console.log(element) } )
    
}

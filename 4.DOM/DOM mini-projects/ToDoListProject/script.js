const listHolder = document.querySelector(".list-holder-container")

listHolder.addEventListener("click", removeToDo)
listHolder.addEventListener("click", editToDo)
listHolder.addEventListener("click", saveToDo)

function removeToDo(eventObj) {
  const targetElement = eventObj.target

  if (targetElement.className == "delete-icon") {
    targetElement.parentElement.remove()
  }
}

function editToDo(eventObj) {
  const editIconDiv = eventObj.target

  if (editIconDiv.className == "edit-icon") {
    const toDoTextDiv = editIconDiv.previousElementSibling

    const inputEle = document.createElement("INPUT")
    const saveDiv = document.createElement("DIV")
    saveDiv.innerText = "save"
    saveDiv.className = "save-icon"

    editIconDiv.replaceWith(saveDiv)
    toDoTextDiv.replaceWith(inputEle)
  }
}

function saveToDo(eventObj) {
  const saveIcon = eventObj.target

  if (saveIcon.className == "save-icon") {
    const inputEle = saveIcon.previousElementSibling

    const toDoTextDiv = document.createElement("DIV")
    toDoTextDiv.innerText = inputEle.value
    toDoTextDiv.className = "todo-text"

    const editIconDiv = document.createElement("DIV")
    editIconDiv.innerText = "edit"
    editIconDiv.className = "edit-icon"

    saveIcon.replaceWith(editIconDiv)
    inputEle.replaceWith(toDoTextDiv)
  }
}

const inputElement = document.querySelector(".to-do-adder")

inputElement.addEventListener("keydown", addToDo)

function addToDo(eventObj) {
  if (eventObj.key == "Enter") {
    // Add Element to list-holder-container
    const toDoDiv = createToDoDiv(eventObj.target.value)
    listHolder.appendChild(toDoDiv)

    //Removing the Text
    eventObj.target.value = ""
  }
}

function createToDoDiv(textToAdd) {
  const itemDiv = document.createElement("DIV")
  itemDiv.className = "single-item"

  const toDoTextDiv = document.createElement("DIV")
  toDoTextDiv.innerText = textToAdd
  toDoTextDiv.className = "todo-text"
  itemDiv.appendChild(toDoTextDiv)

  const editIconDiv = document.createElement("DIV")
  editIconDiv.innerText = "edit"
  editIconDiv.className = "edit-icon"
  itemDiv.appendChild(editIconDiv)

  const deleteIconDiv = document.createElement("DIV")
  deleteIconDiv.innerText = "delete"
  deleteIconDiv.className = "delete-icon"
  itemDiv.appendChild(deleteIconDiv)

  return itemDiv
}


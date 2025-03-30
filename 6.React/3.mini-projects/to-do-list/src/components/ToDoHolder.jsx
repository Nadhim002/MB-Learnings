import { useState } from "react"
import Todo from "./Todo"
export default function ToDoHolder() {
  const [storage, setStorage] = useState({
    1: { id: 1, content: "Hello World", isCompleted: true },
  })
  const [inputTagValue, setInputTagValue] = useState("")
  const [updateState, setUpdateState] = useState({
    isInUpdate: false,
    toBeUpdateId: null,
  })

  function inputTagValueChangehandler(e) {
    if (updateState["isInUpdate"] && e.target.value == "") {
      setUpdateState({ isInUpdate: false, toBeUpdateId: null })
    }

    setInputTagValue(e.target.value)
  }

  function clearInputTag(e) {
    setInputTagValue("")
    setUpdateState({ isInUpdate: false, toBeUpdateId: null })
  }

  function addToDO() {
    
    if (!inputTagValue) {
      return
    }

    const time = Date.now()

    setStorage({
      ...storage,
      [time]: { id: time, content: inputTagValue, isCompleted: false },
    })

    setInputTagValue("")
  }

  function handleUpdateButton(id) {
    setUpdateState({ isInUpdate: true, toBeUpdateId: id })
    setInputTagValue(storage[id]["content"])
  }

  function removeToDo(idToRemove) {

    const newStorage = { ...storage }
    delete newStorage[idToRemove]

    setStorage(newStorage)

  }

  function editToDo(toDoEdit) {
    const newStorage = { ...storage }
    const idToUpdate = toDoEdit["id"]
    newStorage[idToUpdate] = toDoEdit
    setStorage(newStorage)
    setUpdateState({ isInUpdate: false, toBeUpdateId: null })
    setInputTagValue("")
  }

  function taskStatusSetter(idToMark) {
    const newStorage = { ...storage }
    newStorage[idToMark] = {
      id: idToMark,
      content: newStorage[idToMark]["content"],
      isCompleted: !newStorage[idToMark]["isCompleted"],
    }
    setStorage(newStorage)
  }

  function handleInput() {
    if (updateState["isInUpdate"]) {
      const idToUpdate = updateState["toBeUpdateId"]
      console.log(idToUpdate)
      editToDo({
        id: idToUpdate,
        content: inputTagValue,
        isCompleted: storage[idToUpdate]["isCompleted"],
      })
    } else {
      addToDO()
    }
  }

  return (
    <>
      <input
        type="text"
        className="border border-amber-500"
        value={inputTagValue}
        onChange={inputTagValueChangehandler}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handleInput()
          }
        }}
      />

      <div className="flex gap-6">
        <button className="bg-blue-400" onClick={handleInput}>
          {updateState["isInUpdate"] ? "Update" : "Submit"}
        </button>
        <button className="bg-blue-400" onClick={clearInputTag}>
          Cancel
        </button>
      </div>

      {Object.entries(storage).map(([todoId, todo]) => (
        <Todo
          key={todoId}
          toDoInfo={todo}
          onClickHandler={removeToDo}
          taskStatusSetter={taskStatusSetter}
          handleUpdateButton={handleUpdateButton}
        />
      ))}
    </>
  )
}

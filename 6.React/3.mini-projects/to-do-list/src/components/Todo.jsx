import React from 'react'

export default function Todo( props ) {


  const {taskStatusSetter , toDoInfo , onClickHandler , handleUpdateButton  } = props
  const { id , content ,  isCompleted  } = toDoInfo


  return (
    <div className='flex gap-10'>
        <div onDoubleClick = {  () => { taskStatusSetter(id) } }  className = { isCompleted ? "line-through" : "" }  >{ content}</div>
        <div className='flex gap-4'>
            <button className='bg-green-500'  onClick= { () => handleUpdateButton(  id   ) } >Edit</button>
            <button className='bg-red-600' onClick= { () => onClickHandler(  id   ) } >Delete</button>
        </div>
    </div>

  )
}

import React from 'react'

export default function Square( {content , sq_index } ) {
  return (
    <div className='border border-gray-800 h-16 w-16' sq_index = {sq_index} >{content}</div>
  )
}

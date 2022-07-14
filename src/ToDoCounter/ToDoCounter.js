import React from 'react'
import './ToDoCounter.css'

export default function ToDoCounter({total, completedTask}) {
  const estilos = {
    color: "red",
    backgroundColor: "blue",

  }
  
  return (
    <div>
        <h2 className='ToDoCounter'>{`Completed ${completedTask} of ${total}`}</h2>
    </div>
  )
}

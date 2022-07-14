import React from 'react'
import './ToDoItem.css'

export default function ToDoItem(props) {

    const onDelete = () =>{
        alert("Borraste el Todo"+ props.text)
    }

  return (
    <li className={`${props.completed && 'completedTarget'}`}>
        <div>
            <span className={`willCompleteIcon ${props.completed && 'CompletedIcon'}`} onClick={props.onComplete}>{props.completed ? "✔" : ""}</span>

            <p className={`${props.completed && 'CompletedText'}`}>{props.text}</p>
            
        </div>
        <span className='delete' onClick={props.onDelete}>X</span>
    </li>
  )
}

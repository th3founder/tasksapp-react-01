import React from 'react'
import './CreateToDoButton.css'

export default function CreateToDoButton() {
  

  const onClickButton = () =>{
      console.log("Somos el click")
  }

  return (
    <div onClick={onClickButton}>
        <button>Create Task</button>
    </div>
  )
}

import React, { useState } from 'react'
import './ToDoSearch.css'

export default function ToDoSearch({inputTask, setInputTask}) {


    const onChangeInput = (event) =>{
        console.log("Las busqueda es: ",event.target.value)
        setInputTask(event.target.value)
    }

    return (
    <div className='searchContainer'>
        <label>My Task is: {`${inputTask}`}</label>
        <input placeholder="Nunca parar de aprender" className='ToDoSeachInput' onChange={onChangeInput} value={inputTask}></input>
    </div>
    )
}

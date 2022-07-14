import React from 'react'
import './ToDoList.css'

export default function ToDoList(props) {
  return (  
        <section>
            <ul>
                {props.children} {/* Selecciona todos los hijos sin importar que */}
            </ul>
        </section>

  )
}

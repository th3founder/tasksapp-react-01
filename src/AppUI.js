import React from 'react'
import ToDoCounter from "./ToDoCounter/ToDoCounter";
import ToDoSearch from "./ToDoSearch/ToDoSearch";
import ToDoList from "./ToDoList/ToDoList";
import ToDoItem from "./ToDoItem/ToDoItem";
import CreateToDoButton from "./CreateToDoButton/CreateToDoButton";
import SearchTask from "./SearchTask/SearchTask";
import './index.css'

export default function AppUI(
    {searchValue, 
    inputTask, 
    setInputTask, 
    completeTask, 
    totalTask, 
    searchedTask, 
    setSearchValue, 
    completeTarea, 
    deleteTask}

) {
    
    
  return (
    <React.Fragment> {/* React necesita que enviemos una etiqueta contenedora por componente, entonces para optimizar y no tener problemas con css y html se utiliza React.Fragment */}
    <div className="appContainer">
      <div className="conainterLeft">
        <h2>Create new task</h2>
        <div className="ToDoCreate">

          <ToDoSearch 
            inputTask = {inputTask}
            setInputTask = {setInputTask}
          />

          <CreateToDoButton/> 
        </div>
        <img src="https://i.pinimg.com/564x/f9/18/50/f918507c754600f9b175197bfe5b41f6.jpg" alt="Imagen reto"></img>
      </div>


      <div className="conainterRight">
      <h1>Your Tasks</h1>
      <ToDoCounter 
        total = {totalTask}
        completedTask = {completeTask}
      />

      <SearchTask 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

            <ToDoList>
              {searchedTask.map((todo,id) => (
                
                <ToDoItem text={todo.text} key={id} completed={todo.completed}  onComplete = {()=> completeTarea(todo.text)} onDelete ={()=> deleteTask(todo.text)}></ToDoItem>
              ))}
            </ToDoList> 
            
      </div>  
    </div>
    </React.Fragment>
   
  )
}

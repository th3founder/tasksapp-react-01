import React, { useState } from "react";
import AppUI from "./AppUI";

/* const toDos = [{
  text: 'Ir al Gym',
  completed: false
},{
  text: 'Atender empresa ITASIM',
  completed: false 
},{
  text: 'Tomar curso trading',
  completed: false
},{
  text: 'Tomar clases de Ingles',
  completed: true
},{
  text: 'Tomar curso React Js',
  completed: true
}] */

function useLocalStorage(){
  
}
/* function useLocalStorage(){
  const [tasks, setTasks] = useState(parsedTasks)

  const localStorageTasks = localStorage.getItem('TASKS_V1')

  let parsedTasks;

  if(!localStorageTasks){
    localStorage.setItem('TASKS_V1', JSON.stringify([]))
    parsedTasks = []
  }else{
    parsedTasks = JSON.parse(localStorageTasks);
  }

  const saveTasks = (newTasks) =>{
    const stringifyTasks = JSON.stringify(newTasks)
    localStorage.setItem('TASKS_V1',stringifyTasks)
    setTasks(newTasks)
    /* no confundirse de enviar string al estado ya que solo maneja js, lo unico que hay que enviarle string es al localStorage
    }

  }
 */

function App() {

  const localStorageTasks = localStorage.getItem('TASKS_V1')

  let parsedTasks;

  if(!localStorageTasks){
    localStorage.setItem('TASKS_V1', JSON.stringify([]))
    parsedTasks = []
  }else{
    parsedTasks = JSON.parse(localStorageTasks);
  }


  /* .......................................................... */
  const [tasks, setTasks] = useState(parsedTasks)

  const [searchValue, setSearchValue] = useState('')//Filtro

  const [inputTask, setInputTask] = useState('') //Input de tarea

  const completeTask = tasks.filter(todo => !! todo.completed).length //filtra todas las tareas que sean true
  const completeTask2 = tasks.filter(todo => !! todo.completed)
  const totalTask = tasks.length;

  console.group()
    console.log(tasks)
    console.log(searchValue)
    console.log(inputTask)
    console.log(completeTask)
    console.log(completeTask2)
    console.log(totalTask)
  console.groupEnd()

/* ................................................................... */


  let searchedTask = []

  if(!searchValue.length >= 1){
    searchedTask = tasks
  }else{
    searchedTask = tasks.filter(todo => {
      const taskText = todo.text.toLowerCase() //Convertimos el texto de arreglo en minusculas
      const searchText = searchValue.toLocaleLowerCase() //convertimos el texto del input en minusculas
      return taskText.includes(searchText) //Revisamos si nuestro incluye el input
    })
  }

  /* .......................................................... */

  const saveTasks = (newTasks) =>{
    const stringifyTasks = JSON.stringify(newTasks)
    localStorage.setItem('TASKS_V1',stringifyTasks)
    setTasks(newTasks)
    /* no confundirse de enviar string al estado ya que solo maneja js, lo unico que hay que enviarle string es al localStorage */
  }
  
  const completeTarea = (text) =>{
    const todoIndex = tasks.findIndex(task => task.text === text) //Encontramos el indice del elemento a borrar

    /* tasks[todoIndex] = {
      text: tasks[todoIndex].text,
      completed: true     
    }; */
    const newTasks = [...tasks]; //clonamos el array

    /* newTasks[todoIndex].completed = true
 */
    newTasks[todoIndex].completed = !newTasks[todoIndex].completed; //Cambiamos true o falsa dependiendo

    saveTasks(newTasks) //seteamos la lista con el nuevo array

    console.log(text, todoIndex)
    console.log("Tarea hecha",newTasks)
  }


  const deleteTask = (text) =>{
    const todoIndex = tasks.findIndex(task => task.text === text)
    

    const newTasks = [...tasks];
    
    newTasks.splice(todoIndex, 1);

    saveTasks(newTasks)

    console.log("Tarea eliminada",newTasks) 

    /* function deleteTodo(text){
    const newTodos = todos.filter(todo=>todo.text !== text)
    setTodos(newTodos)
  } */

  
  }



  return (
    <AppUI
    searchValue={searchValue}
    inputTask={inputTask}
    setInputTask = {setInputTask}
    completeTask ={completeTask}
    totalTask = {totalTask}
    searchedTask = {searchedTask}
    setSearchValue = {setSearchValue}
    completeTarea = {completeTarea}
    deleteTask = {deleteTask}

    ></AppUI>
  )
}

export default App;

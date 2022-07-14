import React, { useState } from 'react'
import './SearchTask.css'

export default function SearchTask({searchValue, setSearchValue}) {  //El componente padre nos tiene que enviar dos props


    const onSearchValueChange = (event) =>{
            console.log("Searched component",event.target.value)
            setSearchValue(event.target.value)
        }

  return (
    <div className='searchTaskContainer'>
        <input placeholder="Search..." value={searchValue} onChange={onSearchValueChange}>

        </input>
    </div>
  )
}

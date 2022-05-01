import React  from 'react'
import './Todo.css'
import TodoList from './TodoList'
import { useState } from 'react'

export default function Todo() {
  const [task,setTask] =useState('');
  const [list,setList] =useState([]);
  const onChangeHandler = (e) =>{
    setTask(e.target.value)

  }
  const onClickHandler =() =>{
    if (task === "") {
      alert("Please Enter Your Todo");
    }
    else{
      const newList = task;
       setList([...list,newList])
       setTask('')
      // console.log(newList);
      
    }
   

  }
  const deleteItems  = (index) =>{
    alert('Deleted');
   

  }
  return (
    <div>
      <h1>ToDo App</h1><hr/>
      <input className='todoInput' placeholder='Enter Your ToDo List Here...'type='text' value={task} onChange={onChangeHandler}></input>
      <button className='todoButton' onClick={onClickHandler}>Add To List</button>
      <ol>
        {
          list.map((itemVal) =>{
            return <TodoList text={itemVal} delete ={deleteItems}/>
            
          })
        }
        </ol>
      
      
    </div>
  )
}

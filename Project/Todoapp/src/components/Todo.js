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
      
      // const newList = task;
       setList([...list,task])
       setTask('')
       
      // console.log(list);
      
    }
   

  }
  const deleteItems  = (e) =>{
    // alert('Deleted');
    const finalData = list.filter((curElem, index) => {
      return index !== e;
    });
    setList(finalData);
   

  }
  return (
    <div>
      <h1>ToDo App</h1><hr/>
      <input className='todoInput' placeholder='Enter Your ToDo List Here...'type='text' value={task} onChange={onChangeHandler}></input>
      <button className='todoButton' onClick={onClickHandler}>Add To List</button>
      <ol>
        {
          list.map((itemVal, index) =>{
            return <TodoList text={itemVal} delete ={deleteItems} index={index} />
            
          })
        }
        </ol>
      
      
    </div>
  )
}

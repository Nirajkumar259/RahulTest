import React from 'react'
import './Todo.css'

export default function TodoList(props) {
  // const deleteItems = () =>{
  //   // console.log('Deleted')
  // }
  return (
    <div >
      <div className='listItems'>
      <li>{props.text}</li>
      <button className='listBtn' onClick={props.delete}>X</button>
      </div>
      
     
    </div>
  )
}

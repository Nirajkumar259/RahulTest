import React from 'react'
import './Todo.css'

export default function TodoList(props) {
  // const deleteItems = () =>{
  //   // console.log('Deleted')
  // }

  const onClick = (e) =>{
    props.delete(props.index);
  }
  return (
    <div >
      <div className='listItems'>
      <li>{props.text}</li>
      <button className='listBtn' onClick={onClick}>X</button>
      </div>
      
     
    </div>
  )
}

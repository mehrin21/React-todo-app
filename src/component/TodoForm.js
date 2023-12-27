import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
console.log(addTodo)
  const [value,setValue] = useState()
  console.log("value" , value) 
  let handleSubmit = (e)=>{
       e.preventDefault()

       addTodo(value)

       setValue("")
  }

 
 
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='What is the task today' onChange={(e)=>setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm

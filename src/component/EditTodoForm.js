import React, { useState } from 'react'

const EditTodoForm = ({editTodo,task}) => {

  const [value,setValue] = useState(task.task)
  console.log("value" , value) 
  let handleSubmit = (e)=>{
       e.preventDefault()

       editTodo(value,task.id)

       setValue("")
  }

 
 
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Update task' onChange={(e)=>setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update</button>
      </form>
    </div>
  )
}

export default EditTodoForm

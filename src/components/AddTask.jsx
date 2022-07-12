import React, { useState } from 'react'

const AddTask = ({tasks,setTasks}) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const handleAddTask = (e)=> {
    e.preventDefault();
    const id= new Date().getTime();
    const newTask = {id:id, task:task,date:date,isDone:false};
    setTasks([...tasks,newTask]);
    setTask("");
    setDate("")



   return {
    "id":13,
    "task":task,
    "datetime":date,
    "isDone":false
  
  }
  }

  return (
    <div className="add-task">
      <form action="" onSubmit={handleAddTask}>
        <div>
          <label htmlFor="task">Task</label>
          <input type="text" value={task} name="task" onChange={(e)=>setTask(e.target.value)} id="task" placeholder="Add Task" required />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" value={date} onChange={(e)=>setDate(e.target.value)} required />

          <button  type="submit" className="save-btn">
            Save Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTask

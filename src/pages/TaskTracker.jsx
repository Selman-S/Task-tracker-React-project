import React, { useState } from 'react'
import HeaderTask from '../components/HeaderTask'
import data from '../helper/data'
const TaskTracker = () => {

  const [tasks, setTasks] = useState(data || []);

console.log(tasks)
 
  const addTask = (task) => {
    setTasks(task)
  }
  return (
    <div className="task-card">
      <HeaderTask tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default TaskTracker

import React, { useEffect, useState } from 'react'
import HeaderTask from '../components/HeaderTask'
import ShowTask from '../components/ShowTask';

const TaskTracker = () => {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

console.log(tasks)
 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);
  return (
    <div className="task-card">
      <HeaderTask tasks={tasks} setTasks={setTasks} />
      <ShowTask tasks={tasks} />
    </div>
  )
}

export default TaskTracker

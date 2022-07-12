import React from 'react'
import { GrClose } from 'react-icons/gr'

const ShowTask = ({ tasks ,setTasks}) => {
  console.log(tasks)


  const delTask = (task)=> {
    const delT = tasks.filter((e)=> !(e.id===task.id))
    setTasks(delT)
  }
  const crossOut = (task) => {
 
      var newTask = {...task,isDone: !task.isDone}
  
     setTasks([...(tasks.filter((e)=> !(e.id===task.id))),newTask])

   
  }  
   

  return (
    <div>
      <div className="tasks">
        <div className="tasks-list">
          {tasks.map((task) => {
            return (
              <div key={task.id} className="task-item">
                <div style={{textDecoration: task.isDone?'line-through':'none'}} 
                 onClick={()=> crossOut(task)} className="task-desc">
                  <h2 className="task-title">{task.task}</h2>
                  <p className="task-date">{task.date}</p>
                </div>

                <div className="task-close">
                  <GrClose onClick={()=> delTask(task)} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ShowTask

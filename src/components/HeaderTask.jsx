import React, {  useState } from 'react'
import AddTask from './AddTask'

const HeaderTask = ({tasks,setTasks}) => {
  const [show, setShow] = useState(true);
  const [btn, setBtn] = useState({
    bgColor:'red',
    desc:'Close Add Task Bar'
  });

  const handleShowClick = () => { 
    if (show) {
      setBtn({bgColor:'purple',desc:'Show Add Task Bar'})
    } else {
      setBtn({
        bgColor:'red',
        desc:'Close Add Task Bar'
      })
    }
   setShow(!show);
  }
  
  return (
    <div className="header">
      <h2>Task Tracker</h2>
      <button style={{backgroundColor:btn.bgColor}} onClick={handleShowClick}>{btn.desc}</button>
      {show && <AddTask tasks={tasks} setTasks={setTasks} /> }
      
    </div>
  )
}

export default HeaderTask

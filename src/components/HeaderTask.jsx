import React, { useState } from 'react'
import AddTask from './AddTask'

const HeaderTask = () => {
  const [show, setShow] = useState(true);
  const handleShowClick = () => {
    setShow(!show);
  }
  console.log(show)
  return (
    <div className="header">
      <h2>Task Tracker</h2>
      <button onClick={handleShowClick}>Show Add Task Bar</button>
      {show && <AddTask /> }
      
    </div>
  )
}

export default HeaderTask

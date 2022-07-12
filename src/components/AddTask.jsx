import React from 'react'

const AddTask = () => {
  return (
    <div className="add-task">
      <form action="">
        <div>
          <label htmlFor="task">Task</label>
          <input type="text" id="task" placeholder="Add Task" required />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" required />

          <button type="submit" className="save-btn">
            Save Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTask

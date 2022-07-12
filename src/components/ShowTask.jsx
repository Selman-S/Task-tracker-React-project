import React from 'react'
import { GrClose } from 'react-icons/gr'

const ShowTask = ({ tasks }) => {
  console.log(tasks)
  return (
    <div>
      <div className="tasks">
        <div className="tasks-list">
          <div className="task-item">
            <div className="task-desc">
              <h2 className="task-title">deneme</h2>
              <p className="task-date">Dec 13th, 2014</p>
            </div>

            <div className="task-close">
              <GrClose />
            </div>
          </div>   <div className="task-item">
            <div className="task-desc">
              <h2 className="task-title">deneme</h2>
              <p className="task-date">Dec 13th, 2014</p>
            </div>

            <div className="task-close">
              <GrClose />
            </div>
          </div>   <div className="task-item">
            <div className="task-desc">
              <h2 className="task-title">deneme</h2>
              <p className="task-date">Dec 13th, 2014</p>
            </div>

            <div className="task-close">
              <GrClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowTask

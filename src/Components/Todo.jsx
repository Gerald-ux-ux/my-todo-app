import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan, faStar
} from '@fortawesome/free-solid-svg-icons'
import { Alert } from 'react-bootstrap';

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {

  const afterClick = () => {
    alert("You Marked As Important")
  }
  return (
    <>
      {toDo && toDo
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? 'done' : ''}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span title="Completed"
                    onClick={(e) => markDone(task.id)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>

                  {task.status ? null : (
                    <span title="Edit"
                      onClick={() => setUpdateData({
                        id: task.id,
                        title: task.title,
                        status: task.status ? true : false
                      })}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}

                  <span title="Delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                  <span title="Important"
                    onClick={afterClick}
                  >
                    <FontAwesomeIcon icon={faStar}
                    />
                  </span>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }
    </>
  )
}

export default ToDo
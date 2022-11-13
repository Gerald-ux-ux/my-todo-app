import React from 'react';
import { useNavigate } from 'react-router-dom';
// import {sendRequest} from '../today'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan, faStar
} from '@fortawesome/free-solid-svg-icons'


const ToDo = ({ toDo, markDone, setUpdateData, deleteTask, setResponse, sendRequest }) => {

  const navigate = useNavigate({setResponse});
  const afterClick = () => {
    navigate("/important")
   sendRequest().then(setResponse)
  }
  
  
  return (
    <>
      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
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
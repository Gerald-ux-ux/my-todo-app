import React from 'react';

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input 
            className="form-control form-control-lg"
            type="text"
            placeholder='Add a task'
            autoComplete='true'
            autoCapitalize='true'
            autofocus="true"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button 
            onClick={addTask}
            className="btn btn-lg btn-light"
          >Add Your Task</button>
        </div>
      </div>
    </>
  )
}

export default AddTaskForm;
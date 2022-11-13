import React from 'react';

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input 
            type="text"
            placeholder='Add a task'
            autoComplete='true'
            autoCapitalize='true'
            autofocus="true"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="btn">
          <button
            onClick={addTask}
          >Add Your Task</button>
        </div>
      </div>
    </>
  )
}

export default AddTaskForm;
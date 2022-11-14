import React from 'react'
import { useState, useEffect } from 'react'
import ToDo from './Todo';
import AddTaskForm from './AddTaskForm';
import UpdateForm from './UpdateForm';



const Today = () => {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then(res => res.json())
      .then(data => { setToDo(data); })
  }, []);

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }

      fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEntry)
      })
        .then(res => res.json())
        .then(data => {
          setToDo([...toDo, data]);
          setNewTask('');
        })

    }
  }

  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)

    fetch(`http://localhost:3001/tasks${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json)
      .then(data => {
        setToDo(newTasks);
      }
      )
      
      
  }
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  const cancelUpdate = () => {
    setUpdateData('');
  }

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }

    fetch(`http://localhost:3001/tasks${updateData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntry)
    })
      .then(res => res.json())
      .then(data => {
        setUpdateData(data);
      })

  }
  

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }



  return (

    <div className='display'>
      <br></br>
      <h1>Today</h1>
      <br></br>
      {updateData && updateData ? (
        <UpdateForm 
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm 
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}
      <ToDo 
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default Today
import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <div className="itemList">
        {
          taskList.map( (task, i) => (
            <TaskList task={task} taskList={taskList} setTaskList={ setTaskList } index={i} key={i}/>
          ))
        }
      </div>
      <TaskForm taskList={taskList} setTaskList={ setTaskList }/>    
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import Title from './Title';
import todo from './todo';
import toDolist from './ToDoList';

function App() {

  const [toDoList, setToDo] = useState(todo);


  return (
    <div className="App">
      <Title />
      <ToDoList toDoList={todo}/>
    </div>
  );
}

export default App;

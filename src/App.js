import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import List from './components/List';


import todoList from "./todoList";

export default function App() {

  const [list, setList] = useState (todoList.slice());

  function addTask(task) {
    setList(prev => prev.text="puff");//obvously dosen't do anything
  }

  return (
    <div className="App">
      <TodoForm onAddClick={()=>{addTask(list)}} />
      <List/>
    </div>
  );
}

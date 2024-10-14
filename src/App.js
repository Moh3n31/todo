import React,{useState} from 'react';
import TodoForm from './components/TodoForm';
import List from './components/List';


import todoList from "./todoList";

export default function App() {
  const [list, setList] = useState (...todoList);
  function addTask(task) {
    alert(task);
  }

  return (
    <div className="App">
      <TodoForm onAddClick={()=>{addTask(list)}}/>
      <List />
    </div>
  );
}

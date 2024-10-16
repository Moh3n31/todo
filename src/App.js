import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import List from './components/List';


import todoList from "./todoList";

export default function App() {

  const [list, setList] = useState (todoList.slice());

  function handleClick (index, actionNumber) {
    let tempList = [...list];
    
    if(actionNumber === 0) {//edit
      tempList[index].text = "editing";
    }
    else if(actionNumber === 1) {//change status
      tempList[index].isDone = !(tempList[index].isDone);
    }
    else if(actionNumber === 2) {//delete
      tempList.splice(index, 1);
    }

    setList(tempList);
  }

  function addNewTask(value) {
    const tempList = [...list];
    const newTask = {
      id: tempList.length + 1,
      text:value,
      isDone:false};

    tempList.push(newTask);
    setList(tempList);
  }

  return (
    <div className="App">
      <TodoForm addNewTask={addNewTask}/>
      <List taskList={list} handleClick={handleClick}/>
    </div>
  );
}

import React from "react";
import todoList from "../todoList";

export default function Task (props){
    const createList = todoList.map (item =>{
        if (props.isDone === item.isDone) {
            return(
                <li key={item.id}
                className="task"
                id={item.isDone ? "done" :"undone"}
                onClick={changeStatus}
                >
                    {item.text}
                </li>
            )
        }
        else return null;
        });

    function changeStatus () {
        alert("done");
    }
    return  (
        <ul className="task-list">
            {createList}
        </ul>
    )
}
import React from "react";
import todoList from "../todoList";

export default function List (){
    const createList = todoList.map (item =>{
        return(
            <li key={item.id}
            className="task">
                {item.text}
            </li>
        )
    })
    
    return  (
        <ul className="task-list">
            {createList}
        </ul>
    )
}
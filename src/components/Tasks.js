import React from "react";
import todoList from "../todoList";

import edit from "../icons/edit.png";
import cross from "../icons/cross.png";
import check from "../icons/check.png";

export default function Task (props){

    const createList = todoList.map (item =>{
        if (props.isDone === item.isDone) {
            return(
                <div key={item.id}
                className="task"
                id={item.isDone ? "done" :"undone"}
                >
                    <p>{item.text}</p>
                    <div className="tools">
                        <img className="tool-button" src={edit} alt="edit"/>
                        <img className="tool-button"
                        src={props.isDone ? cross : check} alt="status"
                        onClick={()=>changeStatus(item.isDone)}/>
                    </div>
                </div>
            )
        }
        else return null;
        });

    function changeStatus (isDone) {
        alert(isDone ? "lier!" : "done");
    }
    return  (
        <div className="task-list">
            {createList}
        </div>
    )
}
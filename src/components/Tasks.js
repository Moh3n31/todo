import React from "react";

import edit from "../icons/edit.png";
import cross from "../icons/cross.png";
import check from "../icons/check.png";
import deleteIcon from "../icons/delete.png";

export default function Task ({isDone, taskList=[], handleClick}){

    const createList = taskList.map ((item, index) =>{
        if (isDone === item.isDone) {
            return(
                <div key={index}
                className={"task"}
                id={item.isDone ? "done" :"undone"}
                
                >
                    <p>{item.text}</p>
                    <div className="tools">
                        <img className="tool-button" src={edit} alt="edit"
                        onClick={()=>handleClick(index,0)}
                        /> {/* if it's 0, it means we are editing it */}

                        <img className="tool-button"
                        src={isDone ? cross : check} alt="status"
                        onClick={()=>handleClick(index,1)}
                        /> {/* if it's 1, it means we're not editing it */}

                        <img className="tool-button"
                        src={deleteIcon} alt="delete"
                        onClick={()=>handleClick(index,2)}
                        /> {/* if it's 2, it means we're deleting it */}
                    </div>
                </div>
            )
        }
        else return null;
        });
    return  (
        <div className="task-list">
            {createList}
        </div>
    )
}
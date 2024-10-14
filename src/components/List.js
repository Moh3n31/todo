import React from "react";
import Tasks from "./Tasks";

import cross from "../icons/cross.png";
import check from "../icons/check.png";

export default function List (props){

    
    return  (
        <div className="task-bar">
            <div className="list-title">
                <img className="list-icon" src={cross} alt="undone"></img>
                <p>Unfinished</p>
            </div>
            <div className="list-title">
                <img className="list-icon" src={check} alt="undone"></img>
                <p>Finished</p>
            </div>

            <Tasks isDone={false} taskList={props.taskList}/>{/*unfinished*/}
            <Tasks isDone={true}/>{/*finished*/}
        </div>
    )
}
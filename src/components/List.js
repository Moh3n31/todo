import React from "react";
import Tasks from "./Tasks";

export default function List (props){

    
    return  (
        <div className="task-bar">
            <p className="list-title">Unfinished</p>
            <p className="list-title">Finished</p>

            <Tasks isDone={false} taskList={props.taskList}/>{/*unfinished*/}
            <Tasks isDone={true}/>{/*finished*/}
        </div>
    )
}
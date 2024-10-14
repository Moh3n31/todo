import React from "react";
import Tasks from "./Tasks";

export default function List (){
    return  (
        <div className="task-bar">
            <p className="list-title">Unfinished</p>
            <p className="list-title">Finished</p>
            <Tasks/>
            <Tasks/>
        </div>
    )
}
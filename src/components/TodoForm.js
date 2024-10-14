import React from "react";

export default function TodoForm(props){
    function HandleClick(){
        alert("nothing yet");
    }
    return (
        <div className="form">
            <input type="text" className="text-input" placeholder="Write Something..."/>
            <button className="add-button" onClick={()=>{HandleClick()}}>ADD</button>
        </div>
    )
}
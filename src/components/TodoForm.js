import React , {useState} from "react";

export default function TodoForm(props){
    const [inputValue, setInputValue] = useState('');

    function handleChange(event){
        const {value} = event.target;
        setInputValue(value);
    }

    function handleAdd () {
        props.addNewTask(inputValue);
        return setInputValue('');
    }
    
    return (
        <div className="form">
            <input type="text" className="text-input"
            placeholder="Write Something..." value={inputValue}
            onChange={handleChange}/>
            <button className="add-button" onClick={handleAdd}>ADD</button>
        </div>
    )
}
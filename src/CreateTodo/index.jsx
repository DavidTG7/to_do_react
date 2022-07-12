import React, { useState } from "react";
import './CreateTodo.styles.css';

function CreateTodo( { addTodo, setOpenModal } ) {

  const [inputValue, setTodoValue] = useState('');

  const onChange = (event) => {
    const value = event.target.value;
    setTodoValue(value)
  }
  
  const  onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    if (inputValue.length === 0) {
      alert("Input can't be empty!");
    } else {
      event.preventDefault();
      addTodo(inputValue);
      setOpenModal(false);
    }
  }

  return (
    <div className="main-create-box">
      <form onSubmit={onSubmit}>
        <h1 className="h1-createTodo">CREATE NEW TASK</h1>
        <h2 className="h2-createTodo">Your new task:</h2>
        <input value={inputValue} onChange={onChange} className="create-input" placeholder="NewTask" type="text"/>
        <div className="buttons-box">
          <button className="modalButton" type="button" onClick={onCancel}>CANCEL</button>
          <button className="modalButton" type="submit">CREATE</button>
        </div>
      </form>
    </div>
  );
}

export { CreateTodo };
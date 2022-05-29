import React from "react";
import './CreateTodo.styles.css';

function CreateTodo() {

  const handleClick = () => {
    alert("Hello Moto")
  }
  return (
    <React.Fragment>
      <h1>CREATE NEW TASK</h1>
      <div className="create-component">
        <h2 className="h2-createTodo">Your new task:</h2>
        <input className="create-input" placeholder="NewTask" type="text"/>
      </div>
      <div className="create-button-box" onClick={handleClick}>
        <button className="create-button">+</button>
      </div>
    </React.Fragment>
  );
}

export { CreateTodo };
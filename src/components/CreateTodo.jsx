import React from "react";
import './CreateTodo.styles.css';

function CreateTodo() {
  return (
    <React.Fragment>
      <h1>CREATE NEW TASK</h1>
      <div className="create-component">
        <h2 className="h2-createTodo">Your new task:</h2>
        <input className="create-input" placeholder="NewTask" type="text"/>
      </div>
      <div className="create-button-box">
        <button  className="create-button">+</button>
      </div>
    </React.Fragment>
  );
}

export { CreateTodo };
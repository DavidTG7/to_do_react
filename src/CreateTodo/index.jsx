import React from "react";
import './CreateTodo.styles.css';

function CreateTodo() {

  return (
    <div className="main-create-box">
      <h1>CREATE NEW TASK</h1>
      <h2 className="h2-createTodo">Your new task:</h2>
      <input className="create-input" placeholder="NewTask" type="text"/>
    </div>
  );
}

export { CreateTodo };
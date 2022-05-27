import React from "react";
import "./TodoItem.styles.css"
import deleteImg from "../images/delete.png";
import checkedImg from "../images/checked.png";

function TodoItem(props) {
  return (
    <div className="todo-item">
      {/* <input className="check-item" type="checkbox" /> */}
      <img src={checkedImg} className={`check-item ${props.completed && 'check-item-completed'}`} alt="checked-img" />
      <p className={`paragraph-item ${props.completed && 'paragraph-item-completed'}`}>{props.text}</p>
      <img src={deleteImg} className="delete-img" alt="delete-img" />
    </div>
  )
}

export { TodoItem };
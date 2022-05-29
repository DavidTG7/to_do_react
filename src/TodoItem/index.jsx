import React from "react";
import "./TodoItem.styles.css"
import {deleteImg, checkedImg} from "../images"

function TodoItem({onComplete, onDelete, completed, text}) {

  
  return (
    <div className="todo-item">
      <img 
        onClick={onComplete}
        src={checkedImg} 
        className={`check-item ${completed && 'check-item-completed'}`} 
        alt="checked-img" 
      />
      <p className={`paragraph-item ${completed && 'paragraph-item-completed'}`}>{text}</p>
      <img 
        onClick={onDelete}
        src={deleteImg}
        className="delete-img"
        alt="delete-img"
      />
    </div>
  )
}

export { TodoItem };
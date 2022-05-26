import React from "react";

function TodoItem(props) {
  return (
    <li>
      <div>
        <p>{props.text}</p>
      </div>
    </li>
  )
}

export { TodoItem };
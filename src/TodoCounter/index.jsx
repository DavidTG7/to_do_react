import React from "react";

function TodoCounter({ completedTodos, totalTodos}) {
  return (
    <React.Fragment>
      {totalTodos > 0 ? 
        <div>
          <h1>YOUR TASKS</h1>
          <h2>Completed {completedTodos} of {totalTodos}</h2> 
        </div>
        :
        <h1>YOU HAVE NO TASKS</h1>
      }
    </React.Fragment>
  );
}

export { TodoCounter };
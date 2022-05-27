import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodo } from "./components/CreateTodo";
import './styles.css';

const todos = [
  {text: 'Cut onion', completed: false},
  {text: 'Take React course', completed: false},
  {text: 'Make something to eat', completed: true},
];


export default function App() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="left-col">
          <CreateTodo />
        </div>
        
        <div className="right-col">
        
        <TodoCounter />
        <TodoSearch />
        
        <TodoList>
          {todos.map(item => (
            <TodoItem 
              key = {item.text}
              text = {item.text}
              completed = {item.completed}
            />
          ))}
        </TodoList>
        </div>
      </div>
    </React.Fragment>
  );
}


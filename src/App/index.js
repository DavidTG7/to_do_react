import React, { useEffect, useState } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodo } from "../CreateTodo";
import './styles.css';

const defTodos = [
  {text: 'Cut onion', completed: false},
  {text: 'Take React course', completed: false},
  {text: 'Make something to eat', completed: true},
];

function useLocalStorage (itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];
}

export default function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
 

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText);

    });
  }

  const completeTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    todos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  console.log('Render (antes');
  
  useEffect(() => {
    console.log('ese effect')

  });

  console.log('luego del useeffect');

  return (
    <React.Fragment>
      <div className="main">
        <div className="left-col">
          <CreateTodo />
        </div>
        
        <div className="right-col">
        
        <TodoCounter 
          completedTodos = {completedTodos}
          totalTodos = {totalTodos}
        />
        <TodoSearch 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
        
        <TodoList>
          {loa }


          {searchedTodos.map(item => (
            <TodoItem 
              key = {item.text}
              text = {item.text}
              completed = {item.completed}
              onComplete = {() => completeTodo(item.text)}
              onDelete = {() => deleteTodo(item.text)}
            />
          ))}
        </TodoList>
        </div>
      </div>
    </React.Fragment>
  );
}


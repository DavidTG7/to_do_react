import React from "react";
import "./TodoSearch.styles.css";
import searchImg from "../images/search.png";

function TodoSearch({ searchValue, setSearchValue }) {

  const inputChange = (event) => {
    const input = event.target.value;
    console.log(input);
    setSearchValue(input)
  }
  
  return (
    <div className="search-box">
      <img className="search-img" src={searchImg} alt="search-img" />
      <input
        onChange={inputChange}
        value={searchValue}
        className="search-input"
        placeholder="Search..." />
    </div>
  );
}

export { TodoSearch };
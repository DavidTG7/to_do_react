import React from "react";
import "./TodoSearch.styles.css";
import searchImg from "../images/search.png";

function TodoSearch() {
  return (
    <div className="search-box">
      <img className="search-img" src={searchImg} alt="search-img" />
      <input className="search-input" placeholder="Search..." />
    </div>
  );
}

export { TodoSearch };
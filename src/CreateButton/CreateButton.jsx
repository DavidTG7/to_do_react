import React from 'react';
import './CreateButton.css';

export const CreateButton = ( { setOpenModal } ) => {

  const handleClick = () => {
    // alert("Hello Moto")
    setOpenModal(prevState => !prevState);
  }
  
  return(
    <div className="create-button-box" onClick={handleClick}>
      <button className="create-button">+</button>
    </div>
  )
}


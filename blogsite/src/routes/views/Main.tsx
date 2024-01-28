// Home.js


import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from "@mui/material"
import "./../../App.css"

const Main = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to "/other-route" when the button is clicked
    navigate('/vite');
  };


  return (
    <>
      <h1>Main Page</h1>
      <Button onClick={handleButtonClick}>Vite</Button>
    </>
  )
  
  
    
  ;
};

export default Main;
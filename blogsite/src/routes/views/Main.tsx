// Home.js

import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import {Button} from "@mui/material";
// import "./../../assets/Header.css";
import heartLogo from "./../../assets/Heart.png";
import ResponsiveAppBar from './ResponsiveAppbar';

const Main = () => {
  const navigate = useNavigate();
  const [td, setTd] = useState([]);

  useEffect(()=>{
    fetch('http://127.0.0.1:5000/api').then(response => {
      if (response.ok) {
        return response.json()
      }
    }

    ).then(data=>console.log(data))
  },[]
  )
  const handleButtonClick = () => {
    // Navigate to "/other-route" when the button is clicked
    navigate('/vite');
  };


  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
       
      <Button onClick={handleButtonClick}>{td}</Button>
    </> 
  )
  
  
    
  ;
};

export default Main;
// Home.js

import React, {useState, useEffect, SetStateAction} from "react";
import { useNavigate } from 'react-router-dom';
import {Button, ImageList, ImageListItem} from "@mui/material";
// import "./../../assets/Header.css";
import heartLogo from "./../../assets/Heart.png";
import ResponsiveAppBar from './ResponsiveAppbar';
import {imagesdb} from "./Images"
//import ImageGrid from './components/ImageGrid';
//import RandomButton from './components/RandomButton';

const Main = () => {
  
  const navigate = useNavigate();
  const [td, setTd] = useState("");
  const [images, setImages] = useState<Array<string>>([
    `./images/image0.png`,
    `./images/image1.png`,
    `./images/image2.png`,
    `./images/image3.png`,
    `./images/image4.png`,
    `./images/image5.png`,
    `./images/image6.png`,
    `./images/image7.png`,
    `./images/image8.png`,
    `./images/image9.png`,
    `./images/image10.png`,
    `./images/image11.png`,
  ]);
  
  
  const loadRandomImages = () => {
    
    const a = new Set();
    const imageUrls = Array.from({ length: 12 }, () => {
      var randomIndex = -1
      while (randomIndex == -1 || a.has(randomIndex)) {
        randomIndex = Math.floor(Math.random() * 12); // 50 photos
      }
      a.add(randomIndex);
      
      
      const imageUrl = `./images/image${randomIndex}.jpg`;
      
      return imageUrl;
    });
    setImages(imageUrls);
  };
  

  useEffect(()=>{
    fetch('http://127.0.0.1:5000/api').then(response => {
      if (response.ok) {
        return response.json();
      }
    }

    ).then(data => setTd(data.a))
  },[]
  )
  const handleButtonClick = () => {
    // Navigate to "/other-route" when the button is clicked
    //navigate('/vite');
    console.log(12);
    loadRandomImages();
  };

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>

      <ImageList cols={6} gap={8}>
  {images.map((item) => (
    <ImageListItem >
      <img
        
        src={imagesdb[item]}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
      {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {images.map((src, index) => (
        <div key={index} style={{ width: '100%', height: '100px', border: '1px solid #ccc' }}>
          <Image src={src} />
        </div>
      ))}
      
    </div> */}
      <Button onClick={handleButtonClick}>随机照片</Button>
    </> 
  )
  
  
    
  ;
};

export default Main;
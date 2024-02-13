import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Main from './views/Main';
import Diary from './views/Diary';
import ViteTemp from './views/ViteTemp';
import CodingBlog from './views/CodingBlog'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/vite" element={<ViteTemp />} />
      <Route path="/codingblog" element={<CodingBlog />} />
      
    </Routes>
  );
};

export default AppRoutes;
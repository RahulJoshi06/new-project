// Router.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Table from './Table';
import Newform from './Newform';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form" element={<Newform />} />
        <Route path="/table" element={<Table />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import GlobalStyled from './GlobalStyled.js';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}


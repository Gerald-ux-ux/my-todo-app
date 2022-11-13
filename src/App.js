import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Today from './Components/Today';

function App() {

  return (
    <div className="App">
      <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/today" element={<Today />} />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Today from './Components/Today';
import Important from './Components/Important';
import Completed from './Components/Completed';

function App() {

const [response, setResponse] = useState({});


  return (
    <div className="App">
      <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/today" element={<Today setResponse={setResponse}/>} />
            <Route path="/important" element={<Important response={response}  />} />
            <Route path="/completed" element={<Completed />} />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;

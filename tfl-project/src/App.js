import React from 'react';
import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

import AppBackend from './backend/AppBackend';


function App() {
  
  const [num, setNum] = useState(5);

  const handleCick = () => {
    setNum(prev => prev+1);
  };

  

  return (
    <>
    <div className="App">
      <h2>{num}</h2>
      <button type="button" onClick={handleCick}>Click</button>
      <AppBackend />
    </div>
    </>
  );
}

export default App;

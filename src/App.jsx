import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from './LandingPage';
import NavBar from './NavBar';

function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route index path='/' element={<LandingPage/>}/>
      </Routes>
    </Router>
    
    
  );
}

export default App;

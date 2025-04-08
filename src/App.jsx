import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import TrackMateInfo from './TrackMate/views/TrackMateInfo';
import RVInfo from './RV/views/RVinfo';
import BankInfo from './BankApp/views/BankInfor'

function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route index path='/' element={<LandingPage/>}/>
        <Route path='/TrackMateInfo' element={<TrackMateInfo/>}/>
        <Route path='/RVInfo' element={<RVInfo/>}/>
        <Route path='/BankInfo' element={<BankInfo/>}/>
      </Routes>
    </Router>
    
    
  );
}

export default App;

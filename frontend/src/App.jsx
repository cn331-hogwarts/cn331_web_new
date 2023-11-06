import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios'
import Profile from './components/pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About/>}/>
          <Route path='profile' exact element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
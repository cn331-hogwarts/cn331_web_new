import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import Signin from './components/pages/Signin';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About/>}/>
          <Route path='/profile' exact element={<Profile/>}/>
          <Route path='/signin' exact element={<Signin/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
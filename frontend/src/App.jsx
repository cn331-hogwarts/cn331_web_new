import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Profile from './components/pages/Profile'
import Signin from './components/pages/Signin'
import Register from './components/pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ActivatePage from './components/pages/ActivatePage'
import ResetPasswordPage from './components/pages/ResetPasswordPage'
import ResetPasswordPageConfirm from './components/pages/ResetPasswordPageConfirm'
import Predict from './components/pages/Predict'


function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About/>}/>
          <Route path='/profile' exact element={<Profile/>}/>
          <Route path='/predict' exact element={<Predict/>}/>
          <Route path='/signin' exact element={<Signin/>}/>
          <Route path='/register' exact element={<Register/>}/>
          <Route path="/reset-password" exact element={<ResetPasswordPage />} />
          <Route path="/activate/:uid/:token" exact element={<ActivatePage />} />
          <Route path="/password/reset/confirm/:uid/:token" exact element={<ResetPasswordPageConfirm/>} />
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
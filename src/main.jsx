import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './index.css';
import SignUpSeekerPage from './pages/SignUpSeekerPage';
import SignUpOwnerPage from './pages/SignUpOwnerPage';
import LoginPage from './pages/LoginPage';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path='/' element={<LandingPage />} />

        {/* Login */}
        <Route path='/login' element={<LoginPage />} />

        {/* SignUp */}
        <Route path='/register/seeker' element={<SignUpSeekerPage />} />
        <Route path='/register/owner' element={<SignUpOwnerPage />} />

        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

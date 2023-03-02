import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './index.css';
import SignUpSeekerPage from './pages/SignUpSeekerPage';
import SignUpOwnerPage from './pages/SignUpOwnerPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPendingPage from './pages/ForgotPasswordPendingPage';
import ForgotPasswordFormPage from './pages/ForgotPasswordFormPage';
import ForgotPasswordSuccessPage from './pages/ForgotPasswordSuccessPage';
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

        {/* Forgot Password */}
        <Route path='/forgot/pending' element={<ForgotPasswordPendingPage />} />
        <Route path='/forgot/form' element={<ForgotPasswordFormPage />} />
        <Route path='/forgot/success' element={<ForgotPasswordSuccessPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

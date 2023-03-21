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
import EmailVerifPendingPage from './pages/EmailVerifPendingPage';
import EmailVerifSuccessPage from './pages/EmailVerifSuccessPage';
import EmailVerifFailedPage from './pages/EmailVerifFailedPage';
import FindKostPage from './pages/FindKostPage';
import KostDetailPage from './pages/KostDetailPage';
import HistoryKostReservationInfoPage from './pages/HistoryKostReservationInfoPage';
import HistoryKostReservationListPage from './pages/HistoryKostReservationListPage';
import HistoryKostReservationPaymentPage from './pages/HistoryKostReservationPaymentPage';
import HistoryKostConfirmationListPage from './pages/HistoryKostConfirmationListPage';
import HistoryKostCancellationListPage from './pages/HistoryKostCancellationListPage';
import HistoryKostPaymentListPage from './pages/HistoryKostPaymentListPage';
import ProfileWishlistPage from './pages/ProfileWishlistPage';
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

        {/* Email Verification */}
        <Route path='/verif/pending' element={<EmailVerifPendingPage />} />
        <Route path='/verif/success' element={<EmailVerifSuccessPage />} />
        <Route path='/verif/failed' element={<EmailVerifFailedPage />} />

        {/* Find Kost */} 
        <Route path='/find' element={<FindKostPage />} />

        {/* Kost Detail */}
        <Route path='/detail' element={<KostDetailPage />} />

        {/* History */}
        <Route path='/history/reservation-info' element={<HistoryKostReservationInfoPage />} />
        <Route path='/history/reservation-list' element={<HistoryKostReservationListPage />} />
        <Route path='/history/reservation-payment' element={<HistoryKostReservationPaymentPage />} />
        <Route path='/history/confirmation-list' element={<HistoryKostConfirmationListPage />} />
        <Route path='/history/cancellation-list' element={<HistoryKostCancellationListPage />} />
        <Route path='/history/payment-list' element={<HistoryKostPaymentListPage />} />

        {/* Profile & Wishlist */}
        <Route path='/profile/wishlist' element={<ProfileWishlistPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

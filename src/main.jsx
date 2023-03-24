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
import ProfileDetailPage from './pages/ProfileDetailPage';
import ProfileEditPage from './pages/ProfileEditPage';
import ProfileChangePasswordPage from './pages/ProfileChangePasswordPage';
import OwnerDataPage from './pages/OwnerDataPage';
import OwnerKostPage from './pages/OwnerKostPage';
import OwnerKostAboutPage from './pages/OwnerKostAboutPage';
import OwnerKostPhotoPage from './pages/OwnerKostPhotoPage';
import OwnerRoomPage from './pages/OwnerRoomPage';
import OwnerDashboardPropertyPage from './pages/OwnerDashboardPropertyPage';
import OwnerDashboardTransactionPage from './pages/OwnerDashboardTransactionPage';
import OwnerDashboardTransactionDetailPage from './pages/OwnerDashboardTransactionDetailPage';
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
        <Route path='/profile/detail' element={<ProfileDetailPage />} />
        <Route path='/profile/edit' element={<ProfileEditPage />} />
        <Route path='/profile/change-password' element={<ProfileChangePasswordPage />} />

        {/* Owner */}
        <Route path='/owner/data' element={<OwnerDataPage />} />
        <Route path='/owner/kost' element={<OwnerKostPage />} />
        <Route path='/owner/kost-about' element={<OwnerKostAboutPage />} />
        <Route path='/owner/kost-photo' element={<OwnerKostPhotoPage />} />
        <Route path='/owner/room' element={<OwnerRoomPage />} />

        {/* Owner Dashboard */}
        <Route path='/owner/dashboard/property' element={<OwnerDashboardPropertyPage />} />
        <Route path='/owner/dashboard/transaction' element={<OwnerDashboardTransactionPage />} />
        <Route path='/owner/dashboard/transaction/detail' element={<OwnerDashboardTransactionDetailPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import HistoryKostReservationPayment from '../components/History/HistoryKostReservationPayment'
import { useUser } from '../queries/auth.js';

function HistoryKostReservationPaymentPage() {
  const user = useUser();
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned user={user?.data?.data?.data} />
      <HistoryKostReservationPayment />
      <Footer />
    </div>
  );
}

export default HistoryKostReservationPaymentPage
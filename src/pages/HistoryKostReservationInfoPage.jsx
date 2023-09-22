import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import HistoryKostReservationInfo from '../components/History/HistoryKostReservationInfo'
import { useUser } from '../queries/auth.js';

function HistoryKostReservationInfoPage() {
  
  const user = useUser();
  console.log(user?.data)
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned user={user?.data?.data?.data} />
      <HistoryKostReservationInfo />
      <Footer />
    </div>
  );
}

export default HistoryKostReservationInfoPage
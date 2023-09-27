import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import HistoryKostReservationList from '../components/History/HistoryKostReservationList'
import { useUser } from '../queries/auth.js'

function HistoryKostReservationListPage() {
  const user = useUser()
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned user={user?.data?.data?.data} />
      <HistoryKostReservationList />
      <Footer />
    </div>
  );
}

export default HistoryKostReservationListPage
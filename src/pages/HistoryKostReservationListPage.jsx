import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import HistoryKostReservationList from '../components/History/HistoryKostReservationList'

function HistoryKostReservationListPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <HistoryKostReservationList />
      <Footer />
    </div>
  )
}

export default HistoryKostReservationListPage
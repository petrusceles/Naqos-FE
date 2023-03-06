import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import HistoryKostReservationInfo from '../components/History/HistoryKostReservationInfo'

function HistoryKostReservationInfoPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <HistoryKostReservationInfo />
      <Footer />
    </div>
  )
}

export default HistoryKostReservationInfoPage
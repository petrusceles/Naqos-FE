import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import HistoryKostReservationPayment from '../components/History/HistoryReservationPayment'

function HistoryKostReservationPaymentPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <HistoryKostReservationPayment />
      <Footer />
    </div>
  )
}

export default HistoryKostReservationPaymentPage
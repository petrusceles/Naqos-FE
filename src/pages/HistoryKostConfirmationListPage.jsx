import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import HistoryKostConfirmationList from '../components/History/HistoryKostConfirmationList'

function HistoryKostConfirmationListPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <HistoryKostConfirmationList />
      <Footer />
    </div>
  )
}

export default HistoryKostConfirmationListPage
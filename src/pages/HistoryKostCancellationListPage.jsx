import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import HistoryKostCancellationList from '../components/History/HistoryKostCancellationList'
function HistoryKostCancellationListPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <HistoryKostCancellationList />
      <Footer />
    </div>
  )
}

export default HistoryKostCancellationListPage
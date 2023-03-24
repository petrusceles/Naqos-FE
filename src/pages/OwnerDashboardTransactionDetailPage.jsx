import React from 'react'
import OwnerDashboardTransactionDetail from '../components/OwnerDashboard/OwnerDashboardTransactionDetail'
import NavbarOwner from '../components/Navbar/Owner'
function OwnerDashboardTransactionDetailPage() {
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1440px] max-w-[1920px]">
      <NavbarOwner />
      <OwnerDashboardTransactionDetail />
      {/* <Footer /> */}
    </div>
  )
}

export default OwnerDashboardTransactionDetailPage
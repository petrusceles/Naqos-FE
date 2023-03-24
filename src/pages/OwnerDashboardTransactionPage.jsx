import React from 'react'
import OwnerDashboardTransaction from '../components/OwnerDashboard/OwnerDashboardTransaction'
import NavbarOwner from '../components/Navbar/Owner'
function OwnerDashboardTransactionPage() {
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1440px] max-w-[1920px]">
      <NavbarOwner />
      <OwnerDashboardTransaction />
      {/* <Footer /> */}
    </div>
  )
}

export default OwnerDashboardTransactionPage
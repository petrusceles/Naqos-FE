import React from 'react'
import NavbarOwner from '../components/Navbar/Owner'
import OwnerDashboardProfilePassword from '../components/OwnerDashboard/OwnerDashboardProfilePassword'

function OwnerDashboardProfilePasswordPage() {
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1440px] max-w-[1920px]">
      <NavbarOwner />
      <OwnerDashboardProfilePassword />
    </div>
  )
}

export default OwnerDashboardProfilePasswordPage
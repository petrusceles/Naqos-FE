import React from 'react'
import NavbarOwner from '../components/Navbar/Owner'
import OwnerDashboardProfileEdit from '../components/OwnerDashboard/OwnerDashboardProfileEdit'

function OwnerDashboardProfileEditPage() {
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1440px] max-w-[1920px]">
      <NavbarOwner />
      <OwnerDashboardProfileEdit />
    </div>
  )
}

export default OwnerDashboardProfileEditPage
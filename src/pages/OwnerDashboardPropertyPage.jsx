import React from 'react'
import NavbarOwner from '../components/Navbar/Owner'
import OwnerDashboardProperty from '../components/OwnerDashboard/OwnerDashboardProperty'

import Footer from '../components/Footer'
function OwnerDashboardPropertyPage() {
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1440px] max-w-[1920px]">
      <NavbarOwner />
      <OwnerDashboardProperty />
      {/* <Footer /> */}
    </div>
  )
}

export default OwnerDashboardPropertyPage
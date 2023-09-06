import React from 'react'
import NavbarOwner from '../components/Navbar/Owner'
import OwnerDashboardProfilePassword from '../components/OwnerDashboard/OwnerDashboardProfilePassword'
import { useUser } from '../queries/auth.js'

function OwnerDashboardProfilePasswordPage() {
  const user = useUser(true)
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1440px] max-w-[1920px]">
      <NavbarOwner user={user?.data?.data?.data}/>
      <OwnerDashboardProfilePassword />
    </div>
  )
}

export default OwnerDashboardProfilePasswordPage
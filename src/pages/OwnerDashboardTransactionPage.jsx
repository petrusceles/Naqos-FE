import React from 'react'
import OwnerDashboardTransaction from '../components/OwnerDashboard/OwnerDashboardTransaction'
import NavbarOwner from '../components/Navbar/Owner'
import { useUser } from '../queries/auth.js'
function OwnerDashboardTransactionPage() {
  const user = useUser()
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1440px] max-w-[1920px]">
      <NavbarOwner user={user?.data?.data?.data} />
      <OwnerDashboardTransaction />
      {/* <Footer /> */}
    </div>
  )
}

export default OwnerDashboardTransactionPage
import React from 'react'
import NavbarOwner from '../components/Navbar/Owner'
import OwnerDashboardProperty from '../components/OwnerDashboard/OwnerDashboardProperty'
import { useUser } from '../queries/auth.js'
function OwnerDashboardPropertyPage() {
  const user = useUser()
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1280px] max-w-[1920px]">
      <NavbarOwner user={user?.data?.data?.data} />
      <OwnerDashboardProperty user={user?.data?.data?.data} />
      {/* <Footer /> */}
    </div>
  );
}

export default OwnerDashboardPropertyPage
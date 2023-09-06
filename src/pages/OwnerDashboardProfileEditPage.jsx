import React from 'react'
import NavbarOwner from '../components/Navbar/Owner'
import OwnerDashboardProfileEdit from '../components/OwnerDashboard/OwnerDashboardProfileEdit'
import { useUser } from '../queries/auth.js'
function OwnerDashboardProfileEditPage() {
  const user = useUser(true);
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1440px] max-w-[1920px]">
      <NavbarOwner user={user?.data?.data?.data}/>
      <OwnerDashboardProfileEdit user={user} />
    </div>
  );
}

export default OwnerDashboardProfileEditPage
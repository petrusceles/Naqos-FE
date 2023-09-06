import React from "react";
import NavbarOwner from "../components/Navbar/Owner";
import OwnerDashboardProfile from "../components/OwnerDashboard/OwnerDashboardProfile";
import { useUser } from "../queries/auth.js";
function OwnerDashboardProfilePage() {
  const user = useUser(true);
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1440px] max-w-[1920px]">
      <NavbarOwner user={user?.data?.data?.data}/>
      <OwnerDashboardProfile />
    </div>
  );
}

export default OwnerDashboardProfilePage;

import React from "react";
import NavbarOwner from "../components/Navbar/Owner";
import OwnerDashboardProfile from "../components/OwnerDashboard/OwnerDashboardProfile";

function OwnerDashboardProfilePage() {
  return (
    <div className="flex flex-col h-screen justify-between min-w-[1440px] max-w-[1920px]">
      <NavbarOwner />
      <OwnerDashboardProfile />
    </div>
  );
}

export default OwnerDashboardProfilePage;

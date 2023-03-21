import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import Footer from "../components/Footer";
import ProfileDetail from "../components/Profile/ProfileDetail";

function ProfileDetailPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <ProfileDetail />
      <Footer />
    </div>
  );
}

export default ProfileDetailPage;

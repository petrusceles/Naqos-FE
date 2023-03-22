import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import Footer from "../components/Footer";
import ProfileChangePassword from "../components/Profile/ProfileChangePassword";

function ProfileChangePasswordPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <ProfileChangePassword />
      <Footer />
    </div>
  );
}

export default ProfileChangePasswordPage;

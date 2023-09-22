import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import Footer from "../components/Footer";
import ProfileDetail from "../components/Profile/ProfileDetail";
import { useUser } from "../queries/auth.js";
import NavbarUnsigned from "../components/Navbar/Unsigned/index.jsx";

function ProfileDetailPage() {
  const user = useUser()
  return (
    <div className="flex flex-col h-screen justify-between">
      {user.isSuccess ? (
        <NavbarSigned user={user?.data?.data?.data} />
      ) : (
        <NavbarUnsigned />
      )}
      <ProfileDetail />
      <Footer />
    </div>
  );
}

export default ProfileDetailPage;

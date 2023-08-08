import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import FindKost from "../components/FindKost";
import Footer from "../components/Footer";
import NavbarUnsigned from "../components/Navbar/Unsigned/index.jsx";
import { useUser } from "../queries/auth.js";
function FindKostPage() {
  const user = useUser();
  return (
    <div className="flex flex-col h-screen justify-between">
      {user.isSuccess ? (
        <NavbarSigned user={user.data.data.data} />
      ) : (
        <NavbarUnsigned />
      )}
      <FindKost />
      <Footer />
    </div>
  );
}

export default FindKostPage;

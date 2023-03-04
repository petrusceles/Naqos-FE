import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import FindKost from "../components/FindKost";
import Footer from "../components/Footer";
function FindKostPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <FindKost />
      <Footer />
    </div>
  );
}

export default FindKostPage;
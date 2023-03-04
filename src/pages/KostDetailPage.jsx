import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import Footer from "../components/Footer";
import KostDetail from "../components/KostDetail";
function KostDetailPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <KostDetail />
      <Footer />
    </div>
  );
}

export default KostDetailPage;

import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import Footer from "../components/Footer";
import HistoryKostPaymentList from "../components/History/HistoryKostPaymentList";

function HistoryKostPaymentListPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <HistoryKostPaymentList />
      <Footer />
    </div>
  );
}

export default HistoryKostPaymentListPage;

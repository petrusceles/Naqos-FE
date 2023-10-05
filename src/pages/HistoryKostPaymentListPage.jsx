import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import Footer from "../components/Footer";
import HistoryKostPaymentList from "../components/History/HistoryKostPaymentList";
import { useUser } from "../queries/auth.js";

function HistoryKostPaymentListPage() {
  const user = useUser();
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned user={user?.data?.data?.data} />
      <HistoryKostPaymentList />
      <Footer />
    </div>
  );
}

export default HistoryKostPaymentListPage;

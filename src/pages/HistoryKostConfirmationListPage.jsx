import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import Footer from "../components/Footer";
import HistoryKostConfirmationList from "../components/History/HistoryKostConfirmationList";
import { useUser } from "../queries/auth.js";

function HistoryKostConfirmationListPage() {
  const user = useUser();
  console.log(user?.data);
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned user={user?.data?.data?.data} />
      <HistoryKostConfirmationList />
      <Footer />
    </div>
  );
}

export default HistoryKostConfirmationListPage;

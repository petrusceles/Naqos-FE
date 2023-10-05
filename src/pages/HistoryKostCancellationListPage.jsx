import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import HistoryKostCancellationList from '../components/History/HistoryKostCancellationList'
import { useUser } from '../queries/auth.js';
function HistoryKostCancellationListPage() {
  const user = useUser();
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned user={user?.data?.data?.data} />
      <HistoryKostCancellationList />
      <Footer />
    </div>
  );
}

export default HistoryKostCancellationListPage
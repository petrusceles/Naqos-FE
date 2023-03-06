import React from "react";
import Footer from "../components/Footer";
import EmailVerifSuccess from "../components/EmailVerif/EmailVerifSuccess";

function EmailVerifSuccessPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <EmailVerifSuccess />
      <Footer />
    </div>
  );
}

export default EmailVerifSuccessPage;

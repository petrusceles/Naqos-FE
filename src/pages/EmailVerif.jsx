import React from "react";
import Footer from "../components/Footer";
import EmailVerif from "../components/EmailVerif/EmailVerifProcess";

function EmailVerifPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <EmailVerif />
      <Footer />
    </div>
  );
}

export default EmailVerifPage;

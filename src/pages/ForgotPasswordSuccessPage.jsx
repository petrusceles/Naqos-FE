import React from "react";
import ForgotPasswordSuccess from "../components/ForgotPassword/ForgotPasswordSuccess";
import Footer from "../components/Footer";
function ForgotPasswordSuccessPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <ForgotPasswordSuccess />
      <Footer />
    </div>
  );
}

export default ForgotPasswordSuccessPage;

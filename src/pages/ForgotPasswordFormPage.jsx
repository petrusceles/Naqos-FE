import React from "react";
import ForgotPasswordForm from "../components/ForgotPassword/ForgotPasswordForm";
import Footer from "../components/Footer";
function ForgotPasswordFormPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <ForgotPasswordForm />
      <Footer />
    </div>
  );
}

export default ForgotPasswordFormPage;

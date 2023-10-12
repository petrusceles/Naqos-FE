import React from "react";
import Login from "../components/Login";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
function LoginPage() {
  return (
    <div className="grid content-between h-[100vh]">
      <Login />
      <Footer />
    </div>
  );
}

export default LoginPage;

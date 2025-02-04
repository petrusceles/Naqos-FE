import React, { useEffect } from "react";
import EmailVerifSuccessIcon from "../../../assets/email-verif-success.svg";
import Logo from "../../../assets/naqos-logo-tag.png";
import { Link } from "react-router-dom";
import { useLogout } from "../../../queries/auth";
function EmailVerifSuccess() {
  const logout = useLogout();

  useEffect(() => {
    logout.mutate();
  }, []);
  return (
    <div className="container grid grid-cols-1 gap-24">
      <div className="w-full flex justify-center lg:pt-20 pt-10">
        <img className="lg:w-[360px] w-[200px]" src={Logo} alt="logo" />
      </div>
      <div className="w-full flex flex-wrap gap-2 lg:gap-5 justify-center pb-28">
        <div className="w-full flex justify-center">
          <img
            className="h-[100px] lg:h-[164px] translate-x-[9%]"
            src={EmailVerifSuccessIcon}
          />
        </div>
        <h1 className="w-full text-center text-lg lg:text-3xl font-bold lg:font-semibold pt-6">
          Verifikasi berhasil!
        </h1>
        <div className="w-full flex justify-center">
          <p className="lg:w-[44%] w-[80%] mx-auto lg:text-xl text-center font-medium">
            Selamat! Akunmu sudah berhasil terverifikasi. Klik tombol di bawah
            untuk masuk ke akun kamu
          </p>
        </div>
        <Link
          to={"/login"}
          className="mt-5 w-[90%] lg:w-1/2 rounded-full bg-[#0A008A] capitalize text-center hover:bg-[#E1E0FF] hover:text-[#4D50C5] text-white py-3 lg:text-xl lg:font-semibold"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default EmailVerifSuccess;

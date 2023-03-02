import React from "react";
import EmailVerifPendingIcon from "../../../assets/email-verif-pending.png";
import Logo from "../../../assets/naqos-logo-tag.png";
function EmailVerifPending() {
  return (
    <div className="flex flex-wrap w-full">
      <div className="w-full flex justify-center lg:pt-20 pt-10">
        <img className="lg:w-[360px] w-[200px]" src={Logo} alt="logo" />
      </div>
      <div className="w-full flex flex-wrap justify-center py-36 gap-2">
        <div className="w-full flex justify-center pb-8">
          <img className="lg:h-[176px] h-[128px]" src={EmailVerifPendingIcon} />
        </div>
        <h1 className="w-full text-center text-xl lg:text-3xl font-semibold">
          Cek email kamu
        </h1>
        <p className="lg:w-1/2 w-[85%] mx-auto  lg:text-xl text-center font-medium">
          Link verifikasi akun telah kami kirimkan ke alamat email kamu, segera
          lakukan verifikasi untuk mendapat akses login
        </p>
      </div>
    </div>
  );
}

export default EmailVerifPending;

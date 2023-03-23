import React from "react";
import LogoutIcon from "../../../assets/logout-icon.svg";
import ChangePasswordIcon from "../../../assets/change-password-icon.svg";
function ChangePasswordSuccessModal() {
  return (
    <>
    <div className="fixed h-full w-full  z-50 bg-slate-400/50">
    </div>
      <div className="absolute z-50 w-96 h-72 bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-xl shadow-lg grid grid-cols-1 justify-center justify-items-center content-center gap-3 lg:scale-150">
        <img src={ChangePasswordIcon} className="w-16" />
        <h3 className="text-sm font-semibold">Berhasil reset password!</h3>
        <p className="text-xs text-center px-14">
          Sekarang kamu bisa pakai password baru untuk login ke akunmu
        </p>
        <button className="p-1 px-2 text-xs font-semibold rounded-full w-3/4 border-primary border-2 bg-primary text-white">
          Kembali ke Profil
        </button>
      </div>
    </>
  );
}

export default ChangePasswordSuccessModal;

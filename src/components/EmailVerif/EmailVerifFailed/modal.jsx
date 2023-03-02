import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
function EmailVerifFailedModal({ setIsModalShow }) {
  return (
    <>
      <div className="fixed w-full h-full bg-transparent bg-slate-800 opacity-50 z-[999]"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] grid grid-cols-1 bg-white drop-shadow-xl py-5 px-8 rounded-xl justify-center min-w-[400px] gap-6 lg:gap-8 items-center content-center max-w-xl lg:p-12">
        <div className="grid-cols-1 grid gap-2">
          <div className="flex justify-end">
            <XMarkIcon
              className="w-7 lg:w-10 cursor-pointer"
              onClick={() => setIsModalShow(false)}
            />
          </div>
          <h1 className="font-semibold text-xl lg:text-3xl">
            Verifikasi Ulang
          </h1>
          <p className="text-sm text-justify font-medium lg:text-base">
            Masukkan alamat email yang terdaftar di Naqos. Kami akan mengirim
            link untuk melakukan verifikasi ulang.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h2 className="font-semibold text-lg lg:text-2xl">Email</h2>
          <input
            className="rounded-full border-2 py-2 lg:py-3 px-3 text-sm lg:text-base lg:px-6"
            placeholder="Ketikkan alamat email"
          />
        </div>
        <button className="bg-primary w-full rounded-full text-white p-2 text-sm font-semibold lg:p-4 lg:text-base hover:bg-secondary hover:text-primary">
          Kirim Link
        </button>
      </div>
    </>
  );
}

export default EmailVerifFailedModal;

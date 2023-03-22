import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import ChangePasswordSuccessModal from "./logoutModal";
function ProfileChangePassword() {
  const [isOldPasswordShow, setIsOldPasswordShow] = useState(false);
  const [isNewPasswordShow, setIsNewPasswordShow] = useState(false);
  return (
    <>
      <ChangePasswordSuccessModal />
      <div className="pt-24 pb-8 lg:pt-36 lg:pb-16">
        <div className="container flex flex-wrap px-8 gap-14">
          <div className="text-xs font-medium breadcrumbs flex items-center w-full lg:text-base">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Profil</a>
              </li>
              <li className="text-primary font-semibold">Ganti Password</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 w-full gap-6">
            <h2 className="font-semibold lg:text-lg">Ganti Password</h2>
            <div className="grid grid-cols-1 text-sm font-medium gap-2 px-6 lg:gap-3 w-full lg:w-1/2 lg:max-w-xl lg:pl-9">
              <p>Password</p>
              <div className="w-full relative ">
                <input
                  className="px-3 py-2 rounded-full border w-full"
                  placeholder="Masukkan password lama"
                  type={isOldPasswordShow ? "text" : "password"}
                />
                {isOldPasswordShow ? (
                  <EyeIcon
                    className="absolute w-5 right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setIsOldPasswordShow((prev) => !prev);
                    }}
                  />
                ) : (
                  <EyeSlashIcon
                    className="absolute w-5 right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setIsOldPasswordShow((prev) => !prev);
                    }}
                  />
                )}
              </div>
              <p>Buat Password Baru</p>
              <div className="w-full relative ">
                <input
                  className="px-3 py-2 rounded-full border w-full"
                  placeholder="Minimal 6 karakter"
                  type={isNewPasswordShow ? "text" : "password"}
                />
                {isNewPasswordShow ? (
                  <EyeIcon
                    className="absolute w-5 right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setIsNewPasswordShow((prev) => !prev);
                    }}
                  />
                ) : (
                  <EyeSlashIcon
                    className="absolute w-5 right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setIsNewPasswordShow((prev) => !prev);
                    }}
                  />
                )}
              </div>
              <button className="bg-primary px-3 py-2 text-white rounded-full my-5">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileChangePassword;

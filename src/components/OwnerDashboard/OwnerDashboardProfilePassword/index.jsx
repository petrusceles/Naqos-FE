import React, { useState } from "react";
import OwnerDashboardSidebar from "../ownerDashboardSidebar";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
function OwnerDashboardProfilePassword() {
  const [isOldPasswordHidden, setIsOldPasswordHidden] = useState(true);
  const [isNewPasswordHidden, setIsNewPasswordHidden] = useState(true);
  return (
    <div className="h-full w-full grid grid-cols-4">
      <OwnerDashboardSidebar />
      <div className="col-span-3 grid pt-44  px-14 content-start gap-6 pb-20">
        <h3 className="text-2xl font-semibold">Ganti Password</h3>
        <div className="grid gap-3 px-14">
          <label for="oldPassword" className="font-semibold ">
            Password
          </label>
          <div className="w-fit relative">
            <input
              placeholder="Masukkan password lama "
              id="oldPassword"
              type={isNewPasswordHidden ? "password":"text"}
              className="border-2 pl-5 pr-12 py-2 rounded-full w-[500px]"
            />
            {isOldPasswordHidden ? (
              <EyeSlashIcon className="absolute w-6 right-0 -translate-y-1/2 top-1/2 mr-5" />
            ) : (
              <EyeIcon className="absolute w-6 right-0 -translate-y-1/2 top-1/2 mr-5" />
            )}
          </div>
          <label for="newPassword" className="font-semibold mt-1">
            Buat Password Baru
          </label>
          <div className="w-fit relative">
            <input
              placeholder="Minimal 6 karakter "
              id="newPassword"
              type={isOldPasswordHidden ? "password":"text"}
              className="border-2 px-5 py-2 rounded-full w-[500px]"
            />
            {isNewPasswordHidden ? (
              <EyeSlashIcon className="absolute w-6 right-0 -translate-y-1/2 top-1/2 mr-5" />
            ) : (
              <EyeIcon className="absolute w-6 right-0 -translate-y-1/2 top-1/2 mr-5" />
            )}
          </div>
          <button className="w-[500px] bg-primary rounded-full text-white text-sm font-semibold py-2 my-5">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboardProfilePassword;

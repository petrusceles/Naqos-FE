import React from "react";
import OwnerDashboardSidebar from "../ownerDashboardSidebar";

function OwnerDashboardProfile() {
  return (
    <div className="h-full w-full grid grid-cols-4">
      <OwnerDashboardSidebar />
      <div className="col-span-3 grid pt-44 justify-items-center px-14 content-start gap-6 pb-20">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img
            src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677912434/NaqosV2/Owner%20Profile/photo3_z50agx.png"
            className="object-cover"
          />
        </div>
        <div className="text-2xl font-semibold text-center ">Bu Kos</div>
        <div className="grid w-full place-self-stretch bg-secondary rounded-2xl py-8 px-8">
          <div className="font-semibold w-full flex justify-between text-xl">
            <p>Informasi Akun</p>
            <div className="text-slate-500">Edit Profil</div>
          </div>
          <div className="grid px-9 gap-5 py-9">
            <div className="flex border-b-2 border-primary pb-3">
              <p className="w-1/4 font-[600]">Nama Lengkap</p>
              <p className="grow font-medium">Bukos</p>
            </div>
            <div className="flex border-b-2 border-primary pb-3">
              <p className="w-1/4 font-[600]">Nomor HP</p>
              <p className="grow font-medium">+6281234567891</p>
            </div>
            <div className="flex border-b-2 border-primary pb-3">
              <p className="w-1/4 font-[600]">Email</p>
              <p className="grow font-medium">bukos@mail.com</p>
            </div>
          </div>
        </div>
        <div className="grid w-full place-self-stretch bg-secondary rounded-2xl py-8 px-8 my-4">
          <div className="font-semibold w-full flex justify-between text-xl">
            <p>Login & Security</p>
            <div className="text-slate-500">Ganti Password</div>
          </div>
          <div className="grid px-9 gap-5 py-9">
            <div className="flex border-b-2 border-primary pb-3">
              <p className="w-1/4 font-[600]">Password</p>
              <p className="grow font-medium">Bukos</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end px-7 text-xl font-bold text-red-600">Logout</div>
      </div>
    </div>
  );
}

export default OwnerDashboardProfile;

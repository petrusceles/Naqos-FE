import React from "react";
import OwnerDashboardSidebar from "../ownerDashboardSidebar";
import { CameraIcon } from "@heroicons/react/24/solid";
function OwnerDashboardProfileEdit() {
  return (
    <div className="h-full w-full grid grid-cols-4">
      <OwnerDashboardSidebar />
      <div className="col-span-3 grid pt-44 justify-items-center px-14 content-start gap-6 pb-20">
        <div className="relative">
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677912434/NaqosV2/Owner%20Profile/photo3_z50agx.png"
              className="object-cover"
            />
          </div>
          <div className="bg-slate-400 w-fit rounded-full absolute p-2 right-0 top-[80%] -translate-y-1/2">
            <CameraIcon className=" w-5 text-white" />
          </div>
        </div>
        <div className="text-2xl font-semibold">Ibu Kos</div>
        <div className="grid font-semibold w-full gap-8 px-24">
          <div className="text-2xl">Informasi Akun</div>
          <div className="grid text-lg px-8 gap-6 font-medium">
            <div className="flex items-center">
              <label for="namaLengkap" className="w-1/4">Nama Lengkap</label>
              <input type="text" id="namaLengkap" className="grow border-2 px-4 py-2 rounded-full font-normal" />
            </div>
            <div className="flex items-center">
              <label for="nomorHP" className="w-1/4">Nomor HP</label>
              <input type="text" id="nomorHP" className="grow border-2 px-4 py-2 rounded-full font-normal"  />
            </div>
            <div className="flex items-center">
              <label for="email" className="w-1/4">Email</label>
              <input type="text" id="email" className="grow border-2 px-4 py-2 rounded-full font-normal"  />
            </div>
            <button className="grow bg-primary text-white rounded-full py-2 ml-[25%]">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboardProfileEdit;

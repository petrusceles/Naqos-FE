import React from "react";
import { CameraIcon } from "@heroicons/react/24/solid";
function ProfileEdit() {
  return (
    <div className="pt-24 pb-8 lg:pt-36 lg:pb-16">
      <div className="container flex flex-wrap px-8 gap-4">
        <div className="text-xs font-medium breadcrumbs flex items-center w-full lg:text-base">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Profil</a>
            </li>
            <li className="text-primary font-semibold">Edit Profil</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 w-full gap-3 lg:grid-cols-3">

          <div className="items-center grid grid-cols-1 justify-items-center gap-2">
            <div className="relative self-end">
              <div className="overflow-hidden h-24 w-24 rounded-full self-end lg:h-40 lg:w-40">
                <img src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677912434/NaqosV2/Owner%20Profile/photo3_z50agx.png" />
              </div>
              <div className="absolute w-6 h-6 rounded-full bg-gray-400 z-10 right-[5%] top-[75%] flex items-center justify-center lg:h-9 lg:w-9">
                <CameraIcon className="text-white w-3 lg:w-4" />
              </div>
            </div>
            <p className="text-center text-xs font-bold lg:text-xl">Astolfo</p>
          </div>

          <div className="flex flex-wrap px-4 col-span-2">
            <div className="flex justify-between w-full text-xs font-semibold lg:text-lg">
              <h1>Informasi Akun</h1>
            </div>
            <div className="flex flex-wrap w-full gap-4 px-3 pt-4 pb-7 text-[11px] lg:text-base">
              <div className="w-full flex items-center">
                <p className="w-[40%] font-medium">Nama Lengkap</p>
                <input className=" w-full rounded-full py-1 px-2 border align-middle lg:py-2 lg:px-4"/>
              </div>
              <div className="w-full flex items-center">
                <p className="w-[40%] font-medium">No HP</p>
                <input className=" w-full rounded-full py-1 px-2 border align-middl lg:py-2 lg:px-4"/>
              </div>
              <div className="w-full flex items-center">
                <p className="w-[40%] font-medium">Email</p>
                <input className=" w-full rounded-full py-1 px-2 border align-middle lg:py-2 lg:px-4"/>
              </div>
              <div className="w-full flex items-center justify-end pt-3">
                <button className="w-[71%] bg-primary rounded-full py-2 px-2 text-white font-semibold">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;

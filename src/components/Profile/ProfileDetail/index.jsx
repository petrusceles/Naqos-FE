import React from "react";
import { CameraIcon } from "@heroicons/react/24/solid";
function ProfileDetail() {
  return (
    <div className="pt-24 pb-8 lg:pt-36 lg:pb-16">
      <div className="container flex flex-wrap px-8 gap-4">
        <div className="text-xs font-medium breadcrumbs flex items-center w-full lg:text-base">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li className="text-primary font-semibold">Profil</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 w-full gap-3">
          <div className="items-center grid grid-cols-1 justify-items-center gap-2">
            <div className="relative self-end">
              <div className="overflow-hidden h-24 w-24 rounded-full self-end">
                <img src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677912434/NaqosV2/Owner%20Profile/photo3_z50agx.png" />
              </div>
              <div className="absolute w-6 h-6 rounded-full bg-gray-400 z-10 right-[5%] top-[75%] flex items-center justify-center">
                <CameraIcon className="text-white w-3" />
              </div>
            </div>
            <p className="text-center text-xs font-bold ">Astolfo</p>
          </div>

          <div className=" bg-secondary rounded-md flex flex-wrap pt-3 px-4">
            <div className="flex justify-between w-full text-xs font-semibold">
              <h1>Informasi Akun</h1>
              <div>Edit Profil</div>
            </div>
            <div className="flex flex-wrap w-full gap-2 px-3 pt-4 pb-7">
              <div className="w-full flex text-[11px] border-b border-primary pb-1">
                <p className="w-3/4 font-medium">Nama Lengkap</p>
                <p className="w-full">Astolfo</p>
              </div>
              <div className="w-full flex text-[11px] border-b border-primary pb-1">
                <p className="w-3/4 font-medium">No HP</p>
                <p className="w-full">+6281234567891</p>
              </div>
              <div className="w-full flex text-[11px] border-b border-primary pb-1">
                <p className="w-3/4 font-medium">Email</p>
                <p className="w-full">astolf0123@mail.com</p>
              </div>
            </div>
          </div>

          <div className=" bg-secondary rounded-md flex flex-wrap pt-3 px-4">
            <div className="flex justify-between w-full text-xs font-semibold">
              <h1>Login & Security</h1>
              <div>Edit Password</div>
            </div>
            <div className="flex flex-wrap w-full gap-2 px-3 pt-4 pb-7">
              <div className="w-full flex text-[11px] border-b border-primary pb-1">
                <p className="w-3/4 font-medium">Password</p>
                <p className="w-full">************</p>
              </div>
            </div>
          </div>

          <div className="w-full text-end text-xs font-semibold px-4 text-red-600">Log out</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;

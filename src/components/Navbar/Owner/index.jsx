import React, { useState } from "react";
import logoNaqos from "../../../assets/naqos-logo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import Notification from "../../Notification";
function NavbarOwner(props) {
  console.log(props?.user)
  const [menu, setMenu] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <div className=" shadow-md bg-white fixed w-full z-40 min-h-[100px] items-center flex">
      <div className="flex flex-wrap py-4 px-5 justify-between items-center lg:px-0 lg:flex-nowrap lg:py-0 w-full">
        <div className="lg:w-1/4 w-1/2 flex justify-center items-center">
          <img
            src={logoNaqos}
            className="max-w-[120px] lg:max-w-[210px] w-full"
          />
        </div>
        <div className="w-1/2 flex justify-end gap-5 lg:w-0">
          <BellIcon
            className="max-w-[25px] text-slate-800 cursor-pointer lg:hidden"
            onClick={() => setNotification((prev) => !prev)}
          />
          <Notification notificationState={{ notification, setNotification }} />
          <Bars3Icon
            className="max-w-[30px] text-slate-800 cursor-pointer lg:hidden"
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          />
        </div>
        <div
          className={`absolute bg-white drop-shadow-md inset-y-0 w-1/2 right-0 px-5 h-[100vh] py-5 text-sm font-semibold transition-all duration-200 ease-in-out max-w-xs ${
            menu ? " translate-x-[0%]" : " translate-x-[100%]"
          } lg:static lg:drop-shadow-none lg:translate-x-[0%] lg:bg-inherit lg:text-base lg:justify-end lg:max-w-none lg:block lg:h-fit z-50 lg:w-3/4 lg:px-28`}
        >
          <div className="flex flex-wrap items-center justify-end mb-5 lg:mb-0  lg:hidden">
            {/* <h1 className="text-slate-800 text-lg">Menu</h1> */}
            <XMarkIcon
              className="max-w-[30px] cursor-pointer"
              onClick={() => {
                setMenu((prev) => !prev);
              }}
            />
          </div>
          <div className="flex flex-wrap w-full gap-6 lg:justify-end lg:gap-24 text-slate-800 lg:flex-nowrap lg:items-center">
            <div className="flex bg-slate-100 p-2 w-full rounded-xl  items-center gap-3 lg:w-fit lg:order-last ">
              <div className="rounded-full max-w-[40px] overflow-hidden">
                <img
                  src={props?.user?.avatar_url}
                  className="object-cover"
                />
              </div>
              <p className="truncate lg:hidden">{props?.user?.name}</p>
            </div>
            <div className="w-full font-medium text-slate-800 lg:w-fit">
              Pusat Bantuan
            </div>
            <div
              className="w-full font-medium text-slate-800 lg:w-fit hidden lg:block cursor-pointer"
              onClick={() => setNotification((prev) => !prev)}
            >
              Notifikasi
            </div>
            <div className="w-full h-1 font-medium bg-slate-100 rounded-full lg:hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarOwner;

import React, { useState } from "react";
import logoNaqos from "../../../assets/naqos-logo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon} from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import Notification from "../../Notification";
import { useUser } from "../../../queries/auth.js";
function NavbarSigned() {
  const user = useUser()
  const [menu, setMenu] = useState(false);
  const [notification, setNotification] = useState(false)
  return (
    <div className=" shadow-md bg-white fixed w-full z-40">
      <div className="flex flex-wrap py-4 px-5 justify-between items-center lg:px-4 lg:flex-nowrap lg:py-0 w-full container  ">
        <img
          src={logoNaqos}
          className="max-w-[120px] lg:max-w-[200px] w-1/3 "
        />
        <div className="w-1/2 flex justify-end gap-5  ">
          <BellIcon
            className="max-w-[25px] text-slate-800 cursor-pointer lg:hidden"
            onClick={() => setNotification((prev) => !prev)}
          />
          <Notification notificationState = {{notification, setNotification}}/>
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
          } lg:static lg:drop-shadow-none lg:translate-x-[0%] lg:px-0 lg:bg-inherit lg:text-base lg:justify-end lg:max-w-lg lg:block lg:h-fit z-50`}
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
          <div className="flex flex-wrap w-full gap-6 lg:justify-items-end lg:gap-7 text-slate-800 lg:grid lg:grid-cols-4 lg:items-center ">
            <div className="flex bg-slate-100 p-2 w-full rounded-xl  items-center gap-3 lg:w-fit lg:order-last ">
              <div className="rounded-full max-w-[40px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1675255775/locxgwxeh00q8nvx3tr5.png"
                  className="object-cover"
                />
              </div>
              <p className="truncate lg:hidden">{user.data.data.data.name}</p>
            </div>
            <div className="w-full font-medium text-slate-800 lg:w-fit">Wishlist</div>
            <div className="w-full font-medium text-slate-800 lg:w-fit">Riwayat</div>
            <div className="w-full font-medium text-slate-800 lg:w-fit hidden lg:block cursor-pointer" 
            onClick={() => setNotification((prev) => !prev)}>Notifikasi</div>
            <div className="w-full h-1 font-medium bg-slate-100 rounded-full lg:hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarSigned;

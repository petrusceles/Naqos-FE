import React from "react";
import NaqosWhiteLogo from "../../assets/naqos-white-icon.svg";
import { NavLink } from "react-router-dom";

function OwnerInputSidebar() {
  return (
    <div className="w-1/4 bg-primary grid grid-cols-1 justify-items-center content-start gap-14 py-16">
      <img src={NaqosWhiteLogo} className="w-80" />
      <ul className="w-full px-5 grid grid-cols-1 gap-y-12 owner-input-navlink">
        <li>
          <NavLink to={"/owner/data"} className={({isActive}) => (`flex w-full gap-x-5 items-center origin-left ${isActive && "scale-110"}`)}>
            {({ isActive }) => (
              <>
                <div className="w-1/6 justify-end flex ">
                  <div className={`bg-white w-8 h-8 rounded-full flex justify-center items-center font-bold text-primary ${!isActive && "opacity-50"}`}>
                    1
                  </div>
                </div>
                <p className={`w-5/6 text-2xl font-semibold text-white ${!isActive && "opacity-50"}`}>Data Pemilik</p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/owner/kost"} className={({isActive}) => (`flex w-full gap-x-5 items-center origin-left ${isActive && "scale-110"}`)}>
            {({ isActive }) => (
              <>
                <div className="w-1/6 justify-end flex ">
                  <div className={`bg-white w-8 h-8 rounded-full flex justify-center items-center font-bold text-primary ${!isActive && "opacity-50"}`}>
                    2
                  </div>
                </div>
                <p className={`w-5/6 text-2xl font-semibold text-white ${!isActive && "opacity-50"}`}>Data Kos</p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/owner/kost-about"} className={({isActive}) => (`flex w-full gap-x-5 items-center origin-left ${isActive && "scale-110"}`)}>
            {({ isActive }) => (
              <>
                <div className="w-1/6 justify-end flex ">
                  <div className={`bg-white w-8 h-8 rounded-full flex justify-center items-center font-bold text-primary ${!isActive && "opacity-50"}`}>
                    3
                  </div>
                </div>
                <p className={`w-5/6 text-2xl font-semibold text-white ${!isActive && "opacity-50"}`}>Tentang Kos</p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/owner/kost-photo"} className={({isActive}) => (`flex w-full gap-x-5 items-center origin-left ${isActive && "scale-110"}`)}>
            {({ isActive }) => (
              <>
                <div className="w-1/6 justify-end flex ">
                  <div className={`bg-white w-8 h-8 rounded-full flex justify-center items-center font-bold text-primary ${!isActive && "opacity-50"}`}>
                    4
                  </div>
                </div>
                <p className={`w-5/6 text-2xl font-semibold text-white ${!isActive && "opacity-50"}`}>Foto Kos</p>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/owner/room"} className={({isActive}) => (`flex w-full gap-x-5 items-center origin-left ${isActive && "scale-110"}`)}>
            {({ isActive }) => (
              <>
                <div className="w-1/6 justify-end flex ">
                  <div className={`bg-white w-8 h-8 rounded-full flex justify-center items-center font-bold text-primary ${!isActive && "opacity-50"}`}>
                    5
                  </div>
                </div>
                <p className={`w-5/6 text-2xl font-semibold text-white ${!isActive && "opacity-50"}`}>Data Kamar</p>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default OwnerInputSidebar;

import React, {useState} from "react";
import { NavLink } from "react-router-dom";

function HistorySidebar() {
  const activeLinkClassname = "text-primary";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* NavLink */}
      <div className={`w-[50%] font-medium text-slate-400 flex flex-wrap fixed bg-white  rounded-xl overflow-hidden drop-shadow-xl top-56 left-0 -translate-y-1/2 ${isOpen ? '-translate-x-[90%]' : '-translate-x-0'} duration-200 ease-in-out max-w-[270px] lg:static lg:w-[30%] lg:translate-x-0 lg:translate-y-0 lg:text-xl lg:rounded-b-none lg:max-w-none lg:px-4 lg:bg-transparent lg:drop-shadow-none`}>
        <ul className="flex flex-wrap gap-3 history-navlink content-start w-[90%] px-3 py-4 lg:w-full">
          <li>
            <NavLink
              to={"/history/reservation-info"}
              className={({ isActive }) => isActive && activeLinkClassname}
            >
              Pemesanan Kos
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/history/confirmation-list"}
              className={({ isActive }) => isActive && activeLinkClassname}
            >
              Menunggu Konfirmasi
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => isActive && activeLinkClassname}
            >
              Pembayaran
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/history/cancellation-list"}
              className={({ isActive }) => isActive && activeLinkClassname}
            >
              Pembatalan
            </NavLink>
          </li>
        </ul>
        <button className="w-[10%] bg-contrary flex items-center justify-center lg:hidden" onClick={() => {setIsOpen((prev) => !prev)}}>
            <p className="-rotate-90 text-xs text-slate-900">Menu</p>
        </button>
      </div>
    </>
  );
}

export default HistorySidebar;

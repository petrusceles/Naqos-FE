import React from "react";
import { NavLink } from "react-router-dom";

function HistorySidebar() {
  const activeLinkClassname = "text-primary";
  return (
    <>
      {/* NavLink */}
      <ul className="w-[40%] text-sm font-medium text-slate-400 flex flex-wrap gap-3 history-navlink content-start">
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
            to={"/"}
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
            to={"/"}
            className={({ isActive }) => isActive && activeLinkClassname}
          >
            Pembatalan
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default HistorySidebar;

import React from "react";
import { NavLink } from "react-router-dom";
function OwnerDashboardSidebar() {
  return (
    <div className="col-span-1 bg-primary grid grid-cols-1 justify-items-center content-start gap-14 pb-16 pt-40">
      <ul className="w-full px-9 grid grid-cols-1 gap-y-6 owner-input-navlink">
        <li>
          <NavLink
            to={"/owner/dashboard/property"}
            className={({ isActive }) =>
              `flex w-full items-center text-2xl font-semibold px-8 py-5 rounded-md ${
                isActive
                  ? "bg-white text-primary"
                  : "text-white  hover:bg-secondary/20"
              }`
            }
          >
            <p>Property Saya</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/owner/dashboard/transaction"}
            className={({ isActive }) =>
              `flex w-full items-center text-2xl font-semibold px-8 py-5 rounded-md ${
                isActive
                  ? "bg-white text-primary"
                  : "text-white  hover:bg-secondary/20"
              }`
            }
          >
            <p>Riwayat Transaksi</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/owner/dashboard/profile"}
            className={({ isActive }) =>
              `flex w-full items-center text-2xl font-semibold px-8 py-5 rounded-md ${
                isActive
                  ? "bg-white text-primary"
                  : "text-white  hover:bg-secondary/20"
              }`
            }
          >
            <p>Akun Profil</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default OwnerDashboardSidebar;

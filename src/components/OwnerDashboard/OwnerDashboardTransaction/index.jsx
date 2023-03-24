import React from "react";
import OwnerDashboardSidebar from "../ownerDashboardSidebar";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
function OwnerDashboardTransaction() {
  return (
    <div className="h-full w-full grid grid-cols-4">
      <OwnerDashboardSidebar />
      <div className="col-span-3 grid pt-44 place-items-start px-14 gap-12">
        <div className="grid w-full gap-8">
          <div className="font-semibold text-primary">24 Maret 2022</div>
          <div className="grid w-full gap-12">
            <div className="flex w-full gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677912434/NaqosV2/Owner%20Profile/photo3_z50agx.png"
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between grow border-b-2 pb-4 border-slate-300">
                <div className="grid gap-1">
                  <h2 className="text-xl font-semibold">
                    Kos Lily [Booking ID: 00000000]
                  </h2>
                  <p className="font-semibold text-slate-600">
                    Dipesan oleh Hihang Hoheng
                  </p>
                  <p className="text-xs">Fri, 24 March 2022 18:07 WIB</p>

                  <div className="flex items-center text-sm gap-2 font-semibold text-slate-400">
                    <ArrowDownTrayIcon className="w-3 lg:w-4" />
                    <p>Download detail pembayaran</p>
                  </div>
                </div>
                <div className="grid place-content-start justify-items-end gap-4">
                  <h3 className="font-medium text-xl">Rp1.000.000</h3>
                  <button className="bg-primary text-white py-3 px-8 rounded-md text-lg font-semibold">
                    Konfirmasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboardTransaction;

import React from "react";
import { Link } from "react-router-dom";
import HistorySidebar from "../historySidebar";
import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  ArrowRightCircleIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
// import CheckBadgeIcon from "@heroicons/react/24/outline";
function HistoryKostReservationList() {
  return (
    <div className="pt-[88px] lg:pt-32">
      <div className="container px-7 flex flex-wrap w-full gap-5">
        {/* Breadcrumbs */}
        <div className="text-xs font-medium breadcrumbs flex items-center w-full lg:text-base">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Riwayat</Link>
            </li>
            <li className="text-primary font-semibold">
              <Link to={"/history/reservation-info"}>Pemesanan Kos</Link>
            </li>
          </ul>
        </div>

        <div className="w-full flex gap-8 ">
          <HistorySidebar />

          <div className="flex flex-wrap w-full py-2 gap-5 lg:w-full lg:gap-6 ">
            {/* Kost Brief */}
            <div className="flex w-full gap-3 border-b-2 pb-5 items-center lg:pb-7 lg:gap-6 ">
              <div className="w-[33%] overflow-hidden h-28 rounded-md flex items-center lg:w-[20%] lg:h-40">
                <img
                  src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1678116364/NaqosV2/Kost/matt-reames-aFk1RLZgJTs-unsplash_j7dsh2.jpg"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex justify-between w-[64%] gap-2 bg-slate-200 p-3 rounded-md lg:w-[78%] lg:py-3 lg:h-40 lg:px-6">
                <div className="flex flex-wrap w-[60%] lg:gap-3">
                  <div className="grid-cols-1 grid w-full gap-1">
                    <h2 className="font-semibold text-sm lg:text-lg  self-end ">
                      Kos Alamanda
                    </h2>
                    <div className="flex text-xs gap-1 items-center lg:text-sm">
                      <MapPinIcon className="w-3 lg:w-4" />
                      <p>Yogyakarta</p>
                    </div>
                    <p className="text-xs lg:text-sm ">
                      Booking ID : 00000000
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    <div className="grid grid-cols-1 justify-items-center">
                      <p className="text-[8px] lg:text-xs">Check in</p>
                      <p className="text-[11px] lg:text-sm">Jan 17, 23</p>
                    </div>
                    <ArrowRightCircleIcon className="w-4 lg:w-6" />
                    <div className="grid grid-cols-1 justify-items-center">
                      <p className="text-[8px] lg:text-xs">Check out</p>
                      <p className="text-[11px] lg:text-sm">Jan 24, 23</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap w-[40%]  text-xs justify-end">
                  <button className="bg-slate-50 box-content py-2 rounded w-full max-w-[180px] self-start text-primary font-semibold hover:scale-105 duration-100 ease-in-out lg:text-base">
                    Tulis Review
                  </button>
                  <div className="w-full flex self-end justify-end gap-1 text-green-900 font-semibold text-[11px] lg:text-sm">
                    <CheckBadgeIcon className="w-4 lg:w-5" />
                    <p>Completed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Show More Button */}
            <div className="w-full text-center font-semibold text-xs text-gray-500 lg:text-lg mb-6">
              Lihat lebih banyak lagi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryKostReservationList;
import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import HistorySidebar from "../historySidebar";
function HistoryKostReservationInfo() {
  return (
    <div className="pt-[88px]">
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

        {/* SIdebar */}
        <HistorySidebar />

        <div className="flex flex-wrap w-[50%] py-2 gap-2">
          {/* Kost Brief */}
          <div className="flex w-full gap-2 flex-wrap border-b-2 pb-3">
            <div className="w-full  overflow-hidden h-32 rounded flex items-center ">
              <img
                src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1678116364/NaqosV2/Kost/matt-reames-aFk1RLZgJTs-unsplash_j7dsh2.jpg"
                className="object-cover object-center"
              />
            </div>
            <div className="flex items-center justify-between w-full gap-2">
              <div className="h-full flex items-center bg-secondary justify-center rounded py-2">
                <div className="flex flex-wrap w-[90%]">
                  <p className="text-sx font-semibold h-fit w-full">
                    Kos Alamanda
                  </p>
                  <div className="flex gap-1 h-fit w-full">
                    <MapPinIcon className="w-3 " />
                    <p className="text-[11px]">Yogyakarta</p>
                  </div>
                  <p className="text-[11px] h-fit items-center flex w-full">
                    Booking ID: 00000000
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center justify-self-center ">
                <div className="grid grid-cols-1 justify-items-center w-full">
                  <p className="text-[8px]">Check in</p>
                  <p className="text-[11px]">Jan 17, 23</p>
                </div>
                <ArrowRightCircleIcon className="w-4" />
                <div className="grid grid-cols-1 justify-items-center w-full">
                  <p className="text-[8px]">Check out</p>
                  <p className="text-[11px]">Jan 24, 23</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="w-full flex flex-wrap gap-2">
            <h1 className="text-sm font-semibold">Rincian Pembayaran</h1>
            <div className="w-full flex flex-wrap p-3 bg-secondary rounded gap-2">
              <div className="text-[11px] w-full gap-1 flex flex-wrap border-b-2 pb-2 border-slate-500 font-semibold">
                <div className="w-full flex justify-between">
                  <p>Harga kos</p>
                  <p>
                    Rp300.000
                    <span className="text-[9px] font-normal">/minggu</span>
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <p>Waktu sewa</p>
                  <p>1 minggu</p>
                </div>
              </div>
              <div className="w-full flex justify-between text-[11px] font-semibold">
                <p>Total Pembayaran</p>
                <p>Rp300.000</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default HistoryKostReservationInfo;

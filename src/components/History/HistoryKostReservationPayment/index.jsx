import React from "react";
import { Link } from "react-router-dom";
import HistorySidebar from "../historySidebar";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import BRIIcon from "../../../assets/bank-logo-bri.png"
function HistoryKostReservationPayment() {
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

        {/* Sidebar */}
        <div className="w-full flex gap-8">
          <HistorySidebar />

          <div className="flex flex-wrap w-full py-2 gap-3 lg:w-full lg:gap-6 ">
            {/* Kost Brief */}
            <div className="flex w-full gap-5 flex-wrap border-b-2 pb-5 items-center lg:pb-7">
              <div className="w-[40%] overflow-hidden h-28 rounded flex items-center lg:w-[30%] lg:h-36">
                <img
                  src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1678116364/NaqosV2/Kost/matt-reames-aFk1RLZgJTs-unsplash_j7dsh2.jpg"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex justify-between w-[55%] gap-2 items-start flex-wrap">
                <div className="grid-cols-1 grid gap-1 w-full">
                  <h2 className="font-semibold text-sm lg:text-lg">
                    Kos Alamanda
                  </h2>
                  <div className="flex text-xs gap-1 items-center lg:text-base">
                    <MapPinIcon className="w-3 lg:w-5" />
                    <p>Yogyakarta</p>
                  </div>
                  <p className="text-xs lg:text-base">Booking ID : 00000000</p>
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
            </div>

            <div className="w-full flex flex-wrap gap-6 pb-8 lg:gap-9">
              {/* Payment Detail */}
              <div className="w-full flex flex-wrap gap-4 lg:gap-5">
                <div className="w-full">
                  <h1 className=" font-semibold lg:text-2xl ">
                    Detail Pembayaran
                  </h1>
                  <p className="text-[11px] text-red-600">
                    *Pembayaran akan hangus dalam 24 jam
                  </p>
                </div>

                <div className="w-full flex flex-wrap py-4 px-4 bg-secondary rounded-lg gap-3 lg:px-8 lg:gap-5 justify-between items-center">
                  <p className="text-sm font-bold lg:text-lg">Total Pembayaran</p>
                  <p className="font-bold lg:text-lg">
                    <span className="text-xs lg:text-base">Rp</span>300.000
                  </p>
                </div>

                {/* Bank Rekening */}
                <div className="w-full flex py-4 px-4 bg-secondary rounded-lg gap-3 lg:px-8 lg:gap-5">
                  <div className="overflow-hidden bg-white rounded-lg w-4/12 max-w-[142px]">
                    <img src={BRIIcon} className="scale-75"/>
                  </div>
                  <div className="w-8/12 flex flex-wrap align-middle items-center">
                    <p className="font-medium  text-xs w-full lg:text-base">ke rekening Bank BRI berikut</p>
                    <p className="text-base font-bold w-full lg:text-xl">123-456-789-101-121</p>
                    <p className="font-bold  text-sm w-full lg:text-lg">atas nama RISMA EKAWATI</p>
                  </div>
                </div>

                <div>
                  <button>

                  </button>
                  <button>
                    
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

export default HistoryKostReservationPayment;

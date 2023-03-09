import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import HistorySidebar from "../historySidebar";
import PayConfirmationModal from "./payConfirmationModal";
import CancelReservationModal from "./cancelReservationModal";
function HistoryKostReservationInfo() {
  const [isPaymentInitiated, setIsPaymentInitiated] = useState(false);
  const [isCancelReservationInitiated, setIsCancelReservationInitiated] =
    useState(false);
  return (
    <div className="pt-[88px] lg:pt-32">
      <div className="container px-7 flex flex-wrap w-full gap-5">
        <PayConfirmationModal
          IsPaymentInitiatedState={{
            isPaymentInitiated,
            setIsPaymentInitiated,
          }}
        />
        <CancelReservationModal IsCancelReservationInitiatedState={{isCancelReservationInitiated, setIsCancelReservationInitiated}} />
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
        <div className="w-full flex gap-8 ">
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
              {/* Payment Info */}
              <div className="w-full flex flex-wrap gap-2 lg:gap-5">
                <h1 className=" font-semibold lg:text-2xl">
                  Rincian Pembayaran
                </h1>
                <div className="w-full flex flex-wrap py-5 px-4 bg-secondary rounded-lg gap-3 lg:px-8 lg:gap-5">
                  <div className="text-sm w-full gap-3 flex flex-wrap border-b-2 pb-3 border-primary font-medium lg:text-lg lg:gap-5 lg:pb-5">
                    <div className="w-full flex justify-between">
                      <p>Harga kos</p>
                      <p className="font-bold">
                        Rp300.000
                        <span className="text-[11px] font-normal lg:text-sm">
                          /minggu
                        </span>
                      </p>
                    </div>
                    <div className="w-full flex justify-between">
                      <p>Waktu sewa</p>
                      <p>1 minggu</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between text-sm font-semibold lg:text-lg">
                    <p>Total Pembayaran</p>
                    <p>Rp300.000</p>
                  </div>
                </div>
              </div>

              {/* Payment Gate */}
              <div className="w-full flex flex-wrap gap-3 lg:gap-5">
                <h2 className="w-full font-semibold lg:text-2xl">
                  Bayar Melalui
                </h2>
                <select className="select select-sm border-2 box-content border-primary lg:select-md w-44 lg:text-base">
                  <option>Transfer Bank</option>
                  <option>Tunai</option>
                </select>
                <p className="text-[11px] w-full text-justify lg:text-sm">
                  *Pastikan memilih opsi dengan benar sebab opsi yang telah
                  dipilih tidak dapat dirubah, setelah memilih opsi, segera
                  lakukan pembayaran
                </p>
              </div>

              {/* Pay Button */}
              <div className="w-full flex justify-center">
                <button
                  className="bg-primary text-white font-semibold text-xs rounded-full w-1/2 hover:text-primary hover:bg-secondary duration-75 ease-in py-2 lg:text-lg lg:py-3"
                  onClick={() => {
                    setIsPaymentInitiated((prev) => !prev);
                  }}
                >
                  Bayar kos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryKostReservationInfo;

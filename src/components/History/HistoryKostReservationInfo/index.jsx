import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import HistorySidebar from "../historySidebar";
import PayConfirmationModal from "./payConfirmationModal";
import CancelReservationModal from "./cancelReservationModal";
import addDays from "date-fns/addDays";
import { useKostDetail } from "../../../queries/kost.js";
import { bahasaToEnglish } from "../../../utils/kost.js";
function HistoryKostReservationInfo() {
  const [isPaymentInitiated, setIsPaymentInitiated] = useState(false);
  const [isCancelReservationInitiated, setIsCancelReservationInitiated] =
    useState(false);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const [reservationInfo, setReservationInfo] = useState({
    days: queryParams.get("days"),
    type: queryParams.get("type"),
    price: queryParams.get("price"),
    kost_id: queryParams.get("kost_id"),
    date: new Date(queryParams.get("date")),
  });
  const kost = useKostDetail({ id: reservationInfo.kost_id });
  const reservationStartSplitted = reservationInfo?.date?.toString().split(" ");
  const reservationEndSplitted = addDays(
    reservationInfo?.date,
    reservationInfo?.days
  )
    .toString()
    .split(" ");

  const reservationStart = new Date(queryParams.get("date"));
  const reservationEnd = addDays(reservationInfo?.date, reservationInfo?.days);
  // console.log(queryParams.get("type"));
  const [bookingInfo, setBookingInfo] = useState({
    kost_id: queryParams.get("kost_id"),
    in_date: reservationStart.toLocaleString().split(",")[0],
    out_date: reservationEnd.toLocaleString().split(",")[0],
    time: bahasaToEnglish[queryParams.get("type")],
    price: parseInt(queryParams.get("price")),
  });
  // console.log(kost?.data?.data?.data?.kost);
  return (
    <div className="pt-[88px] lg:pt-32">
      <div className="container px-7 flex flex-wrap w-full gap-5">
        <PayConfirmationModal
          IsPaymentInitiatedState={{
            isPaymentInitiated,
            setIsPaymentInitiated,
          }}
          bookingInfoState={{
            bookingInfo,
            setBookingInfo,
          }}
        />
        <CancelReservationModal
          IsCancelReservationInitiatedState={{
            isCancelReservationInitiated,
            setIsCancelReservationInitiated,
          }}
        />
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
              <div className="w-[40%] overflow-hidden h-28 rounded-lg flex items-center lg:w-[30%] lg:h-36">
                <img
                  src={kost?.data?.data?.data?.kost?.outside_photos_url[0]}
                  className="object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="grid  rounded gap-1">
                  <h2 className="font-semibold text-sm lg:text-lg">
                    {kost?.data?.data?.data?.kost?.name}
                  </h2>
                  <div className="flex text-xs gap-1 items-center lg:text-base rounded ">
                    <MapPinIcon className="w-3 lg:w-5" />
                    <p>{kost?.data?.data?.data?.kost?.province}</p>
                  </div>
                </div>
                <div className="grid w-fit gap-1 justify-items-center bg-secondary px-2 py-1 rounded">
                  <p className="text-xs lg:text-base font-semibold text-primary">
                    Periode Sewa
                  </p>
                  <div className="flex flex-wrap gap-2 w-fit">
                    <div className="grid grid-cols-1 justify-items-center">
                      <p className="text-[8px] lg:text-xs">Check in</p>
                      <p className="text-[11px] lg:text-sm">{`${reservationStartSplitted[1]} ${reservationStartSplitted[2]}, ${reservationStartSplitted[3]}`}</p>
                    </div>
                    <ArrowRightCircleIcon className="w-4 lg:w-6" />
                    <div className="grid grid-cols-1 justify-items-center">
                      <p className="text-[8px] lg:text-xs">Check out</p>
                      <p className="text-[11px] lg:text-sm">{`${reservationEndSplitted[1]} ${reservationEndSplitted[2]}, ${reservationEndSplitted[3]}`}</p>
                    </div>
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
                <div className="w-full flex flex-wrap py-5 px-4 bg-contrary-tertiary rounded-lg gap-3 lg:px-8 lg:gap-5">
                  <div className="text-sm w-full gap-3 flex flex-wrap border-b-2 pb-3 border-primary font-medium lg:text-lg lg:gap-5 lg:pb-5">
                    <div className="w-full flex justify-between">
                      <p>Harga kos</p>
                      <p className="font-bold">
                        {`Rp${bookingInfo?.price.toLocaleString("en-US")}`}
                        <span className="text-[11px] font-normal lg:text-sm">
                          {`/${reservationInfo?.type}`}
                        </span>
                      </p>
                    </div>
                    <div className="w-full flex justify-between">
                      <p>Waktu sewa</p>
                      <p>{`1 ${reservationInfo?.type}`}</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between text-sm font-semibold lg:text-lg">
                    <p>Total Pembayaran</p>
                    <p>{`Rp${bookingInfo?.price.toLocaleString("en-US")}`}</p>
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

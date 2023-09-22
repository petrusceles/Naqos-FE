import React from "react";
import { Link, useLocation } from "react-router-dom";
import HistorySidebar from "../historySidebar";
import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  ArrowRightCircleIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import BRIIcon from "../../../assets/bank-logo-bri.png";
import { useBooking } from "../../../queries/kost.js";
// import Loading from "../components/AddOn/Loading.jsx";
import Loading from "../../AddOn/Loading.jsx";
import { useState } from "react";
function HistoryKostReservationPayment() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const [bookingId, setBookingId] = useState(queryParams?.get("booking_id"));

  console.log("BOOKING", bookingId);

  const booking = useBooking({ id: bookingId });

  const reservationStart = new Date(
    booking?.data?.data?.data?.booking?.in_date
  );
  const reservationEnd = new Date(booking?.data?.data?.data?.booking?.out_date);

  const reservationStartSplitted = reservationStart.toString().split(" ");
  const reservationEndSplitted = reservationEnd.toString().split(" ");
  console.log(booking?.data?.data?.data?.booking);
  return (
    <>
      {booking?.isLoading && <Loading />}
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
                      {booking?.data?.data?.data?.booking?.kost?.name}
                    </h2>
                    <div className="flex text-xs gap-1 items-center lg:text-base">
                      <MapPinIcon className="w-3 lg:w-5" />
                      <p>
                        {booking?.data?.data?.data?.booking?.kost?.province}
                      </p>
                    </div>
                    <p className="text-xs lg:text-base">
                      Booking ID :{" "}
                      <span className="font-semibold text-primary">
                        {booking?.data?.data?.data?.booking?._id}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    <div className="grid grid-cols-1 justify-items-center">
                      <p className="text-[8px] lg:text-xs">Check in</p>
                      <p className="text-[11px] lg:text-sm">
                        {`${reservationStartSplitted[1]} ${reservationStartSplitted[2]}, ${reservationStartSplitted[3]}`}
                      </p>
                    </div>
                    <ArrowRightCircleIcon className="w-4 lg:w-6" />
                    <div className="grid grid-cols-1 justify-items-center">
                      <p className="text-[8px] lg:text-xs">Check out</p>
                      <p className="text-[11px] lg:text-sm">{`${reservationEndSplitted[1]} ${reservationEndSplitted[2]}, ${reservationEndSplitted[3]}`}</p>
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
                    <p className="text-sm font-bold lg:text-lg">
                      Total Pembayaran
                    </p>
                    <p className="font-bold lg:text-lg">
                      <span className="text-xs lg:text-base">Rp</span>
                      {booking?.data?.data?.data?.booking?.price?.toLocaleString(
                        "en-US"
                      )}
                    </p>
                  </div>

                  {/* Bank Rekening */}
                  <div className="w-full flex py-4 px-4 bg-secondary rounded-lg gap-3 lg:px-8 lg:gap-5">
                    <div className="overflow-hidden bg-slate-100 rounded-lg w-4/12 max-w-[142px] flex items-center justify-center">
                      <CreditCardIcon className="w-12 h-12 text-primary" />
                    </div>
                    <div className="w-8/12 flex flex-wrap align-middle items-center">
                      <p className="font-medium  text-xs w-full lg:text-base">
                        ke rekening
                        <span className="font-semibold text-primary text-lg">
                          {` Bank ${booking?.data?.data?.data?.booking?.kost?.user?.bank}`}
                        </span>{" "}
                        berikut
                      </p>
                      <p className="text-base font-bold w-full lg:text-xl">
                        {
                          booking?.data?.data?.data?.booking?.kost?.user
                            ?.bank_number
                        }
                      </p>
                      <p className="font-bold  text-sm w-full lg:text-lg">
                        {`atas nama ${booking?.data?.data?.data?.booking?.kost?.user?.bank_name}`}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button></button>
                    <button></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryKostReservationPayment;

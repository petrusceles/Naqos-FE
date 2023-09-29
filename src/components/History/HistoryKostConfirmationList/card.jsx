import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  ArrowRightCircleIcon,
  CheckBadgeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

function HistoryKostConfirmationListCard({ booking }) {
  const reservationStart = new Date(booking?.in_date);
  const reservationEnd = new Date(booking?.out_date);

  const reservationStartSplitted = reservationStart.toString().split(" ");
  const reservationEndSplitted = reservationEnd.toString().split(" ");
  return (
    <>
      <div className="flex w-full gap-3 border-b-2 pb-5 items-center lg:pb-7 lg:gap-6 bgblu">
        <div className="w-[20%] h-28 rounded-lg flex items-center overflow-hidden  lg:w-[20%] lg:h-40">
          <img
            src={booking?.kost?.outside_photos_url[0]}
            className="object-cover"
          />
        </div>
        <div className="flex justify-between w-[70%] gap-2 px-3 rounded-md lg:w-[78%]  lg:h-40 lg:px-6">
          <div className="flex flex-wrap w-[60%] lg:gap-3">
            <div className="grid-cols-1 grid w-full gap-1">
              <h2 className="font-semibold text-sm lg:text-lg  self-end ">
                {booking?.kost?.name}
              </h2>
              <div className="flex text-xs gap-1 items-center lg:text-sm">
                <MapPinIcon className="w-3 lg:w-4" />
                <p>{booking?.kost?.district}</p>
              </div>
              <p className="text-xs lg:text-sm ">{`Booking ID : ${booking?._id}`}</p>
            </div>
            <div className="flex flex-wrap gap-2 w-full rounded  items-center ">
              <div className="grid grid-cols-1 justify-items-center">
                <p className="text-[8px] lg:text-xs">Check in</p>
                <p className="text-[11px] lg:text-sm">
                  {`${reservationStartSplitted[1]} ${reservationStartSplitted[2]}, ${reservationStartSplitted[3]}`}
                </p>
              </div>
              <ArrowRightCircleIcon className="w-4 lg:w-6" />
              <div className="grid grid-cols-1 justify-items-center">
                <p className="text-[8px] lg:text-xs">Check out</p>
                <p className="text-[11px] lg:text-sm">
                  {`${reservationEndSplitted[1]} ${reservationEndSplitted[2]}, ${reservationEndSplitted[3]}`}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[27%] text-[10px] justify-end lg:gap-5 gap-2 lg:w-[45%]">
            <button className="bg-slate-200 box-content py-1 rounded w-full max-w-[180px] self-start font-semibold hover:scale-105 duration-100 ease-in-out lg:text-base text-primary lg:py-3">
              Chat Pemilik Kost
            </button>
            <div className="w-full flex self-end justify-end gap-2 font-medium text-[9px] lg:text-sm items-center text-amber-500 ">
              <ClockIcon className="w-[40%] lg:w-7 max-w-[20px]" />
              <p className="line-clamp-1">Menunggu konfirmasi pembayaran</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryKostConfirmationListCard;

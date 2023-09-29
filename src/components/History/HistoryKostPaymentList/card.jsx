import React from "react";

import { ArrowDownTrayIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function HistoryKostPaymentListCard({booking}) {
  const updatedDate = new Date(booking?.updatedAt);
  const reservationEnd = new Date(booking?.out_date);

  const updatedDateSplitted = updatedDate.toString().split(" ");
  const reservationEndSplitted = reservationEnd.toString().split(" ");
  console.log(updatedDateSplitted);
  return (
    <>
      <div className="flex justify-between w-full items-start pb-3 border-b lg:pb-5">
        <div className="grid gap-1 lg:gap-2">
          <h3 className="text-sm font-semibold lg:text-base">
            {booking?.kost?.name + ` [Booking ID: ${booking?._id}]`}
          </h3>
          <p className="text-[11px] lg:text-xs">
            {`${updatedDateSplitted[0]}, ${updatedDateSplitted[2]} ${updatedDateSplitted[1]} ${updatedDateSplitted[3]} ${updatedDateSplitted[4]} WIB`}
          </p>
          <a
            href={booking?.proof_photo_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-xs gap-1 lg:text-sm lg:gap-2"
          >
            <ArrowDownTrayIcon className="w-3 lg:w-4" />
            <p>Download detail pembayaran</p>
          </a>
        </div>
        <div className="place-self-end grid lg:gap-1">
          <p className="text-sm font-semibold lg:text-base">{`Rp${booking?.price?.toLocaleString(
            "en-US"
          )}`}</p>
          <div className="flex gap-1 font-medium text-orange-400 justify-end lg:gap-2">
            <ClockIcon className="w-3 lg:w-4" />
            <p className="text-[11px] lg:text-sm">Pending</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryKostPaymentListCard;

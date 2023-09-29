import React from "react";
import { Link } from "react-router-dom";
import HistorySidebar from "../historySidebar";
import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  ArrowRightCircleIcon,
  CheckBadgeIcon,
  ClockIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import HistoryKostCancellationListCard from "./card.jsx";
import { useAllBookingInfinite } from "../../../queries/booking.js";
import { useUser } from "../../../queries/auth.js";

function HistoryKostCancellationList() {
  const user = useUser();

  const bookingInfinite = useAllBookingInfinite({
    search_by: {
      user: [user?.data?.data?.data?._id],
      phase: ["failed"],
    },
    limit: 2,
  });
  console.log(bookingInfinite);
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
              <Link to={"/history/cancellation-list"}>Pembatalan</Link>
            </li>
          </ul>
        </div>

        <div className="w-full flex gap-8">
          <HistorySidebar />
          <div className="flex flex-wrap w-full py-2 gap-5 lg:w-full lg:gap-6 items-start">
            {/* Kost Brief */}

            {bookingInfinite?.data?.pages?.map((page, i) => {
              return (
                <React.Fragment key={i}>
                  {page?.data?.data?.bookings?.map((booking) => {
                    if (booking?.phase == "failed")
                      return (
                        <>
                          <HistoryKostCancellationListCard
                            booking={booking}
                            key={booking?._id}
                          />
                        </>
                      );
                  })}
                </React.Fragment>
              );
            })}

            {/* Show More Button */}

            <button
              className="w-full text-center font-semibold text-xs text-gray-500 lg:text-lg mb-6"
              disabled={
                !bookingInfinite?.hasNextPage ||
                bookingInfinite?.isFetchingNextPage
              }
            >
              {bookingInfinite?.isFetchingNextPage
                ? `Loading...`
                : bookingInfinite?.hasNextPage
                ? `Lihat lebih banyak lagi`
                : `Tidak ada daftar lagi`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryKostCancellationList;

import React from "react";
import { Link } from "react-router-dom";
import { useAllBookingInfinite } from "../../../queries/booking.js";
import HistorySidebar from "../historySidebar";

import { useUser, useUserMutate } from "../../../queries/auth.js";
import HistoryKostReservationListCard from "./card.jsx";
// import CheckBadgeIcon from "@heroicons/react/24/outline";
function HistoryKostReservationList() {
  const user = useUser();

  const bookingInfinite = useAllBookingInfinite({
    search_by: {
      user: [user?.data?.data?.data?._id],
      phase: ["booking", "confirmation"],
    },
    limit: 2,
  });
  const onLoadMoreClick = (e) => {
    e.preventDefault();
    bookingInfinite?.fetchNextPage();
  };
  console.log(bookingInfinite?.data);
  return (
    <>
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

            <div className="flex flex-wrap w-full py-2 gap-5 lg:w-full lg:gap-6 items-start">
              {bookingInfinite?.data?.pages?.map((page, i) => {
                return (
                  <React.Fragment key={i}>
                    {page?.data?.data?.bookings?.map((booking) => {
                      if (
                        booking?.phase == "booking" ||
                        booking?.phase == "confirmation"
                      )
                        return (
                          <>
                            <HistoryKostReservationListCard
                              booking={booking}
                              key={booking?._id}
                            />
                          </>
                        );
                    })}
                  </React.Fragment>
                );
              })}
              <button
                onClick={onLoadMoreClick}
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
    </>
  );
}

export default HistoryKostReservationList;

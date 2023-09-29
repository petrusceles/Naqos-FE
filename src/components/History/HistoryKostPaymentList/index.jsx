import React from "react";
import { Link } from "react-router-dom";
import HistorySidebar from "../historySidebar";
import { ArrowDownTrayIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useUser } from "../../../queries/auth.js";
import { useAllBookingInfinite } from "../../../queries/booking.js";
import HistoryKostPaymentListCard from "./card.jsx";
function HistoryKostPaymentList() {
  const user = useUser();

  const bookingInfinite = useAllBookingInfinite({
    search_by: {
      user: [user?.data?.data?.data?._id],
      phase: ["payment", "confirmation"],
    },
    limit: 2,
  });
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

        <div className="w-full flex gap-8">
          <HistorySidebar />

          <div className="flex flex-wrap w-full py-2 gap-3 lg:w-full lg:gap-0 items-start">
            {/* Kost Brief */}

            {bookingInfinite?.data?.pages?.map((page, i) => {
              return (
                <React.Fragment key={i}>
                  {page?.data?.data?.bookings?.map((booking) => {
                    if (booking?.phase == "payment")
                      return (
                        <>
                          <HistoryKostPaymentListCard
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

export default HistoryKostPaymentList;

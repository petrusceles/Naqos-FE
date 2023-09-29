import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HistorySidebar from "../historySidebar";
import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  ArrowRightCircleIcon,
  CreditCardIcon,
  ArrowUpTrayIcon,
  PhotoIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import BRIIcon from "../../../assets/bank-logo-bri.png";
import { useBooking } from "../../../queries/kost.js";
// import Loading from "../components/AddOn/Loading.jsx";
import Loading from "../../AddOn/Loading.jsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateBooking } from "../../../queries/booking.js";
import LoadingBar from "react-top-loading-bar";
import { toast } from "react-toastify";
function HistoryKostReservationPayment() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const [bookingId, setBookingId] = useState(queryParams?.get("booking_id"));


  const booking = useBooking({ id: bookingId });

  const reservationStart = new Date(
    booking?.data?.data?.data?.booking?.in_date
  );
  const reservationEnd = new Date(booking?.data?.data?.data?.booking?.out_date);

  const reservationStartSplitted = reservationStart.toString().split(" ");
  const reservationEndSplitted = reservationEnd.toString().split(" ");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    trigger,
    setValue,
  } = useForm({
    defaultValues: {
      proof_photo: null,
    },
    mode: "all",
  });

  const updateBooking = useUpdateBooking()

  const watchProofPhoto = watch("proof_photo");
  const navigate = useNavigate()
  const [progressLoading, setProgressLoading] = useState(0)
  const onSubmit = async (data,e) => {
    e.preventDefault()
    console.log(data?.proof_photo[0]);
    try {
      setProgressLoading(50);
      await updateBooking.mutateAsync({
        booking_id: booking?.data?.data?.data?.booking?._id,
        proof_photo:data?.proof_photo[0],
        phase:"payment"
      });
      setProgressLoading(100);
      navigate("/history/confirmation/list");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
  return (
    <>
      <LoadingBar
        waitingTime={50}
        color="#0A008A"
        progress={progressLoading}
        height="5px"
      />
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
                <Link to={"/history/reservation/list"}>Riwayat</Link>
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
                    <h2 className="font-semibold text-sm lg:text-lg line-clamp-1">
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
                        <span className="font-semibold text-primary text-base lg:text-lg">
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

                  <form
                    className="flex gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      className="hidden"
                      id="proof_photo"
                      type="file"
                      {...register("proof_photo")}
                    />
                    <label
                      htmlFor="proof_photo"
                      className="flex flex-wrap gap-2 items-center rounded-md px-3 py-2 border-2 border-primary text-sm font-semibold cursor-pointer max-w-[150px] lg:max-w-[180px] lg:text-base lg:border-[3]"
                    >
                      {watchProofPhoto == null && (
                        <ArrowUpTrayIcon className="h-5 w-5" />
                      )}
                      {watchProofPhoto != null && (
                        <PhotoIcon className="h-5 w-5 lg:h-7 lg:w-7 text-red-600" />
                      )}
                      {watchProofPhoto == null && <div>Upload Bukti</div>}
                      {watchProofPhoto != null && (
                        <div className="line-clamp-1 break-words shrink max-w-[75%]">
                          {watchProofPhoto[0]?.name}
                        </div>
                      )}
                    </label>
                    <button
                      disabled={watchProofPhoto == null}
                      className={
                        (watchProofPhoto == null
                          ? "bg-slate-300 text-slate-600 "
                          : "bg-primary text-slate-50 ") +
                        "px-4 py-2 text-sm font-semibold rounded-md lg:text-base"
                      }
                    >
                      Sudah Bayar
                    </button>
                  </form>
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

import React from "react";
import OwnerDashboardSidebar from "../ownerDashboardSidebar";
import { PhoneIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { MapPinIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
function OwnerDashboardTransactionDetail() {
  return (
    <div className="h-full w-full grid grid-cols-4">
      <OwnerDashboardSidebar />
      <div className="col-span-3 grid pt-44 pb-24 place-items-start content-start px-14 gap-12">
        <div className="grid w-full gap-4">
          <h2 className="text-2xl font-bold">Dipesan oleh</h2>
          <div className="flex w-full gap-6">
            <div className="rounded-full w-20 h-20 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677912434/NaqosV2/Owner%20Profile/photo3_z50agx.png"
                className="object-cover"
              />
            </div>
            <div className="grow grid place-items-start gap-1">
              <p className="font-semibold text-slate-800 text-lg">
                Hihang Hoheng
              </p>
              <p className="text-sm">Fri, 24 March 2023 18:07 WIB</p>
              <button className="flex gap-3 items-center border-[3px] border-primary py-1 px-4 rounded-md font-semibold text-primary mt-2">
                <PhoneIcon className="w-5" />
                <span>0812-3456-7891</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid w-full gap-4">
          <h2 className="text-2xl font-bold">Rincian Pemesanan</h2>
          <div className="flex w-full gap-6">
            <div className="rounded-lg w-64 h-40 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677522766/NaqosV2/dillon-kydd-XGvwt544g8k-unsplash_fvpq9k.jpg"
                className="object-cover"
              />
            </div>
            <div className="grow grid place-items-start gap-1">
              <div className="grid w-full gap-1">
                <p className="text-xl font-semibold">Kos Lily</p>
                <div className="flex gap-1 w-full text-sm">
                  <MapPinIcon className="w-4" />
                  <p>Yogyakarta</p>
                </div>
                <p>Booking ID: 00000000</p>
              </div>
              <div className="grid grid-cols-3 grid-rows-2 grid-flow-col ">
                <p className="text-sm text-center">Check in</p>
                <p>Jan 17, 23</p>
                <ArrowRightCircleIcon className="row-span-2 w-7 self-center justify-self-center" />
                <p className="text-sm text-center">Check in</p>
                <p>Jan 17, 23</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid w-full gap-4 place-self-auto">
          <div className="flex justify-between">
            <p className="text-2xl font-bold">Rincian Pembayaran</p>
            <div className="flex items-center gap-2 font-semibold text-slate-400">
              <ArrowDownTrayIcon className="w-6" />
              <p>Download detail pembayaran</p>
            </div>
          </div>

          <div className="bg-secondary py-8 px-10 grid rounded-xl gap-6">
            <div className="grid grid-cols-2 text-xl font-semibold gap-y-4 border-b-2 border-primary pb-6">
              <p>Harga kos</p>
              <p className="place-self-end">
                Rp300.000<span className="text-sm font-medium">/minggu</span>
              </p>
              <p>Waktu sewa</p>
              <p className="place-self-end">1 minggu</p>
            </div>
            <div className="flex justify-between w-full font-bold text-xl">
              <p>Total Pembayaran</p>
              <p>Rp300.000</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center pt-5">
          <div className="grid grid-cols-2 gap-4 text-lg font-semibold w-1/2 min-w-[550px]">
            <button className="rounded-md border-[3px] border-red-500 text-red-500 py-2">
              Tolak Pembayaran
            </button>
            <button className="bg-primary rounded-md text-white py-2">
              Konfirmasi Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboardTransactionDetail;

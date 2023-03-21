import React from 'react'
import { Link } from "react-router-dom";
import HistorySidebar from "../historySidebar";
import { ArrowDownTrayIcon, ClockIcon } from '@heroicons/react/24/outline';
function HistoryKostPaymentList() {
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

          <div className="flex flex-wrap w-full py-2 gap-3 lg:w-full lg:gap-6 items-start">
            {/* Kost Brief */}
            <div className='flex justify-between w-full items-start pb-3 border-b lg:pb-5'>
              <div className='grid gap-1 lg:gap-2'>
                <h3 className='text-sm font-semibold lg:text-base'>Kos Alamanda [Booking ID: 00000000]</h3>
                <p className='text-[11px] lg:text-xs'>Tue, 17 January 2023 18:07 WIB</p>
                <div className='flex items-center text-xs gap-1 lg:text-sm lg:gap-2'>
                  <ArrowDownTrayIcon className='w-3 lg:w-4'/>
                  <p>Download detail pembayaran</p>
                </div>
              </div>
              <div className='place-self-end grid lg:gap-1'>
                <p className='text-sm font-semibold lg:text-base'>Rp300.000</p>
                <div className='flex gap-1 font-medium text-orange-400 justify-end lg:gap-2'>
                  <ClockIcon className='w-3 lg:w-4' />
                  <p className='text-[11px] lg:text-sm'>Pending</p>
                </div>
              </div>
            </div>
            
            {/* Show More Button */}
            <div className="w-full text-center font-semibold text-xs text-gray-500 lg:text-lg mb-6">
              Lihat lebih banyak lagi
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryKostPaymentList
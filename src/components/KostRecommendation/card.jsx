import React from 'react'
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid'
function KostRecommendationCard() {
  return (
    <div className="grid grid-rows-2 max-w-xs rounded-2xl bg-white overflow-hidden relative shadow-xl lg:max-w-xs">
        <img
          src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677522766/NaqosV2/dillon-kydd-XGvwt544g8k-unsplash_fvpq9k.jpg"
          className="object-cover h-full"
        />
      <div className="absolute text-[10px] top-[4%] left-[6%] bg-white px-2 py-1 rounded-full font-medium lg:text-sm lg:px-4 lg:py-2">
        Tipe Kos
      </div>
      <div className="p-3 grid grid-cols-1 gap-2 lg:p-5">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold lg:text-2xl">Nama Kos</p>
          <div className="flex gap-2 items-center ">
            <StarIcon className="w-4 text-contrary lg:w-6" />
            <div className="text-sm lg:text-xl align-middle">4.5</div>
          </div>
        </div>
        <div className="font-light text-xs lg:text-base">Rincian alamat kos secara lengkap dan kode pos</div>
        <div className="flex gap-2 items-center">
          <MapPinIcon className="w-4 text-primary lg:w-6" />
          <p className="text-xs font-semibold lg:text-xl">Kota</p>
        </div>
        <div className="text-xs lg:text-base"><span className="font-semibold text-sm lg:text-xl">Harga</span> /bulan</div>
      </div>
    </div>
  )
}

export default KostRecommendationCard
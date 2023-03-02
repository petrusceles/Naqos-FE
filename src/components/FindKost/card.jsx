import React from "react";
import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
function FindKostCard() {
  return (
    <div className="w-full flex flex-wrap rounded-xl overflow-hidden bg-white drop-shadow-md">
      <div className="w-1/3">
        <img
          src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677522766/NaqosV2/dillon-kydd-XGvwt544g8k-unsplash_fvpq9k.jpg"
          className="object-cover h-full"
        />
      </div>
      <div className="grid grid-cols-1 px-4 py-3 gap-3 w-2/3">
        <div className="flex w-full h-fit items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-[9px] font-semibold text-primary border-[1px] flex items-center justify-center rounded-full border-primary px-2 py-1">
              Campuran
            </div>
            <div className="text-[9px] italic text-red-700">sisa 3 kamar</div>
          </div>
          <HeartIcon className="w-5" />
        </div>
        <div className=" bg-slate-100 px-2 py-1 rounded-md w-full">
          <div className="grid grid-cols-1 h-fit w-11/12 gap-1">
            <h2 className="text-sm font-semibold">Kos Alamanda</h2>
            <p className="text-[9px] line-clamp-2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              molestie turpis. Aenean ultricies eu nunc sit amet fermentum.
              Quisque volutpat nibh volutpat hendrerit suscipit. Phasellus vel
              lectus est. Maecenas tincidunt mi eros, ut consequat nulla
              ultricies quis. Aenean pulvinar.
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-1">
            <StarIcon className="w-4 text-contrary" />
            <div className="text-[13px] font-semibold flex items-center gap-1">
              4.5{" "}
              <span className="font-normal text-[9px] italic">(7 reviews)</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="w-4 text-primary" />
            <div className="text-[11px]">Yogyakarta</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[6px] w-1/2 flex-wrap items-center">
            <div className="text-[9px] font-semibold text-primary border-[1px] border-primary rounded-[4px] py-[2px] px-3">
              Listrik
            </div>
            <div className="text-[9px] font-semibold text-primary border-[1px] border-primary rounded-[4px] py-[2px] px-3">
              Wifi
            </div>
            <div className="text-[9px] font-semibold text-primary border-[1px] border-primary rounded-[4px] py-[2px] px-3">
              KM Dalam
            </div>
          </div>
          <div className="w-1/2 text-sm h-fit font-bold self-end text-end">
            Rp1.000.000 <span className="text-[9px] font-normal">/bulan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindKostCard;

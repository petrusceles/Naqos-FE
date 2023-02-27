import React from "react";
import {
  ChevronDownIcon,
  StarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
const Cities = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Bekasi",
  "Tangerang",
  "Depok",
  "Semarang",
  "Bogor",
];
function KostRecommendation() {
  const [place, setPlace] = useState("Bekasi");
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 gap-10">
        <div className="flex w-fit gap-4 items-center relative">
          <h2 className="font-semibold text-xl lg:text-3xl">
            Rekomendasi Kos Bulanan di
          </h2>
          <button
            className="bg-contrary px-3 py-2 rounded-full text-xs font-medium w-fit flex justify-evenly hover:bg-contary-secondary cursor-pointer duration-75 ease-in-out items-center gap-2 max-w-[102px] lg:max-w-none lg:py-3 lg:px-5"
            onClick={() => {
              setIsDropdownOpen((prev) => !prev);
            }}
          >
            <div className="font-semibold truncate lg:text-xl">{place}</div>
            <ChevronDownIcon className="w-3 lg:w-6" />
          </button>
          <div
            className={`absolute bg-white top-[150%] right-0 flex flex-wrap justify-center w-8/12 rounded-md shadow-md max-w-sm ${
              isDropdownOpen && "hidden"
            }`}
          >
            {Cities.map((e, i) => {
              return (
                <div
                  className="w-full text-center py-3 text-sm hover:bg-contary-secondary cursor-pointer duration-75 ease-in-out lg:text-xl"
                  onClick={() => {
                    setPlace(e);
                    setIsDropdownOpen((prev) => !prev);
                  }}
                >
                  {e}
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-rows-2 max-w-[200px] rounded-2xl bg-white overflow-hidden relative shadow-xl lg:max-w-xs">
          <div className="bg-blue-400">
            <img
              src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677522766/NaqosV2/dillon-kydd-XGvwt544g8k-unsplash_fvpq9k.jpg"
              className="object-cover h-full"
            />
          </div>
          <div className="absolute text-[10px] top-[4%] left-[6%] bg-white px-2 py-1 rounded-full font-medium lg:text-sm lg:px-4 lg:py-2">
            Tipe Kos
          </div>
          <div className="p-3 grid grid-cols-1 gap-2 lg:p-5">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold lg:text-xl">Nama Kos</p>
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
      </div>
    </div>
  );
}

export default KostRecommendation;

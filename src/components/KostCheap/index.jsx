import React from "react";
import {
  ChevronDownIcon,
  StarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import KostCheapCard from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "./style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
function KostCheap() {
  const [place, setPlace] = useState("Bekasi");
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  return (
    <div className="container mx-auto px-8 py-8 lg:pb-16 lg:pt-14">
      <div className="grid grid-cols-1 gap-8 lg:gap-14">
        
        {/* Kost Recommendation Title */}
        <div className="flex w-fit gap-4 items-center relative">
          <h2 className="font-semibold text-xl lg:text-3xl">
            Kos Bulanan Paling Murah di
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
            className={`absolute bg-white top-[150%] right-0 flex flex-wrap justify-center w-8/12 rounded-md shadow-md max-w-sm z-20 ${
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
                  key={i}
                >
                  {e}
                </div>
              );
            })}
          </div>
        </div>

        {/* Kost Recommendation Main Section */}
        <div>
          <Swiper
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 65,
              },
            }}
            centerInsufficientSlides={true}
            autoHeight={false}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <KostCheapCard />
            </SwiperSlide>
            <SwiperSlide>
              <KostCheapCard />
            </SwiperSlide>
            <SwiperSlide>
              <KostCheapCard />
            </SwiperSlide>
            <SwiperSlide>
              <KostCheapCard />
            </SwiperSlide>
            <SwiperSlide>
              <KostCheapCard />
            </SwiperSlide>
            <SwiperSlide>
              <KostCheapCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default KostCheap;

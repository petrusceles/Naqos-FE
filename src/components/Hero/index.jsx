import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
function Hero() {
  return (
    <div className="bg-slate-50 bg-cover pt-16">
      <div className="px-8 container py-10 grid grid-cols-1 lg:py-28">
        {/* <img src={HeroImage} className="object-cover absolute -z-10" /> */}
        <div className="flex flex-wrap w-9/12 gap-2 lg:w-1/2 lg:gap-6">
          <h1 className="text-xl font-semibold w-full lg:text-5xl lg:font-bold">
            Cari Kos Lengkap Aman dikantong.
          </h1>
          <h2 className="w-full lg:text-xl">Ngekos? ya Naqos</h2>
          <div className="flex flex-wrap gap-3 relative items-center lg:gap-4 lg:w-full">
            <MagnifyingGlassIcon className="max-w-[17px] absolute left-[3%] lg:max-w-[27px]" />
            <input
              placeholder="Mau kos dimana?"
              className="text-xs p-2 rounded-md pl-10 border focus:outline-1 focus:outline-primary lg:text-lg lg:p-3 lg:w-2/3 lg:pl-[10%]"
            />
            <button className="bg-primary text-white px-4 lg:px-9 text-xs font-semibold rounded-md h-full lg:text-lg scale-95 hover:shadow-lg duration-100 ease-in-out">
              Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

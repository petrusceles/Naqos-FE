import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "./testimonialCard";
function Banner() {
  return (
    <div className="bg-primary">
      <div className="grid grid-cols-1 py-12 max-w-[1920px] mx-auto gap-10 overflow-hidden">
        <div className="grid-cols-1 gap-6 hidden lg:grid">
          <div className="flex w-[100%] gap-6 justify-center">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
          <div className="flex w-[100%] gap-6 justify-center">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
          <h2 className="text-contrary text-2xl font-semibold w-full text-center lg:text-5xl lg:font-bold">
            +1000 pemilik kos
          </h2>
          <p className="w-10/12 text-white text-sm text-center lg:text-xl lg:w-7/12">
            Lebih dari seribu pemilik kos telah mendaftarkan kosnya! Daftarkan
            punyamu sekarang!
          </p>
          <div className="w-full flex justify-center">
            <button className="bg-contrary py-2 px-4 rounded-full flex gap-2 items-center hover:bg-contary-secondary hover:shadow-md duration-75 ease-in-out lg:py-3 lg:px-5">
              <span className="text-xs font-semibold lg:text-base">
                Daftarkan kos
              </span>
              <ArrowSmallRightIcon className="w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

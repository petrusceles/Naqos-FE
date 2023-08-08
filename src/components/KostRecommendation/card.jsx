import React from "react";
import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";
function KostRecommendationCard({
  name,
  address,
  district,
  month_price,
  type,
  outside_photo_url,
}) {
  return (
    <div className="grid grid-rows-2 max-w-xs rounded-2xl bg-white overflow-hidden relative shadow-xl lg:max-w-xs lg:h-[450px] hover:scale-[102%] ease-in-out duration-75 cursor-pointer">
      <img src={outside_photo_url} className="object-cover h-full" />
      <div className="absolute text-[10px] top-[4%] left-[6%] bg-white px-2 py-1 rounded-full font-medium lg:text-sm lg:px-4 lg:py-2">
        {type}
      </div>
      <div className="p-3 grid grid-cols-1 gap-2 lg:p-5">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold lg:text-xl line-clamp-2">
            {name}
          </p>
          <div className="flex gap-2 items-center ">
            <StarIcon className="w-4 text-contrary lg:w-6" />
            <div className="text-sm lg:text-xl align-middle">4.5</div>
          </div>
        </div>
        <div className="font-light text-xs lg:text-base line-clamp-2">
          {address}
        </div>
        <div className="flex gap-2 items-center self-end">
          <MapPinIcon className="w-4 text-primary lg:w-6" />
          <p className="text-xs font-semibold lg:text-xl">{district}</p>
        </div>
        <div className="text-xs lg:text-base self-end">
          <span className="font-semibold text-sm lg:text-xl">
            {"Rp" + month_price.toLocaleString("en-US")}
          </span>{" "}
          /bulan
        </div>
      </div>
    </div>
  );
}

export default KostRecommendationCard;

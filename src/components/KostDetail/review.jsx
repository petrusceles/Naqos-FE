import React from 'react'
import { Rating } from '@material-tailwind/react';
import { ChevronDownIcon, StarIcon } from '@heroicons/react/24/solid';
function KostReview(props) {
  const updatedDate = new Date(props.updated_at);
  // Current date
  const currentDate = new Date();

  // Calculate the difference in months
  let monthsDiff =
    (currentDate.getFullYear() - updatedDate.getFullYear()) * 12 +
    (currentDate.getMonth() - updatedDate.getMonth());
  // const monthPast =
  return (
    <>
        <div className="w-full flex gap-4">
          <div className="overflow-hidden rounded-full w-[15%] h-max max-w-[80px]">
            <img
              src={props?.avatar_url}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-[1px] items-center lg:gap-1">
            <h2 className="font-semibold">{props.name}</h2>
            <p className="font-semibold text-[11px] lg:text-sm text-slate-500">
              {!monthsDiff ? "Baru saja" : monthsDiff + " bulan lalu"}
            </p>
            <Rating
              value={props?.star}
              readonly
              className="flex text-slate-600"
            />
            <div className="rating rating-xs rating-hidden"></div>
            <p className="text-xs lg:text-sm text-justify">{props?.review}</p>
          </div>
        </div>
    </>
  );
}

export default KostReview
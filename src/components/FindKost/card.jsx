import React from "react";
import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useKostReview } from "../../queries/review.js";
function FindKostCard(props) {
  // console.log(props?.kost);
  const reviews = useKostReview({ kost: props?.kost?._id });
  // console.log(reviews?.data?.data?.data);
  const starSum = reviews?.data?.data?.data?.reduce(
    (acc, obj) => acc + obj.star,
    0
  );
  const starAverage = starSum / reviews?.data?.data?.data?.length;
  const starCount = reviews?.data?.data?.data?.length;
  // console.log(starAverage);

  return (
    <Link
      to={`/detail/${props?.kost?._id}`}
      className="w-full flex flex-wrap rounded-xl overflow-hidden bg-white drop-shadow-md"
    >
      <div className="w-1/3">
        <img
          src={props?.kost?.outside_photos_url[0]}
          className="object-cover h-full"
        />
      </div>
      <div className="grid grid-cols-1 px-4 py-3 gap-3 w-2/3">
        <div className="flex w-full h-fit items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-[9px] font-semibold text-primary border-[1px] flex items-center justify-center rounded-full border-primary px-2 py-1 lg:text-sm">
              {props?.kost?.type?.name}
            </div>
            {props?.kost?.room_remaining <= 5 && (
              <div className="text-[9px] italic text-red-700 lg:text-xs">
                {"sisa " + props?.kost?.room_remaining + " kamar"}
              </div>
            )}
          </div>
          <HeartIcon className="w-5 lg:w-7" />
        </div>
        <div className=" bg-slate-100 px-2 py-1 rounded-md w-full">
          <div className="grid grid-cols-1 h-fit w-11/12 gap-1 lg:gap-0">
            <h2 className="text-sm font-semibold lg:text-lg lg:font-bold">
              {props?.kost?.name}
            </h2>
            <p className="text-[9px] line-clamp-2 text-justify lg:text-xs">
              {props?.kost?.description}
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-1 ">
            {!reviews.isLoading &&
              (starCount == undefined ? (
                <>
                  <StarIcon className="w-4 text-slate-500 lg:w-6" />
                  <div className="text-[13px] font-semibold flex items-center gap-1 lg:text-base align-middle">
                    No reviews
                  </div>
                </>
              ) : (
                <>
                  <StarIcon className="w-4 text-contrary lg:w-6" />
                  <div className="text-[13px] font-semibold flex items-center gap-1 lg:text-base align-middle">
                    {starAverage}{" "}
                    <span className="font-normal text-[9px] italic lg:text-xs">
                      {`(${starCount} reviews)`}
                    </span>
                  </div>
                </>
              ))}
            {/* <div className="text-[13px] font-semibold flex items-center gap-1 lg:text-base align-middle">
              4.5{" "}
              <span className="font-normal text-[9px] italic lg:text-xs">
                (7 reviews)
              </span>
            </div> */}
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="w-4 text-primary lg:w-6" />
            <div className="text-[11px] lg:text-sm">
              {props?.kost?.district.split(" ").slice(1).join(" ")}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[6px] flex-wrap items-center text-[9px] lg:text-sm lg:gap-2 ">
            {props?.kost?.room_facilities
              .filter((_, index) => index < 3)
              .map((val, indexMap) => {
                return (
                  <div
                    key={indexMap}
                    className=" font-semibold text-primary border-[1px] border-primary rounded-[4px] py-[2px] px-3"
                  >
                    {val.name}
                  </div>
                );
              })}
          </div>
          <div className="w-1/2 text-sm h-fit font-bold self-end text-end lg:text-lg">
            {"Rp" + props?.kost?.month_price.toLocaleString("en-US")}{" "}
            <span className="text-[9px] font-normal lg:text-sm">/bulan</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FindKostCard;

import React, { useState, useRef } from "react";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import {
  HeartIcon,
  ShareIcon,
  CheckCircleIcon,
  XCircleIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import WifiIcon from "../../assets/wifi-icon.svg";
import KostDetailRecommendationCard from "./card";
import "./style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import DatePicker from "react-date-picker";
import addweeks from "date-fns/addweeks";
import { Rating } from "@material-tailwind/react";
import KostReview from "./review.jsx";
import ReviewCard from "./reviewCard.jsx";

function getCategoryFromURL(url) {
  const splitBy = "/v";
  const categoryStartIndex = url.lastIndexOf(splitBy) + splitBy.length;
  const categoryEndIndex = url.indexOf("/", categoryStartIndex);
  return url.substring(categoryStartIndex, categoryEndIndex);
}

function KostDetail(props) {
  const [isPictureModalShow, setIsPictureModalShow] = useState(false);
  const [isReviewShow, setIsReviewShow] = useState(false);
  const [isRentBoxShow, setIsRentBoxShow] = useState(false);

  const photos_url = props.kost.room_photos_url.concat(
    props.kost.inside_photos_url,
    props.kost.outside_photos_url
  );
  // console.log(props.kost_recommendation);

  let priceTypeAvailable = {};

  priceTypeAvailable.minggu = props?.kost?.week_price && {
    price: props?.kost?.week_price,
    weeks: 1,
  };
  priceTypeAvailable.bulan = props?.kost?.month_price && {
    price: props?.kost?.month_price,
    weeks: 30,
  };
  priceTypeAvailable.tahun = props?.kost?.year_price && {
    price: props?.kost?.year_price,
    weeks: 365,
  };
  // console.log(priceTypeAvailable);

  const [selectedPriceType, setSelectedPriceType] = useState({
    price: props?.kost?.month_price,
    type: "bulan",
    weeks: 30,
  });

  const setSelectedPriceTypeOption = (event) => {
    setSelectedPriceType({
      type: event.target.value,
      price: priceTypeAvailable[event.target.value].price,
      weeks: priceTypeAvailable[event.target.value].weeks,
    });
  };
  // console.log(priceTypeAvailable);

  const [date, setDate] = useState(new Date());

  // console.log(props?.reviews);

  const starSum = props?.reviews?.reduce((acc, obj) => acc + obj.star, 0);
  const starAverage = starSum / props?.reviews?.length;
  const starCount = props?.reviews?.length;
  // console.log(starCount)
  // console.log(starAverage)

  return (
    <>
      {isReviewShow && (
        <div className="w-full h-full fixed bg-slate-300/40 z-40" />
      )}
      <div className="pt-24 pb-5 lg:pt-36 lg:pb-16">
        <div className="container flex flex-wrap px-8 gap-4 lg:gap-5 lg:justify-between">
          {/* Search bar and breadcrumbs */}
          <div className="w-full flex flex-wrap gap-2 lg:gap-5">
            <div className="flex relative w-full gap-3 items-center">
              <MagnifyingGlassIcon className="absolute w-4 left-3 lg:w-5" />
              <input
                placeholder="Mau ngekos dimana?"
                className="w-10/12 py-2 rounded-[3px] outline outline-2 -outline-offset-1 outline-slate-200 text-sm pr-3 pl-9 focus:outline-primary focus:-outline-offset-2 lg:w-11/12 lg:text-base lg:pl-10 lg:py-3 lg:rounded-md"
              />
              <button className="w-2/12 text-sm bg-primary text-white rounded-[3px] h-full font-semibold lg:w-1/12 lg:text-base lg:rounded-md">
                Cari
              </button>
            </div>
            <div className="text-xs font-medium breadcrumbs flex items-center w-full lg:text-base">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/find"}>Cari Kos</Link>
                </li>
                <li className="text-primary font-semibold underline">
                  {props?.kost?.name}
                </li>
              </ul>
            </div>
          </div>

          {/* Kost Pictures */}
          <div
            className="w-full flex h-64 gap-4 lg:h-[480px] cursor-pointer"
            onClick={() => setIsPictureModalShow(true)}
          >
            <div className="w-full overflow-hidden rounded-md shadow-md lg:w-[60%]">
              <img src={photos_url[0]} className="object-cover h-full w-full" />
            </div>
            <div className="hidden lg:w-[40%] lg:grid lg:grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-md shadow-md">
                <img
                  src={photos_url[1]}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={photos_url[2]}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={photos_url[3]}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>

          {/* Kost Pictures Modal */}
          {isPictureModalShow && (
            <>
              <div className="fixed bg-slate-50 h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99]">
                <div className="pt-6 container flex justify-between items-center max-w-[88%] lg:max-w-[60%]">
                  <div className="font-semibold">Foto Kos</div>
                  <XMarkIcon
                    className="w-7 cursor-pointer"
                    onClick={() => setIsPictureModalShow((prev) => !prev)}
                  />
                </div>
              </div>
              <Swiper
                slidesPerView={1}
                centerInsufficientSlides={true}
                autoHeight={false}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                id="swiper-pictures"
              >
                {photos_url.map((url, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        src={url}
                        alt={getCategoryFromURL(url)}
                        className="object-contain h-full w-full"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          )}

          {/* Rent Box */}
          <div
            className={`justify-self-end w-72 bg-white drop-shadow-xl px-0 py-3 flex flex-wrap gap-3 justify-center rounded-md fixed z-[30] top-[80%] -translate-y-1/2 right-[1%] ${
              isRentBoxShow ? "translate-x-0" : "translate-x-[90%]"
            } duration-200 ease-in-out lg:translate-x-0 lg:sticky lg:top-28 lg:w-[35%] lg:order-last lg:h-[100%] lg:translate-y-0 lg:rounded-lg lg:py-2 xl:w-[28%] lg:drop-shadow-2xl`}
          >
            <div className="w-full flex gap-2 ">
              <div
                className="w-[30%] h-full bg-contrary rounded-r-md text-slate-900 flex items-center text-[11px] justify-center overflow-hidden drop-shadow-lg cursor-pointer lg:hidden"
                onClick={() => {
                  setIsRentBoxShow((prev) => !prev);
                }}
              >
                <p className="-rotate-90 whitespace-nowrap font-semibold">
                  Sewa sekarang!
                </p>
              </div>
              <div className="w-auto flex flex-wrap gap-3 justify-center lg:py-4 lg:gap-3">
                <div className="flex flex-wrap justify-center w-full gap-3 pb-2 lg:gap-7 lg:pb-4">
                  <h3 className="font-bold text-2xl lg:text-3xl">
                    {"Rp" + selectedPriceType.price.toLocaleString("en-US")}
                    <span className="text-sm font-normal lg:text-lg">
                      {` /${selectedPriceType.type}`}
                    </span>
                  </h3>
                  <div className="w-full flex justify-center flex-wrap gap-2 lg:gap-4">
                    <div className="flex relative w-[70%]">
                      <DatePicker
                        onChange={setDate}
                        value={date}
                        className=" outline-none w-full rounded border-2 border-primary text-sm lg:text-base font-bold px-1 lg:p-2"
                      />
                      {/* <input
                      type="text"
                      className="text-xs w-full border-2 border-primary rounded px-2 py-[5px] focus:py-1 lg:text-base lg:px-3 lg:align-middle lg:py-3 lg:focus:py-[11px]"
                      placeholder="Check-In"
                      onFocus={(e) => {
                        e.target.type = "date";
                      }}
                      onBlur={(e) => {
                        e.target.type = "text";
                      }}
                    />
                    <CalendarIcon className="absolute w-4 right-[9%] top-[48%] -translate-y-1/2 lg:w-[22px] lg:right-[4%]" /> */}
                    </div>
                    <select
                      name="rent_time"
                      className="text-xs w-[70%] border-2 border-primary rounded px-2 py-[5px] lg:py-2 lg:text-base lg:px-3 select select-sm lg:select-md capitalize "
                      onChange={setSelectedPriceTypeOption}
                      defaultValue="bulan"
                    >
                      {Object.keys(priceTypeAvailable).map((key, value) => {
                        return (
                          priceTypeAvailable[key] && (
                            <option value={key} key={key}>
                              {key + "an"}
                            </option>
                          )
                        );
                      })}
                      {/* <option value="minggu">mingguan</option>
                    <option value="minggu">Mingguan</option>
                    <option value="bulan">Bulanan</option> */}
                    </select>
                  </div>
                </div>
                <div className="border w-[80%] border-dashed mt-1" />
                <div className="w-full flex flex-wrap justify-center lg:gap-3">
                  <div className="w-[80%] flex justify-between text-sm font-semibold lg:text-xl lg:font-bold">
                    <div>Checkout</div>
                    <div>
                      {" "}
                      {addweeks(
                        date,
                        selectedPriceType.weeks
                      ).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="w-[80%] flex justify-between text-sm font-semibold lg:text-xl lg:font-bold">
                    <div>Total</div>
                    <div>
                      {" "}
                      {"Rp" + selectedPriceType.price.toLocaleString("en-US")}
                    </div>
                  </div>
                </div>
                <button className="text-xs bg-primary w-[80%] text-white py-[6px] rounded font-semibold lg:text-lg lg:py-2 lg:rounded-md hover:bg-secondary hover:text-primary duration-100 ease-in-out">
                  Sewa
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap relative gap-3 lg:w-[62%] xl:w-[70%]">
            {/* Kost Front Detail */}
            <div className="w-full flex flex-wrap">
              <div className="w-full flex flex-wrap gap-5 box-content border-b-2 border-slate-200  pb-6">
                {/* Kost Title */}
                <div className="flex flex-wrap w-full">
                  <div className="flex w-full items-center gap-2 font-bold lg:gap-4 ">
                    <h1 className="text-xl lg:text-3xl">{props.kost.name}</h1>
                    <div className="text-sm font-semibold  rounded-sm px-3 py-2 self-center lg:text-xl bg-slate-200 lg:rounded-md">
                      {props.kost.type.name}
                    </div>
                  </div>
                  <h1 className="text-md lg:text-2xl font-bold uppercase">
                    {props.kost.province}
                  </h1>
                </div>

                {/* Kost Brief*/}
                <p className="text-xs text-justify w-full lg:text-base">
                  {props.kost.address}
                </p>

                {/* Kost Rate, Location, Wishlist Button, and Share Button */}
                <div className="flex justify-between w-full">
                  {/* Rating & Location */}
                  <div className="flex gap-3">
                    {/* Rating */}
                    {starCount == undefined ? (
                      <div className="flex gap-1 items-center">
                        <StarIcon className="w-4 text-slate-400 lg:w-6" />
                        <div className="text-sm font-semibold flex items-center gap-1 lg:text-base align-middle">
                          No reviews
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-1 items-center">
                        <StarIcon className="w-4 text-contrary lg:w-6" />
                        <div className="text-sm font-semibold flex items-center gap-1 lg:text-base align-middle">
                          {starAverage}{" "}
                          <span className="font-normal text-xs italic lg:text-sm">
                            {`(${starCount} reviews)`}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Location */}
                    <div className="flex gap-1 items-center">
                      <MapPinIcon className="w-4 text-primary lg:w-6" />
                      <div className="text-sm font-medium lg:text-sm">
                        {props.kost.district.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  </div>

                  {/* Save & Share */}
                  <div className="flex gap-3 justify-end text-[11px] font-medium lg:text-sm lg:font-semibold">
                    <button className="py-1 px-2 box-border border-2 rounded border-primary flex items-center gap-2">
                      <HeartIcon className="w-4 lg:w-6" />
                      Simpan
                    </button>
                    <button className="py-1 px-2 box-border border-[2px] rounded border-primary flex items-center gap-2">
                      <ShareIcon className="w-4 lg:w-6" />
                      Bagikan
                    </button>
                  </div>
                </div>

                {/* Kost Owner Profile Brief */}
                <div className="flex w-full gap-5 items-center">
                  <div className="overflow-hidden rounded-full w-20 h-20 lg:w-20 lg:h-w-20">
                    <img
                      src={props.kost.user.avatar_url}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <h2 className="text-sm font-semibold lg:text-lg">
                      {props.kost.user.name}
                    </h2>
                    <p className="text-xs lg:text-base">
                      {`Pemilik ` +
                        props.kost.name
                          .substring(0, props.kost.name.indexOf("Tipe"))
                          .trim()}
                    </p>
                    <button className="flex items-center text-xs font-semibold box-content px-2 border-2 border-primary rounded py-1 gap-1 lg:text-base w-fit">
                      {/* <PhoneIcon className="w-4 lg:w-6" /> */}
                      {props.kost.user.phone_number}
                    </button>
                  </div>
                </div>

                {/* FAQ Boxes */}
                {/* <div className="flex w-full gap-5 flex-wrap items-center">
                <div className="box-content border-2 border-slate-200 py-2 px-4 rounded-md overflow-hidden lg:py-3 bg-white">
                  <div
                    className="w-full flex justify-between cursor-pointer"
                    onClick={() => setIsFAQBoxShow((prev) => !prev)}
                  >
                    <div className="font-medium text-xs lg:text-lg lg:font-semibold">
                      FAQ BOX 1?
                    </div>
                    <ChevronRightIcon
                      className={`w-4 ${
                        isFAQBoxShow && "rotate-90"
                      }  duration-100 ease-in-out lg:w-6`}
                    />
                  </div>
                  <p
                    className={`text-[11px] duration-100 ease-in-out text-justify ${
                      isFAQBoxShow
                        ? "max-h-10 lg:max-h-20 pt-1 lg:pt-2"
                        : "max-h-0 opacity-0 pt-0"
                    } lg:text-base `}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed eros eleifend, tristique arcu eu, tincidunt quam. Aenean
                    ornare urna.
                  </p>
                </div>
              </div> */}
              </div>
            </div>

            {/* Kost Facilities */}
            <div className="w-full flex flex-wrap gap-3 pb-6 border-b-2 border-slate-200 box-content">
              <h3 className="font-semibold w-full text-sm lg:text-base">
                Fasilitas Kamar
              </h3>
              <div className="grid-rows-2 grid-flow-col grid w-full gap-y-3 gap-x-12 place-content-start">
                {props.kost.room_facilities.map((value, index) => {
                  return (
                    <div className="flex gap-3 items-center" key={index}>
                      <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                        <img src={value.icon_url} className="w-3" />
                      </div>
                      <p className="text-xs lg:text-sm">{value.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Kost For All Facilities */}
            <div className="w-full flex flex-wrap gap-3 pb-6 border-b-2 border-slate-200 box-content">
              <h3 className="font-semibold w-full text-sm lg:text-base">
                Fasilitas Bersama
              </h3>
              <div className="grid-rows-2 grid-flow-col grid w-full gap-y-3 gap-x-12 place-content-start">
                {props.kost.kost_facilities.map((value, index) => {
                  return (
                    <div className="flex gap-3 items-center" key={index}>
                      <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                        <img src={value.icon_url} className="w-3" />
                      </div>
                      <p className="text-xs lg:text-sm">{value.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Kost Rules */}
            <div className="w-full flex flex-wrap gap-3 pb-6 border-b-2 border-slate-200 box-content">
              <h3 className="font-semibold w-full text-sm lg:text-base">
                Peraturan Kos
              </h3>
              <div className="grid grid-cols-2 items-start">
                <div className="flex flex-wrap gap-2">
                  {props.kost.regulations.map((value, index) => {
                    return (
                      <div
                        className="flex w-full gap-2 items-center"
                        key={index}
                      >
                        <div>
                          <CheckCircleIcon className="w-5 text-green-600" />
                        </div>
                        <p className="text-xs lg:text-sm w-max-[90%]">
                          {value}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-2">
                  {props.kost.bans.map((value, index) => {
                    return (
                      <div
                        className="flex w-full gap-2 items-center "
                        key={index}
                      >
                        <div className="">
                          <XCircleIcon className="w-5 text-red-600" />
                        </div>
                        <p className="text-xs lg:text-sm w-[90%]">{value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Kost Description */}
            <div className="w-full flex flex-wrap gap-3 pb-6 border-b-2 border-slate-200 box-content">
              <h3 className="font-semibold w-full text-sm lg:text-base">
                Deskripsi Kos
              </h3>
              <p className="text-xs text-justify lg:text-sm">
                {props.kost.description}
              </p>
            </div>

            {/* Kost Reviews */}

            {!props?.reviews ? (
              <div className="w-full flex flex-wrap pt-4 pb-6 border-b-2 border-slate-200 justify-center text-sm font-semibold text-contrary">
                No Review
              </div>
            ) : (
              <div className="w-full flex flex-wrap gap-3 pb-2 border-b-2 border-slate-200 box-content justify-center">
                <div className="w-full flex gap-1">
                  <StarIcon className="w-4 lg:w-6" />
                  <div className=" font-semibold flex items-center gap-2 lg:text-base align-middle">
                    {starAverage}
                    {""}
                    <span className="font-normal text-sm italic">
                      {`(${starCount} reviews)`}
                    </span>
                  </div>
                </div>
                <KostReview
                  name={props?.reviews[0]?.user?.name}
                  star={props?.reviews[0]?.star}
                  updated_at={props?.reviews[0]?.updatedAt}
                  review={props?.reviews[0]?.review}
                  avatar_url={props?.reviews[0]?.user?.avatar_url}
                />
                <div
                  className="text-xs text-center font-semibold border-transparent cursor-pointer hover:text-slate-400  duration-100 ease-in-out lg:text-sm"
                  onClick={setIsReviewShow}
                >
                  Selengkapnya
                </div>
              </div>
            )}
            {isReviewShow && (
              <ReviewCard
                reviews={props?.reviews}
                reviewsState={{ isReviewShow, setIsReviewShow }}
              />
            )}

            {/* {props?.reviews?.map((value, index) => {
            return (
              <KostReview
                name={value?.user?.name}
                star={value?.star}
                updated_at={value?.updatedAt}
                review={value?.review}
                avatar_url={value?.user?.avatar_url}
              />
            );
          })} */}

            {/* Kost Recommendation */}
            <div className="w-full flex flex-wrap gap-3 lg:gap-0">
              <h3 className="font-semibold w-full text-sm lg:text-base gap-2 flex items-center">
                {"Kost lain dari "}
                <span className="text-primary bg-slate-300 py-1 px-2 rounded-md">
                  {props.kost.user.name}
                </span>
              </h3>
              <Swiper
                slidesPerView={1}
                centerInsufficientSlides={true}
                autoHeight={false}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={100}
              >
                {props?.kost_recommendation
                  .filter((val) => {
                    return val?._id !== props?.kost?._id;
                  })
                  .map((val, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <KostDetailRecommendationCard kost={val} />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KostDetail;

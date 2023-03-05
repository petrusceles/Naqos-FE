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
function KostDetail() {
  const [isPictureModalShow, setIsPictureModalShow] = useState(false);
  const [isFAQBoxShow, setIsFAQBoxShow] = useState(false);
  const [isRentBoxShow, setIsRentBoxShow] = useState(false);

  return (
    <div className="pt-24 pb-5 lg:pt-36 lg:pb-16">
      <div className="container flex flex-wrap px-8 gap-4 lg:gap-5">
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
              <li className="text-primary font-semibold underline">Nama Kos</li>
            </ul>
          </div>
        </div>

        {/* Kost Pictures */}
        <div
          className="w-full flex h-64 gap-4 lg:h-[480px] cursor-pointer"
          onClick={() => setIsPictureModalShow(true)}
        >
          <div className="w-full overflow-hidden rounded-sm lg:w-[60%]">
            <img
              src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677904244/NaqosV2/Kost/andrew-neel-B4rEJ09-Puo-unsplash_k3rsts.jpg"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="hidden lg:w-[40%] lg:grid lg:grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-sm">
              <img
                src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677904238/NaqosV2/Kost/beazy-pMY1mpaaUAs-unsplash_hmtiiw.jpg"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677904230/NaqosV2/Kost/99-films-48mTwDzizqE-unsplash_nvszou.jpg"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677904230/NaqosV2/Kost/99-films-48mTwDzizqE-unsplash_nvszou.jpg"
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
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677904244/NaqosV2/Kost/andrew-neel-B4rEJ09-Puo-unsplash_k3rsts.jpg"
                  alt="1"
                  className="object-contain h-full w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677904238/NaqosV2/Kost/beazy-pMY1mpaaUAs-unsplash_hmtiiw.jpg"
                  alt="2"
                  className="object-contain h-full w-full"
                />
              </SwiperSlide>
            </Swiper>
          </>
        )}

        <div className="w-full flex gap-3">
          <div className="w-full flex flex-wrap relative gap-3 lg:w-[70%]">
            {/* Kost Front Detail */}
            <div className="w-full flex flex-wrap">
              <div className="w-full flex flex-wrap gap-5 box-content border-b-2 border-slate-200  pb-6">
                {/* Kost Title */}
                <div className="flex flex-wrap w-full">
                  <div className="flex w-full items-center gap-2 font-bold">
                    <h1 className="text-xl lg:text-4xl">Kos Alamanda</h1>
                    <div className="text-sm font-semibold box-border border-[1px] border-primary px-2 py-[1px] rounded-full">
                      Campuran
                    </div>
                  </div>
                  <h1 className="text-lg lg:text-4xl font-bold">
                    Tipe Kamar Reguler Yogyakarta
                  </h1>
                </div>

                {/* Kost Brief*/}
                <p className="text-xs text-justify w-full lg:text-base">
                  Rincian alamat kos secara lengkap dan kode pos Rincian alamat
                  kos secara lengkap dan kode pos
                </p>

                {/* Kost Rate, Location, Wishlist Button, and Share Button */}
                <div className="flex justify-between w-full">
                  {/* Rating & Location */}
                  <div className="flex gap-3">
                    {/* Rating */}
                    <div className="flex gap-1 items-center">
                      <StarIcon className="w-4 text-contrary lg:w-6" />
                      <div className="text-sm font-semibold flex items-center gap-1 lg:text-base align-middle">
                        4.5{" "}
                        <span className="font-normal text-[9px] italic lg:text-sm">
                          (7 reviews)
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex gap-1 items-center">
                      <MapPinIcon className="w-4 text-primary lg:w-6" />
                      <div className="text-sm font-medium lg:text-sm">
                        Yogyakarta
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
                  <div className="overflow-hidden rounded-full w-20 h-20 lg:w-28 lg:h-28">
                    <img
                      src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677912434/NaqosV2/Owner%20Profile/photo3_z50agx.png"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    <h2 className="text-sm font-semibold lg:text-lg">Risma</h2>
                    <p className="text-xs lg:text-base">Pemilik Kos Alamanda</p>
                    <button className="flex items-center text-xs font-semibold box-content px-2 border-2 border-primary rounded py-1 gap-1 lg:text-base">
                      <PhoneIcon className="w-4 lg:w-6" />
                      0812-3456-7891
                    </button>
                  </div>
                </div>

                {/* FAQ Boxes */}
                <div className="flex w-full gap-5 flex-wrap items-center">
                  <div className="box-content border-2 border-slate-200 py-2 px-4 rounded-md overflow-hidden lg:py-3">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut sed eros eleifend, tristique arcu eu, tincidunt quam.
                      Aenean ornare urna.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kost Facilities */}
            <div className="w-full flex flex-wrap gap-3 pb-6 border-b-2 border-slate-200 box-content">
              <h3 className="font-semibold w-full text-sm">Fasilitas Kamar</h3>
              <div className="grid-rows-2 grid-flow-col grid w-full gap-y-3 gap-x-12 place-content-start">
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
              </div>
            </div>

            {/* Kost For All Facilities */}
            <div className="w-full flex flex-wrap gap-3 pb-6 border-b-2 border-slate-200 box-content">
              <h3 className="font-semibold w-full text-sm">
                Fasilitas Bersama
              </h3>
              <div className="grid-rows-2 grid-flow-col grid w-full gap-y-3 gap-x-12 place-content-start">
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-contrary-tertiary rounded-full w-5 h-5 flex justify-center items-center">
                    <img src={WifiIcon} className="w-3" />
                  </div>
                  <p className="text-xs">Wifi</p>
                </div>
              </div>
            </div>

            {/* Kost Rules */}
            <div className="w-full flex flex-wrap gap-3 pb-6 border-b-2 border-slate-200 box-content">
              <h3 className="font-semibold w-full text-sm">Peraturan Kos</h3>
              <div className="grid grid-cols-2">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex w-full gap-2 items-center">
                    <div className="w-[10%]">
                      <CheckCircleIcon className="w-5 text-green-600" />
                    </div>
                    <p className="text-xs w-[90%]">
                      Tamu yang menginap harus membayar
                    </p>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="w-[10%]">
                      <CheckCircleIcon className="w-5 text-green-600" />
                    </div>
                    <p className="text-xs w-[90%]">
                      Barang elektronik tertentu dikenakan biaya
                    </p>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="w-[10%]">
                      <CheckCircleIcon className="w-5 text-green-600" />
                    </div>
                    <p className="text-xs w-[90%]">
                      Dapat diisi maksimal 2 orang/kamar
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex w-full gap-2 items-center">
                    <div className="w-[10%]">
                      <XCircleIcon className="w-5 text-red-600" />
                    </div>
                    <p className="text-xs w-[90%]">Tidak untuk pasutri</p>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="w-[10%]">
                      <XCircleIcon className="w-5 text-red-600" />
                    </div>
                    <p className="text-xs w-[90%]">
                      Tidak boleh melewati jam malam
                    </p>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="w-[10%]">
                      <XCircleIcon className="w-5 text-red-600" />
                    </div>
                    <p className="text-xs w-[90%]">Tidak boleh membawa hewan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kost Description */}
            <div className="w-full flex flex-wrap gap-3 pb-6 border-b-2 border-slate-200 box-content">
              <h3 className="font-semibold w-full text-sm">Deskripsi Kos</h3>
              <p className="text-xs text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur fermentum dui vel diam tempor lobortis sit amet quis
                enim. Aliquam erat volutpat. Nam ac ipsum arcu. Proin finibus
                nisi non consequat sollicitudin. Etiam et fermentum neque. In
                nec vehicula turpis. Suspendisse suscipit, sem ac bibendum
                hendrerit, metus nulla pellentesque magna, gravida accumsan nisi
                est vitae dolor. Donec at lectus sit amet nisi vehicula
                consequat.
              </p>
            </div>

            {/* Kost Reviews */}
            <div className="w-full flex flex-wrap gap-3 pb-6 border-b-2 border-slate-200 box-content">
              <div className="w-full flex gap-1">
                <StarIcon className="w-4 lg:w-6" />
                <div className=" font-semibold flex items-center gap-2 lg:text-base align-middle">
                  4.5{""}
                  <span className="font-normal text-sm italic">
                    (7 reviews)
                  </span>
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="overflow-hidden rounded-full w-[15%] h-max">
                  <img
                    src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677912434/NaqosV2/Owner%20Profile/photo3_z50agx.png"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-[5px] items-center">
                  <h2 className="font-semibold">Hihang Hoheng</h2>
                  <p className="font-semibold text-[11px] text-slate-500">
                    2 bulan yang lalu
                  </p>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2"
                    />
                  </div>
                  <p className="text-xs text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur fermentum dui vel diam tempor lobortis sit amet
                    quis enim. Aliquam erat volutpat. Nam ac ipsum arcu. Proin
                    finibus nisi non consequat sollicitudin. Etiam et fermentum
                    neque. In nec vehicula turpis. Suspendisse suscipit, sem ac
                    bibendum hendrerit, metus nulla pellentesque magna, gravida
                    accumsan nisi est vitae dolor. Donec at lectus sit amet nisi
                    vehicula consequat.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center pt-4">
                <button className="flex gap-2 text-xs font-semibold text-slate-400 items-center">
                  Selengkapnya <ChevronDownIcon className="w-4" />
                </button>
              </div>
            </div>

            {/* Kost Recommendation */}
            <div className="w-full flex flex-wrap gap-3">
              <h3 className="font-semibold w-full text-sm">
                Tipe kamar lain dari kos ini
              </h3>
              <Swiper
                slidesPerView={1}
                centerInsufficientSlides={true}
                autoHeight={false}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <KostDetailRecommendationCard />
                </SwiperSlide>
                <SwiperSlide>
                  <KostDetailRecommendationCard />
                </SwiperSlide>
                <SwiperSlide>
                  <KostDetailRecommendationCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Rent Box */}
          <div
            className={`justify-self-end w-72 bg-white drop-shadow-2xl px-0 py-3 flex flex-wrap gap-3 justify-center rounded-md fixed z-[30] top-[80%] -translate-y-1/2 right-[1%] ${
              isRentBoxShow ? "translate-x-0" : "translate-x-[90%]"
            } duration-200 ease-in-out lg:translate-x-0 lg:sticky lg:top-72 lg:w-[30%] lg:h-80`}
          >
            <div className="w-full flex gap-2">
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
              <div className="w-auto flex flex-wrap gap-3 justify-center">
                <div className="flex flex-wrap justify-center w-full gap-3 pb-2">
                  <h3 className="font-bold text-2xl">
                    Rp1.000.000
                    <span className="text-sm font-normal"> /bulan</span>
                  </h3>
                  <div className="w-full flex justify-center flex-wrap gap-2">
                    <div className="w-[70%] flex justify-center relative">
                      <input
                        type="text"
                        className="text-xs w-full border-2 border-primary rounded px-2 py-[5px] focus:py-1"
                        placeholder="Check-In"
                        onFocus={(e) => {
                          e.target.type = "date";
                        }}
                        onBlur={(e) => {
                          e.target.type = "text";
                        }}
                      />
                      <CalendarIcon className="absolute w-4 right-[9%] top-1/2 -translate-y-1/2 " />
                    </div>
                    <select
                      name="rent_time"
                      className="text-xs w-[70%] border-2 border-primary rounded px-2 py-[5px]"
                    >
                      <option value="HARIAN">Harian</option>
                      <option value="MINGGUAN">Mingguan</option>
                      <option value="BULANAN">Bulanan</option>
                    </select>
                  </div>
                </div>
                <div className="border w-[80%] border-dashed" />
                <div className="w-full flex flex-wrap justify-center">
                  <div className="w-[80%] flex justify-between text-sm font-semibold ">
                    <div>Total</div>
                    <div>Rp1.000.000</div>
                  </div>
                </div>
                <button className="text-xs bg-primary w-[80%] text-white py-[6px] rounded font-semibold">
                  Sewa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KostDetail;

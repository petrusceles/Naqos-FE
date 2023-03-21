import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import ProfileWishlistKostCard from "../ProfileWishlistKostCard";
import KostNotFoundIcon from "../../../assets/kost-not-found-icon.svg";

function ProfileWishlist() {
  const [isFilterShow, setIsFilterShow] = useState(false);
  const [isTypeKostShow, setIsTypeKostShow] = useState(false);
  const [isRentDurationShow, setIsRentDurationShow] = useState(false);
  const [isSortByShow, setIsSortByShow] = useState(false);
  const [isRoomFacilitiesShow, setIsRoomFacilitiesShow] = useState(false);
  const [isTogetherFacilitiesShow, setIsTogetherFacilitiesShow] =
    useState(false);
  return (
    <div className="pt-24 pb-8 lg:pt-36 lg:pb-16">
      <div className="container flex flex-wrap px-8 gap-2 lg:gap-5">
        <div className="text-xs font-medium breadcrumbs flex items-center w-full lg:text-base">
          <ul>
            <li>
              <a>Profile</a>
            </li>
            <li className="text-primary font-semibold">Wishlist</li>
          </ul>
        </div>
        <div className="w-full flex flex-wrap gap-4 lg:gap-8 lg:flex-nowrap">
          <button
            className="text-[9px] items-center gap-2 outline outline-1 outline-primary capitalize font-semibold rounded-full px-3 py-1 flex group hover:bg-primary hover:text-white duration-150 ease-in-out active:scale-95 lg:hidden"
            onClick={() => {
              setIsFilterShow((prev) => !prev);
            }}
          >
            <AdjustmentsHorizontalIcon className="w-4 " />
            Filter
          </button>

          {/* <div className="w-full flex flex-wrap gap-1 lg:w-[70%]  justify-center py-12 lg:h-full lg:items-center ">
          <div className="flex items-center flex-wrap h-fit lg:gap-2">
            <div className="w-full flex justify-center py-4">
              <img src={KostNotFoundIcon} className="w-36 lg:w-52" />
            </div>
            <h1 className="w-full text-center font-semibold lg:text-xl">
              Kos yang kamu cari kosong :(
            </h1>
            <p className="w-full text-center text-xs lg:text-sm">
              Silahkan ubah filter untuk mencari kos lain yang tersedia
            </p>
          </div>
        </div> */}

          <div className="w-full flex flex-wrap gap-5 lg:w-[70%] lg:gap-8">
            <ProfileWishlistKostCard />
            <ProfileWishlistKostCard />
            <ProfileWishlistKostCard />
            <ProfileWishlistKostCard />
            <ProfileWishlistKostCard />
            <ProfileWishlistKostCard />
          </div>

          {isFilterShow && (
            <div className="fixed z-[999] bg-slate-500/20 w-full h-full top-0 left-0 lg:hidden" />
          )}

          <div
            className={`grid grid-cols-1 fixed bg-white shadow-lg w-8/12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] rounded-lg ${
              !isFilterShow && "scale-0"
            } duration-150 ease-in-out overflow-hidden origin-top lg:static lg:translate-x-0 lg:translate-y-0 lg:w-[30%] lg:z-0 lg:h-fit lg:p-3 lg:scale-100`}
          >
            <div className="w-full flex justify-between text-primary bg-slate-100 px-4 py-3 lg:hidden">
              <h2 className="font-semibold tracking-wide">Filter</h2>
              <XMarkIcon
                className="w-5 cursor-pointer"
                onClick={() => {
                  setIsFilterShow((prev) => !prev);
                }}
              />
            </div>
            <div className="w-full max-h-[500px] overflow-auto no-scrollbar lg:max-h-none">
              {/* Tipe Kos */}
              <div
                className={`flex flex-wrap px-4 py-3 duration-200 ease-in-out border-b-2 border-slate-50`}
              >
                <div
                  className="text-sm w-full font-semibold text-slate-400 flex justify-between cursor-pointer lg:py-1"
                  onClick={() => {
                    setIsTypeKostShow((prev) => !prev);
                  }}
                >
                  <p className="lg:text-lg">Tipe kos</p>
                  <ChevronDownIcon
                    className={`w-4 duration-150 ease-in-out ${
                      !isTypeKostShow && "-rotate-90"
                    } lg:w-6`}
                  />
                </div>
                <div
                  className={`form-control w-full grid grid-cols-1 px-3 gap-3 overflow-hidden duration-200 ease-in-out transition-all ${
                    isTypeKostShow ? "max-h-[300px] pt-4" : "max-h-0 opacity-0"
                  } origin-top-left lg:px-6`}
                >
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Semua tipe
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Putra
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Putri
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Campuran
                    </span>
                  </label>
                </div>
              </div>

              {/* Waktu Sewa */}
              <div
                className={`flex flex-wrap px-4 py-3 duration-200 ease-in-out border-b-2 border-slate-50`}
              >
                <div
                  className="text-sm w-full font-semibold text-slate-400 flex justify-between cursor-pointer  lg:py-1"
                  onClick={() => {
                    setIsRentDurationShow((prev) => !prev);
                  }}
                >
                  <p className="lg:text-lg">Waktu Sewa</p>
                  <ChevronDownIcon
                    className={`w-4 duration-150 ease-in-out ${
                      !isRentDurationShow && "-rotate-90"
                    } lg:w-6`}
                  />
                </div>
                <div
                  className={`form-control w-full grid grid-cols-1 px-3 gap-3 overflow-hidden duration-200 ease-in-out transition-all ${
                    isRentDurationShow
                      ? "max-h-[300px] pt-4"
                      : "max-h-0 opacity-0"
                  } origin-top-left lg:px-6`}
                >
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="radio"
                      name="rent-duration-radio"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Semua tipe
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="radio"
                      name="rent-duration-radio"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Putra
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="radio"
                      name="rent-duration-radio"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Putri
                    </span>
                  </label>
                </div>
              </div>

              {/* Urutkan */}
              <div
                className={`flex flex-wrap px-4 py-3 duration-200 ease-in-out border-b-2 border-slate-50`}
              >
                <div
                  className="text-sm w-full font-semibold text-slate-400 flex justify-between cursor-pointer  lg:py-1"
                  onClick={() => {
                    setIsSortByShow((prev) => !prev);
                  }}
                >
                  <p className="lg:text-lg">Urutkan</p>
                  <ChevronDownIcon
                    className={`w-4 duration-150 ease-in-out ${
                      !isSortByShow && "-rotate-90"
                    } lg:w-6`}
                  />
                </div>
                <div
                  className={`form-control w-full grid grid-cols-1 px-3 gap-3 overflow-hidden duration-200 ease-in-out transition-all ${
                    isSortByShow ? "max-h-[300px] pt-4" : "max-h-0 opacity-0"
                  } origin-top-left lg:px-6`}
                >
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="radio"
                      name="rent-duration-radio"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Harga termurah
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="radio"
                      name="rent-duration-radio"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Harga tertinggi
                    </span>
                  </label>
                </div>
              </div>

              {/* Fasilitas Kamar */}
              <div
                className={`flex flex-wrap px-4 py-3 duration-200 ease-in-out border-b-2 border-slate-50`}
              >
                <div
                  className="text-sm w-full font-semibold text-slate-400 flex justify-between cursor-pointer  lg:py-1"
                  onClick={() => {
                    setIsRoomFacilitiesShow((prev) => !prev);
                  }}
                >
                  <p className="lg:text-lg">Fasilitas Kamar</p>
                  <ChevronDownIcon
                    className={`w-4 duration-150 ease-in-out ${
                      !isRoomFacilitiesShow && "-rotate-90"
                    } lg:w-6`}
                  />
                </div>
                <div
                  className={`form-control w-full grid grid-cols-2 grid-flow-row px-3 gap-3 overflow-hidden duration-200 ease-in-out transition-all ${
                    isRoomFacilitiesShow
                      ? "max-h-[300px] pt-4"
                      : "max-h-0 opacity-0"
                  } origin-top-left lg:px-6`}
                >
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Semua
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      KM dalam
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Air panas
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Listrik
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Kipas angin
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Lemari
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Wifi
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      AC
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      TV
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Meja
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      Kursi
                    </span>
                  </label>
                </div>
              </div>

              {/* Fasilitas Bersama */}
              <div
                className={`flex flex-wrap px-4 py-3 duration-200 ease-in-out  border-b-2 border-slate-50 `}
              >
                <div
                  className="text-sm w-full font-semibold text-slate-400 flex justify-between cursor-pointer  lg:py-1"
                  onClick={() => {
                    setIsTogetherFacilitiesShow((prev) => !prev);
                  }}
                >
                  <p className="lg:text-lg">Fasilitas Bersama</p>
                  <ChevronDownIcon
                    className={`w-4 duration-150 ease-in-out ${
                      !isTogetherFacilitiesShow && "-rotate-90"
                    } lg:w-6`}
                  />
                </div>
                <div
                  className={`form-control w-full grid grid-cols-2 grid-flow-row px-3 gap-3 overflow-hidden duration-200 ease-in-out transition-all ${
                    isTogetherFacilitiesShow
                      ? "max-h-[300px] pt-4"
                      : "max-h-0 opacity-0"
                  } origin-top-left lg:px-6`}
                >
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Semua
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Dapur
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Ruang tamu
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Kulkas
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Dispenser
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      TV
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Mesin cuci
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Garasi
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Penjaga kos
                    </span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      Laundry
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-full justify-center py-3 ">
              <button className="bg-primary text-white text-sm w-11/12 py-2 rounded-md font-semibold lg:text-lg">
                Terapkan Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileWishlist;

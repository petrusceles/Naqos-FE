import React from "react";
import { useState } from "react";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const time = ["Mingguan", "Bulanan", "Tahunan"];
const timeEnglish = {
  Mingguan: "week",
  Bulanan: "month",
  Tahunan: "year",
};
function FindKostFilter({
  isFilterShowState,
  kostFacility,
  roomFacility,
  kostType,
  filterReducer,
}) {
  const [isTypeKostShow, setIsTypeKostShow] = useState(false);
  const [isRentDurationShow, setIsRentDurationShow] = useState(false);
  const [isSortByShow, setIsSortByShow] = useState(false);
  const [isRoomFacilitiesShow, setIsRoomFacilitiesShow] = useState(false);
  const [isTogetherFacilitiesShow, setIsTogetherFacilitiesShow] =
    useState(false);

  useEffect(() => {
    console.log(filterReducer?.filterState);
  }, [filterReducer?.filterState]);
  // console.log(kostFacility);
  return (
    <>
      <div
        className={`grid grid-cols-1 fixed bg-white shadow-lg w-8/12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] rounded-lg ${
          !isFilterShowState.isFilterShow && "scale-0"
        } duration-150 ease-in-out overflow-hidden origin-top lg:static lg:translate-x-0 lg:translate-y-0 lg:w-[30%] lg:z-0 lg:h-fit lg:p-3 lg:scale-100`}
      >
        <div className="w-full flex justify-between text-primary bg-slate-100 px-4 py-3 lg:hidden">
          <h2 className="font-semibold tracking-wide">Filter</h2>
          <XMarkIcon
            className="w-5 cursor-pointer"
            onClick={() => {
              isFilterShowState.setIsFilterShow((prev) => !prev);
            }}
          />
        </div>
        <div className="w-full max-h-[500px] overflow-auto no-scrollbar lg:max-h-none">
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
                  name="price-sorting-radio"
                  className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                  value={"asc"}
                  onChange={(e) => {
                    filterReducer?.filterDispatch({
                      type: "sort_price_handle",
                      payload: {
                        sort_price: e.target.value,
                      },
                    });
                  }}
                />
                <span className="label-text text-xs font-medium lg:text-sm ">
                  Harga termurah
                </span>
              </label>
              <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                <input
                  type="radio"
                  name="price-sorting-radio"
                  className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                  value={"desc"}
                  onChange={(e) => {
                    filterReducer?.filterDispatch({
                      type: "sort_price_handle",
                      payload: {
                        sort_price: e.target.value,
                      },
                    });
                  }}
                />
                <span className="label-text text-xs font-medium lg:text-sm ">
                  Harga tertinggi
                </span>
              </label>
            </div>
          </div>
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
                  name="Semua"
                  onChange={(e) => {
                    filterReducer.filterDispatch({
                      type: "kost_type_select_all_handle",
                      payload: {
                        all_kost_types: kostType?.map((type) => type._id),
                      },
                    });
                  }}
                  checked={
                    filterReducer?.filterState?.is?.is_kost_type_check_all
                  }
                />
                <span className="label-text text-xs font-medium lg:text-sm">
                  Semua
                </span>
              </label>
              {kostType?.map((type, index) => {
                return (
                  <label
                    className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4"
                    key={type?._id}
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                      name={type?.name + "KostType"}
                      checked={filterReducer?.filterState?.kost_type?.includes(
                        type?._id
                      )}
                      onChange={(e) => {
                        filterReducer?.filterDispatch({
                          type: "kost_type_click_handle",
                          payload: {
                            kost_type: type?._id,
                            checked: e.target.checked,
                          },
                        });
                      }}
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      {type?.name}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Waktu Sewa */}
          <div
            className={`flex flex-wrap px-4 py-3 duration-200 ease-in-out border-b-2 border-slate-50`}
          >
            <div
              className="text-sm w-full font-semibold text-slate-400 flex justify-between cursor-pointer lg:py-1"
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
                isRentDurationShow ? "max-h-[300px] pt-4" : "max-h-0 opacity-0"
              } origin-top-left lg:px-6`}
            >
              <label className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                  onChange={(e) => {
                    filterReducer.filterDispatch({
                      type: "time_select_all_handle",
                      payload: {
                        all_times: time?.map(
                          (timeValue) => timeEnglish[timeValue]
                        ),
                      },
                    });
                  }}
                  checked={filterReducer?.filterState?.is?.is_time_check_all}
                />
                <span className="label-text text-xs font-medium lg:text-sm">
                  Semua
                </span>
              </label>
              {time?.map((timeValue, index) => {
                return (
                  <label
                    className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                      name={timeValue}
                      checked={filterReducer?.filterState?.time?.includes(
                        timeEnglish[timeValue]
                      )}
                      onChange={(e) => {
                        filterReducer?.filterDispatch({
                          type: "time_click_handle",
                          payload: {
                            time: timeEnglish[timeValue],
                            checked: e.target.checked,
                          },
                        });
                      }}
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      {timeValue}
                    </span>
                  </label>
                );
              })}
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
                  name="AllRoomFacility"
                  onChange={(e) => {
                    filterReducer.filterDispatch({
                      type: "room_facility_select_all_handle",
                      payload: {
                        all_room_facilities: roomFacility?.map(
                          (facility) => facility._id
                        ),
                      },
                    });
                  }}
                  checked={
                    filterReducer?.filterState?.is_room_facility_check_all
                  }
                />
                <span className="label-text text-xs font-medium lg:text-sm">
                  Semua
                </span>
              </label>
              {roomFacility?.map((facility, index) => {
                return (
                  <label
                    className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4"
                    key={facility?._id}
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                      name={facility?.name + "RoomFacility"}
                      checked={filterReducer?.filterState?.room_facility?.includes(
                        facility?._id
                      )}
                      onChange={(e) => {
                        filterReducer?.filterDispatch({
                          type: "room_facility_click_handle",
                          payload: {
                            room_facility: facility?._id,
                            checked: e.target.checked,
                          },
                        });
                      }}
                    />
                    <span className="label-text text-xs font-medium lg:text-sm">
                      {facility?.name}
                    </span>
                  </label>
                );
              })}
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
                  name="AllKostFacility"
                  onChange={(e) => {
                    filterReducer.filterDispatch({
                      type: "kost_facility_select_all_handle",
                      payload: {
                        all_kost_facilities: kostFacility?.map(
                          (facility) => facility._id
                        ),
                      },
                    });
                  }}
                  checked={
                    filterReducer?.filterState?.is_kost_facility_check_all
                  }
                />
                <span className="label-text text-xs font-medium lg:text-sm ">
                  Semua
                </span>
              </label>
              {kostFacility?.map((facility, index) => {
                return (
                  <label
                    className="label cursor-pointer flex justify-start gap-2 items-center p-0 lg:gap-4"
                    key={facility?._id}
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 checked:accent-primary cursor-pointer lg:w-5 lg:h-5"
                      name={facility?.name + "KostFacility"}
                      checked={filterReducer?.filterState?.kost_facility?.includes(
                        facility?._id
                      )}
                      onChange={(e) => {
                        filterReducer?.filterDispatch({
                          type: "kost_facility_click_handle",
                          payload: {
                            kost_facility: facility?._id,
                            checked: e.target.checked,
                          },
                        });
                      }}
                    />
                    <span className="label-text text-xs font-medium lg:text-sm ">
                      {facility?.name}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap w-full justify-center py-3 ">
          <button className="bg-primary text-white text-sm w-11/12 py-2 rounded-md font-semibold lg:text-lg">
            Terapkan Filter
          </button>
        </div> */}
      </div>
    </>
  );
}

export default FindKostFilter;

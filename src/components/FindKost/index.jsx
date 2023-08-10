import React, { useReducer, useState } from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import FindKostCard from "./card";
import FindKostFilter from "./filter.jsx";
import {
  useKostFacility,
  useKostType,
  useRoomFacility,
} from "../../queries/filter.js";

import FilterReducer from "./reducer/filterReducer.js";
import { useAllKost } from "../../queries/kost.js";
import FindKostLoading from "./loading.jsx";
import { Link } from "react-router-dom";
import FindKostNotFound from "./notFound.jsx";
function FindKost(props) {
  const [isFilterShow, setIsFilterShow] = useState(false);

  const kostFacility = useKostFacility();
  const kostType = useKostType();
  const roomFacility = useRoomFacility();

  const [filterState, filterDispatch] = useReducer(FilterReducer, {
    is: {
      is_kost_type_check_all: false,
      is_kost_facility_check_all: false,
      is_room_facility_check_all: false,
      is_time_check_all: false,
    },
    kost_type: [],
    time: [],
    room_facility: [],
    kost_facility: [],
    sort_price: null,
  });

  const [keyword, setKeyword] = useState(props.keyword);

  // const [query, setQuery] = useState()

  const kost = useAllKost({
    sorted_by: filterState?.sort_price && "month_price",
    sort: filterState?.sort_price,
    search_by: filterState,
    keyword,
  });

  console.log(kost?.data?.data?.data?.kosts);

  return (
    <div className="pt-24 pb-8 lg:pt-36 lg:pb-16">
      <div className="container flex flex-wrap px-8 gap-2 lg:gap-5">
        <div className="w-full flex flex-wrap gap-2 sticky top-0 lg:gap-5">
          <div className="flex relative w-full gap-3 items-center">
            <MagnifyingGlassIcon className="absolute w-4 left-3 lg:w-5" />
            <input
              placeholder="Mau ngekos dimana?"
              className="w-full py-2 rounded-[3px] outline outline-2 -outline-offset-1 outline-slate-200 text-sm pr-3 pl-9 focus:outline-primary focus:-outline-offset-2 lg:text-base lg:pl-10 lg:py-3 lg:rounded-md"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            />
          </div>
          <div className="text-xs font-medium breadcrumbs flex items-center w-full lg:text-base">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-primary font-semibold underline">Cari Kos</li>
            </ul>
          </div>
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

          {kost.isFetching ? (
            <FindKostLoading />
          ) : kost?.error?.response?.status == 404 ? (
            <FindKostNotFound />
          ) : (
            <div className="w-full flex flex-wrap gap-5 lg:w-[70%] lg:gap-8  h-fit">
              {kost?.data?.data?.data?.kosts?.map((kost) => {
                return <FindKostCard kost={kost} />;
              })}
            </div>
          )}

          {isFilterShow && (
            <>
              <div className="fixed z-[999] bg-slate-500/20 w-full h-full top-0 left-0 lg:hidden" />
            </>
          )}

          {kostFacility.isLoading ||
          roomFacility.isLoading ||
          kostType.isLoading ? (
            <div
              className={`grid grid-cols-1 fixed bg-slate-300/50 w-8/12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] rounded-lg duration-150 ease-in-out overflow-hidden origin-top lg:static lg:translate-x-0 lg:translate-y-0 lg:w-[30%] lg:z-0 lg:p-3 lg:scale-100 lg:h-96`}
            />
          ) : (
            <FindKostFilter
              isFilterShowState={{ isFilterShow, setIsFilterShow }}
              kostFacility={kostFacility?.data?.data?.data?.kost_facilities}
              roomFacility={roomFacility?.data?.data?.data?.room_facilities}
              kostType={kostType?.data?.data?.data?.kost_types}
              filterReducer={{ filterState, filterDispatch }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FindKost;

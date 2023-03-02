import React from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";
import FindKostCard from "./card";

function FindKost() {
  return (
    <div className="pt-24">
      <div className="container flex flex-wrap px-8 gap-2 ">
        <div className="w-full flex flex-wrap gap-2 sticky top-0">
          <div className="flex relative w-full gap-3 items-center">
            <MagnifyingGlassIcon className="absolute w-4 left-3" />
            <input
              placeholder="Mau ngekos dimana?"
              className="w-10/12 py-2 rounded-[3px] outline outline-2 -outline-offset-1 outline-slate-200 text-sm pr-3 pl-9 focus:outline-primary focus:-outline-offset-2"
            />
            <button className="w-2/12 text-sm bg-primary text-white rounded-[3px] h-full font-semibold">
              Cari
            </button>
          </div>
          <div className="text-xs font-medium breadcrumbs flex items-center w-full">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li className="text-primary font-semibold underline">Cari Kos</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-4">
          <button className="text-[9px] items-center gap-2 outline outline-1 outline-primary capitalize font-semibold rounded-full px-3 py-1 flex group hover:bg-primary hover:text-white duration-150 ease-in-out active:scale-95">
            <AdjustmentsHorizontalIcon className="w-4 "/>
            Filter
          </button>

          <div className="w-full flex flex-wrap gap-5">
            <FindKostCard />
            <FindKostCard />
            <FindKostCard />
            <FindKostCard />
            <FindKostCard />
            <FindKostCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindKost;

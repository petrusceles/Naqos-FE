import React, { useState } from "react";
import OwnerDashboardSidebar from "../ownerDashboardSidebar";
import { PlusIcon, MapPinIcon } from "@heroicons/react/24/solid";
import ChildLoading from "../../AddOn/childLoading.jsx";
import { useAllKost } from "../../../queries/kost.js";
import OwnerDashboardCard from "./card.jsx";
import OwnerDashboardNotFound from "./notFound.jsx";
import { Link } from "react-router-dom";
function OwnerDashboardProperty(props) {
  const [keyword, setKeyword] = useState("");
  const kost = useAllKost({
    search_by: {
      user: props?.user?._id,
    },
    keyword: keyword,
  });

  return (
    <div className="h-full w-full grid grid-cols-4">
      <OwnerDashboardSidebar />
      <div className="col-span-3 grid pt-40 place-content-start px-10 gap-8 relative grid-cols-1">
        <div className="flex flex-wrap gap-6 w-full relative ">
          <Link
            className="bg-primary font-semibold text-white px-6 py-3 rounded-md flex items-center gap-3 w-fit hover:bg-secondary hover:text-slate-800 hover:shadow-lg duration-200 ease-in-out active:shadow-none"
            to={"/owner/data"}
          >
            <PlusIcon className="w-7" />
            <span>Tambah Properti</span>
          </Link>
          <input
            className="border-2 rounded-md grow px-3"
            placeholder="Cari kos"
            onChange={(e) => {
              setKeyword(e?.target?.value);
            }}
            value={keyword}
          />
        </div>
        {kost?.isLoading ? (
          <div className="w-full flex items-center justify-center h-full absolute">
            <ChildLoading className="w-1/4" />
          </div>
        ) : kost?.isError ? (
          <div className="flex justify-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute">
            <OwnerDashboardNotFound />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {kost?.data?.data?.data?.kosts?.map((kost) => {
              return <OwnerDashboardCard kost={kost} keyword={kost?._id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default OwnerDashboardProperty;

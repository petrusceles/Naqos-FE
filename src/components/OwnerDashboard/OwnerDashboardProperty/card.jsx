import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { createSearchParams, useNavigate } from "react-router-dom";
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname, params) =>
    navigate({ pathname, search: `?${createSearchParams(params)}` });
};

function OwnerDashboardCard(props) {
  const navigateSearch = useNavigateSearch()
  const onEditClick = (e) => {
    e?.preventDefault();
    console.log("MASUK")
    navigateSearch(`/owner/data`, {
      state: "update",
      kost_id: props?.kost?._id,
    });
  };
  return (
    <>
      <div className="grid gap-3 w-full">
        <div className="w-full bg-white rounded-3xl shadow-lg grid grid-cols-2 py-10 px-14 gap-8">
          <div className="grid gap-4 min-h-[180px]">
            <div className="border-2 border-primary rounded-full py-1 px-2 font-semibold text-primary text-sm w-fit h-fit">
              {props?.kost?.type?.name}
            </div>
            <div className="grid">
              <h3 className="text-xl font-bold line-clamp-2">
                {props?.kost?.name}
              </h3>
              <p className="leading-tight text-sm line-clamp-2">
                {props?.kost?.address}
              </p>
            </div>
            <div className="flex gap-1 h-fit self-end">
              <MapPinIcon className="w-6" />
              <p className="text-lg capitalize">
                {props?.kost?.province?.toLowerCase()}
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl max-w-60 flex items-center justify-self-end">
            <img
              src={props?.kost?.outside_photos_url[0]}
              className="object-cover w-full h-full"
            />
          </div>
          <button className="border-[3px] font-semibold text-primary py-2 box-border rounded-md border-primary">
            Hapus Kos
          </button>
          <button
            className="bg-primary text-white rounded-md py-2 font-semibold"
            onClick={(e) => {onEditClick(e)}}
          >
            Edit Kos
          </button>
        </div>
      </div>
    </>
  );
}

export default OwnerDashboardCard;

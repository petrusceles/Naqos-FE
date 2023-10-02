import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SeekerIcon from "../../assets/seeker-icon.svg";
import OwnerIcon from "../../assets/owner-icon.svg";
import { Link } from "react-router-dom";
import { useUserRole } from "../../queries/auth.js";
function CTAuthModal({ setIsModalShow }) {
  const userRole = useUserRole();
  console.log(
    userRole?.data?.data?.data?.roles?.filter(
      (value) => value?.name == "tenant"
    )
  );
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] bg-white drop-shadow-xl p-5 rounded-xl justify-center gap-5 flex flex-wrap items-center max-w-md lg:p-8">
      <div className="w-full relative">
        <h2 className="font-semibold text-center text-xl lg:text-2xl">
          Daftar Sebagai
        </h2>
        <XMarkIcon
          className="w-7 absolute right-0 top-1/2 -translate-y-1/2 lg:w-8 cursor-pointer"
          onClick={() => {
            setIsModalShow(false);
          }}
        />
      </div>
      <Link
        to={`/register?role=${
          userRole?.data?.data?.data?.roles?.filter(
            (value) => value?.name == "buyer"
          )[0]?._id
        }`}
        className="flex p-2 border-2 border-primary rounded-lg items-center text-sm min-h-[110px] min-w-[300px] flex-wrap w-full"
      >
        <div className="w-1/3 flex justify-center">
          <img src={SeekerIcon} className="max-w-[50px]" />
        </div>
        <p className="w-2/3 lg:text-lg font-medium">Pencari Kos</p>
      </Link>
      <Link
        to={`/register?role=${
          userRole?.data?.data?.data?.roles?.filter(
            (value) => value?.name == "tenant"
          )[0]?._id
        }`}
        className="flex p-2 border-2 border-primary rounded-lg items-center text-sm min-h-[110px] min-w-[300px] flex-wrap w-full"
      >
        <div className="w-1/3 flex justify-center">
          <img src={OwnerIcon} className="max-w-[64px]" />
        </div>
        <p className="w-2/3 lg:text-lg font-medium">Pemilik Kos</p>
      </Link>
    </div>
  );
}

export default CTAuthModal;

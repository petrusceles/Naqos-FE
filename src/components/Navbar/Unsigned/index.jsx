import React, { useState } from "react";
import logoNaqos from "../../../assets/naqos-logo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import CTAuthModal from "../../CTAuthModal";
import { Link } from "react-router-dom";
function NavbarUnsigned() {
  const [menu, setMenu] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  return (
    <>
      {isModalShow && <CTAuthModal setIsModalShow={setIsModalShow} />}
      <div className="shadow-md bg-white lg:py-3 fixed w-full z-30">
        <div className="flex flex-wrap py-4 px-5 justify-between items-center lg:px-4 lg:flex-nowrap lg:py-0 w-full container relative ">
          <Link to="/" className="w-1/3">
            <img
              src={logoNaqos}
              className="max-w-[120px] lg:max-w-[200px] w-full "
            />
          </Link>

          <Bars3Icon
            className="text-slate-800 cursor-pointer lg:hidden max-w-[30px]"
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          />
          <div
            className={`absolute bg-white drop-shadow-md inset-y-0 w-1/2 right-0 px-5 h-[100vh] py-5 text-sm font-semibold transition-all duration-200 ease-in-out max-w-xs ${
              menu ? " translate-x-[0%]" : " translate-x-[100%] hidden"
            } lg:static lg:drop-shadow-none lg:translate-x-[0%] lg:px-0 lg:bg-inherit lg:text-base lg:justify-end lg:max-w-lg lg:block lg:h-fit z-50`}
          >
            <div className="flex flex-wrap items-center justify-between mb-6 lg:mb-0  lg:hidden">
              <h1 className="text-primary text-lg">Menu</h1>
              <XMarkIcon
                className="max-w-[30px] cursor-pointer"
                onClick={() => {
                  setMenu((prev) => !prev);
                }}
              />
            </div>
            <div className="flex flex-wrap w-full gap-4 lg:justify-end lg:pr-2 lg:gap-7">
              <Link
                to={"/login"}
                className="w-full py-2 bg-slate-100 rounded-md text-primary lg:w-1/3 hover:drop-shadow-md duration-100 ease-in-out text-center"
              >
                Masuk
              </Link>
              <button
                className="w-full py-2 bg-primary text-white rounded-md lg:w-1/3 hover:drop-shadow-md duration-100 ease-in-out"
                onClick={() => {
                  setIsModalShow(true);
                }}
              >
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarUnsigned;

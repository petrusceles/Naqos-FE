import React from "react";
import { CameraIcon } from "@heroicons/react/24/solid";
import LogoutModal from "./logoutModal";
import { useUser } from "../../../queries/auth.js";
import Loading from "../../AddOn/Loading.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLogout } from "../../../queries/auth.js";
import { toast } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
function ProfileDetail() {
  const user = useUser();
  console.log(user?.data?.data?.data);
  const logout = useLogout();
  const [progressLoading, setProgressLoading] = useState(0);
  const navigate = useNavigate();
  const onLogout = async (e) => {
    e.preventDefault();
    try {
      setProgressLoading(50);
      await logout.mutateAsync();
      navigate("/");
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setProgressLoading(100);
    }
  };
  return (
    <>
      {/* <LogoutModal /> */}
      {user?.isLoading && <Loading />}
      <div className="pt-24 pb-8 lg:pt-36 lg:pb-16">
        <div className="container flex flex-wrap px-8 gap-4">
          <div className="text-xs font-medium breadcrumbs flex items-center w-full lg:text-base">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-primary font-semibold">Profil</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 w-full gap-3  lg:grid-cols-3">
            <div className="items-center grid grid-cols-1 justify-items-center gap-2 lg:self-start lg:py-14">
              <div className="relative self-end">
                <div className="overflow-hidden h-24 w-24 rounded-full self-end lg:h-40 lg:w-40">
                  <img
                    src={user?.data?.data?.data?.avatar_url}
                    className="object-center object-cover w-full h-full"
                  />
                </div>
                <div className="absolute w-6 h-6 rounded-full bg-gray-400 z-10 right-[5%] top-[75%] flex items-center justify-center lg:h-9 lg:w-9">
                  <CameraIcon className="text-white w-3 lg:w-4" />
                </div>
              </div>
              <p className="text-center text-xs font-bold lg:text-xl">
                {user?.data?.data?.data?.name}
              </p>
            </div>

            <div className="grid grid-cols-1 w-full gap-3 lg:col-span-2 lg:gap-7">
              <div className=" bg-secondary rounded-md flex flex-wrap pt-3 px-4 lg:px-8 lg:pt-5">
                <div className="flex justify-between w-full text-xs font-semibold lg:text-lg">
                  <h1>Informasi Akun</h1>
                  <Link to={"/profile/edit"}>Edit Profil</Link>
                </div>
                <div className="flex flex-wrap w-full gap-2 px-3 pt-4 pb-7 text-[11px] lg:text-base lg:gap-5 lg:px-8 lg:pb-12 lg:pt-7">
                  <div className="w-full flex border-b border-primary pb-1 lg:pb-2">
                    <p className="w-3/4 font-medium">Nama Lengkap</p>
                    <p className="w-full">{user?.data?.data?.data?.name}</p>
                  </div>
                  <div className="w-full flex border-b border-primary pb-1 lg:pb-2">
                    <p className="w-3/4 font-medium">No HP</p>
                    <p className="w-full">
                      {user?.data?.data?.data?.phone_number}
                    </p>
                  </div>
                  <div className="w-full flex border-b border-primary pb-1 lg:pb-2">
                    <p className="w-3/4 font-medium">Email</p>
                    <p className="w-full">{user?.data?.data?.data?.email}</p>
                  </div>
                </div>
              </div>

              <div className=" bg-secondary rounded-md flex flex-wrap pt-3 px-4 lg:px-8 lg:pt-5">
                <div className="flex justify-between w-full text-xs font-semibold lg:text-lg">
                  <h1>Login & Security</h1>
                  <div>Edit Password</div>
                </div>
                <div className="flex flex-wrap w-full gap-2 px-3 pt-4 pb-7 text-[11px] lg:text-base lg:gap-5 lg:px-8 lg:pb-12 lg:pt-7">
                  <div className="w-full flex border-b border-primary pb-1 lg:pb-2">
                    <p className="w-3/4 font-medium">Password</p>
                    <p className="w-full">************</p>
                  </div>
                </div>
              </div>
              <div
                className="w-full text-end text-xs font-semibold px-4 text-red-600 lg:text-base cursor-pointer"
                onClick={onLogout}
              >
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDetail;

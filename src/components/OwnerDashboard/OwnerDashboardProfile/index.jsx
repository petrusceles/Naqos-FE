import React from "react";
import OwnerDashboardSidebar from "../ownerDashboardSidebar";
import ChildLoading from "../../AddOn/childLoading.jsx";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useLogout, useUser } from "../../../queries/auth.js";
import { toast } from "react-toastify";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
function OwnerDashboardProfile() {
  const user = useUser(true);

  
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
      <LoadingBar
        waitingTime={50}
        color="#0A008A"
        progress={progressLoading}
        height="5px"
      />
      <div className="h-full w-full grid grid-cols-4">
        <OwnerDashboardSidebar />
        {user?.isLoading ? (
          <div className="col-span-3 grid justify-items-center items-center ">
            <div className="w-1/4">
              <ChildLoading />
            </div>
          </div>
        ) : (
          <div className="col-span-3 grid pt-44 justify-items-center px-14 content-start gap-6 pb-20">
            <div className="w-40 h-40 rounded-full overflow-hidden">
              <img
                src={user.data?.data?.data?.avatar_url}
                className="object-cover h-full w-full object-center"
              />
            </div>
            <div className="text-2xl font-semibold text-center ">
              {user.data?.data?.data?.name}
            </div>
            <div className="grid w-full place-self-stretch bg-secondary rounded-2xl py-8 px-8">
              <div className="font-semibold w-full flex justify-between text-xl">
                <p>Informasi Akun</p>
                <Link to={"edit"} className="text-slate-500 cursor-pointer">
                  Edit Profil
                </Link>
              </div>
              <div className="grid px-9 gap-5 py-9">
                <div className="flex border-b-2 border-primary pb-3">
                  <p className="w-1/4 font-[600]">Nama Lengkap</p>
                  <p className="grow font-medium">
                    {user.data?.data?.data?.name}
                  </p>
                </div>
                <div className="flex border-b-2 border-primary pb-3">
                  <p className="w-1/4 font-[600]">Nomor HP</p>
                  <p className="grow font-medium">
                    {user.data?.data?.data?.phone_number}
                  </p>
                </div>
                <div className="flex border-b-2 border-primary pb-3">
                  <p className="w-1/4 font-[600]">Email</p>
                  <p className="grow font-medium">
                    {user.data?.data?.data?.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid w-full place-self-stretch bg-secondary rounded-2xl py-8 px-8 my-4">
              <div className="font-semibold w-full flex justify-between text-xl">
                <p>Login & Security</p>
                <Link to={"password"} className="text-slate-500">
                  Ganti Password
                </Link>
              </div>
              <div className="grid px-9 gap-5 py-9">
                <div className="flex border-b-2 border-primary pb-3">
                  <p className="w-1/4 font-[600]">Password</p>
                  <p className="grow font-medium">************</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end px-7 text-xl font-bold text-red-600 cursor-pointer" onClick={onLogout}>
              Logout
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OwnerDashboardProfile;

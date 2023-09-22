import React, { useEffect } from "react";
import { CameraIcon } from "@heroicons/react/24/solid";
import { useEditUserProfile, useUser } from "../../../queries/auth.js";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getDifferentProperties } from "../../../utils/kost.js";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import { toast } from "react-toastify";
function ProfileEdit() {
  const user = useUser();

  console.log(user?.data?.data?.data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    trigger,
    setValue,
  } = useForm({
    defaultValues: {
      name: user?.data?.data?.data?.name ?? "",
      email: user?.data?.data?.data?.email ?? "",
      phone_number: user?.data?.data?.data?.phone_number ?? "",
      avatar: user?.data?.data?.data?.avatar_url ?? "",
    },
    values: {
      name: user?.data?.data?.data?.name ?? "",
      email: user?.data?.data?.data?.email ?? "",
      phone_number: user?.data?.data?.data?.phone_number ?? "",
      avatar: user?.data?.data?.data?.avatar_url ?? "",
    },
    mode: "all",
  });

  const watchAvatar = watch("avatar");

  // useEffect(() => {
  //   const updateEditForm = () => {
  //     const updatedUserData = user?.data?.data?.data?.name

  //   }
  // }, []);

  const [progressLoading, setProgressLoading] = useState(0);
  const editUserProfile = useEditUserProfile();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const oldUserData = {
      name: user?.data?.data?.data?.name,
      email: user?.data?.data?.data?.email,
      phone_number: user?.data?.data?.data?.phone_number,
      avatar: user?.data?.data?.data?.avatar_url,
    };

    console.log("UPDATED", data);
    console.log("OLD", oldUserData);

    const finalData = getDifferentProperties({
      compare: oldUserData,
      main: data,
    });

    try {
      setProgressLoading(50);
      await editUserProfile.mutateAsync({
        update: { ...finalData, id: user?.data?.data?.data?._id },
      });
      navigate("/profile/detail");
    } catch (error) {
      toast.error(error?.response?.data?.message);
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
      {editUserProfile?.isLoading && (
        <div className="w-full h-full fixed bg-slate-400/50 z-50" />
      )}

      <div
        className="pt-24 pb-8 lg:pt-36 lg:pb-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="container flex flex-wrap px-8 gap-4">
          <div className="text-xs font-medium breadcrumbs flex items-center w-full lg:text-base">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/profile/detail"}>Profil</Link>
              </li>
              <li className="text-primary font-semibold">Edit Profil</li>
            </ul>
          </div>

          <form className="grid grid-cols-1 w-full gap-3 lg:grid-cols-3">
            <div className="items-center grid grid-cols-1 justify-items-center place-content-center gap-2">
              <div className="relative self-end">
                <div className="overflow-hidden h-24 w-24 rounded-full self-end lg:h-40 lg:w-40">
                  <input
                    className="hidden"
                    id="avatar"
                    type="file"
                    {...register(`avatar`, {
                      onChange: (e) => {
                        if (e.target.files && e.target.files[0]) {
                          setValue(`avatar`, e.target.files[0]);
                        }
                        trigger("avatar");
                      },
                    })}
                  />
                  <img
                    src={
                      typeof watchAvatar == "string"
                        ? watchAvatar
                        : URL.createObjectURL(watchAvatar)
                    }
                    className="object-center object-cover w-full h-full"
                  />
                </div>
                <label
                  htmlFor="avatar"
                  className="absolute w-6 h-6 rounded-full bg-gray-400 z-10 right-[5%] top-[75%] flex items-center justify-center lg:h-9 lg:w-9 cursor-pointer"
                >
                  <CameraIcon className="text-white w-3 lg:w-4" />
                </label>
              </div>
              <p className="text-center text-xs font-bold lg:text-xl">
                {user?.data?.data?.data?.name}
              </p>
            </div>

            <div className="flex flex-wrap px-4 col-span-2">
              <div className="flex justify-between w-full text-xs font-semibold lg:text-lg">
                <h1>Informasi Akun</h1>
              </div>
              <div className="flex flex-wrap w-full gap-4 px-3 pt-4 pb-7 text-[11px] lg:text-base">
                <div className="w-full flex items-center">
                  <p className="w-[40%] font-medium">Nama Lengkap</p>
                  <input
                    {...register("name")}
                    className=" w-full rounded-full py-1 px-2 border align-middle lg:py-2 lg:px-4"
                  />
                </div>
                <div className="w-full flex items-center">
                  <p className="w-[40%] font-medium">No HP</p>
                  <input
                    {...register("phone_number")}
                    className=" w-full rounded-full py-1 px-2 border align-middl lg:py-2 lg:px-4"
                  />
                </div>
                <div className="w-full flex items-center">
                  <p className="w-[40%] font-medium">Email</p>
                  <input
                    {...register("email")}
                    className=" w-full rounded-full py-1 px-2 border align-middle lg:py-2 lg:px-4"
                  />
                </div>
                <div className="w-full flex items-center justify-end pt-3">
                  <button className="w-[71%] bg-primary rounded-full py-2 px-2 text-white font-semibold">
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;

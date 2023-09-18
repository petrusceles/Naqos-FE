import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import { useUser, useEditUserProfile } from "../../../queries/auth.js";
import { Formik, Form, ErrorMessage, Field } from "formik";
import ChildLoading from "../../AddOn/childLoading.jsx";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useKostDetail, useKostDetailMutate } from "../../../queries/kost.js";
import { useEffect } from "react";
import { useOwnerForm, useOwnerFormDispatch } from "../ownerContext.jsx";
import { convertObjectKost } from "../../../utils/kost.js";
const bankAvailable = ["BCA", "Mandiri", "BNI", "BRI", "BTN"];

function OwnerData() {
  const user = useUser(true);
  const navigate = useNavigate();
  const editProfile = useEditUserProfile();
  const [progressLoading, setProgressLoading] = useState(0);
  const queryClient = useQueryClient();

  const { search } = useLocation();
  const stateParams = new URLSearchParams(search);
  const pageState = stateParams.get("state");

  const pageKostId = stateParams.get("kost_id");

  const kostDetailMutate = useKostDetailMutate();

  const ownerForm = useOwnerForm();
  const ownerFormDispatch = useOwnerFormDispatch();

  useEffect(() => {
    const fetchKostUpdate = async () => {
      try {
        const updateKostData = await kostDetailMutate.mutateAsync({
          id: pageKostId,
        });
        // const updateKostDataResponse = updateKostData?.data?.data?.kost;
        const data = convertObjectKost(updateKostData?.data?.data?.kost);
        console.log("KOST-DETAIL", data);
        ownerFormDispatch({
          type: "kost_added",
          kost_data: { ...data },
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (pageState == "update" && Object.keys(ownerForm).length === 0) {
      fetchKostUpdate();
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    getValues,
  } = useForm({
    defaultValues: {
      bank: "",
      bank_number: null,
      bank_name: "",
      other_bank: "",
    },
    values: {
      bank:
        user?.data?.data?.data?.bank &&
        (bankAvailable.includes(user?.data?.data?.data?.bank)
          ? user?.data?.data?.data?.bank
          : "Lainnya"),
      bank_number: user?.data?.data?.data?.bank_number,
      bank_name: user?.data?.data?.data?.bank_name,
      other_bank: !bankAvailable.includes(user?.data?.data?.data?.bank)
        ? user?.data?.data?.data?.bank
        : "",
    },
    mode: "all",
  });
  const watchBank = watch("bank");
  const onSubmit = async (data) => {
    setProgressLoading(50);
    await editProfile.mutateAsync(
      {
        update: {
          id: user?.data?.data?.data?._id,
          bank: data.bank == "Lainnya" ? data.other_bank : data.bank,
          bank_number: data.bank_number,
          bank_name: data.bank_name,
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["auth", "me"],
          });

          navigate("/owner/kost" + search);
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message, {
            position: "top-center",
          });
        },
        onSettled: () => {
          setProgressLoading(100);
        },
      }
    );
  };
  return (
    <>
      <LoadingBar
        waitingTime={50}
        color="#0A008A"
        progress={progressLoading}
        height="5px"
      />
      <div className="flex gap-4 min-w-[1280px] ">
        <OwnerInputSidebar />
        {user?.isLoading && kostDetailMutate.isLoading ? (
          <div className="grow flex items-center justify-center">
            <div className="w-1/4">
              <ChildLoading />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 w-3/4 content-start py-20 px-8 gap-10">
            <div className="grid grid-cols-1 gap-3 w-[60%]">
              <h1 className="font-bold text-4xl ">
                Silahkan Lengkapi Data Pemilik/Pengelola Kos
              </h1>
              <p className="leading-tight font-medium">
                Data pemilik digunakan apabila calon penyewa akan melakukan
                negosiasi dan pembayaran
              </p>
            </div>

            <form
              className="grid grid-cols-1 font-bold gap-9"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid gap-3">
                <div>
                  <p>Rekening Bank</p>
                  <p className="font-normal">
                    Rekening yang digunakan untuk pembayaran melalui transfer
                  </p>
                </div>
                <div className="grid gap-3 w-1/2">
                  <div className="relative">
                    <input
                      {...register("bank", { required: "Required" })}
                      className="bg-red-500 peer sr-only"
                      type="radio"
                      value="BCA"
                      id="BCA"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                    <label
                      htmlFor="BCA"
                      className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-lg peer-checked:border-primary"
                    >
                      <span className="peer-checked:font-bold">Bank BCA</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      {...register("bank", { required: "Required" })}
                      className="bg-red-500 peer sr-only"
                      type="radio"
                      value="Mandiri"
                      id="Mandiri"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                    <label
                      htmlFor="Mandiri"
                      className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-lg peer-checked:border-primary"
                    >
                      <span className="peer-checked:font-bold">
                        Bank Mandiri
                      </span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      {...register("bank", { required: "Required" })}
                      className="bg-red-500 peer sr-only"
                      type="radio"
                      value="BNI"
                      id="BNI"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                    <label
                      htmlFor="BNI"
                      className=" font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-lg peer-checked:border-primary"
                    >
                      <span className="peer-checked:font-bold">Bank BNI</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      {...register("bank", { required: "Required" })}
                      className="bg-red-500 peer sr-only"
                      type="radio"
                      value="BRI"
                      id="BRI"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                    <label
                      htmlFor="BRI"
                      className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-lg peer-checked:border-primary"
                    >
                      <span className="peer-checked:font-bold">Bank BRI</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      {...register("bank", { required: "Required" })}
                      className="bg-red-500 peer sr-only"
                      type="radio"
                      value="BTN"
                      id="BTN"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                    <label
                      htmlFor="BTN"
                      className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-lg peer-checked:border-primary"
                    >
                      <span className="peer-checked:font-bold">Bank BTN</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      {...register("bank", { required: "Required" })}
                      className="bg-red-500 peer sr-only"
                      type="radio"
                      value="Lainnya"
                      id="Lainnya"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                    <label
                      htmlFor="Lainnya"
                      className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-lg peer-checked:border-primary"
                    >
                      <span className="peer-checked:font-bold">Lainnya</span>
                    </label>
                  </div>
                </div>

                <p className="text-red-600">{errors?.bank?.message}</p>
              </div>

              {watchBank == "Lainnya" && (
                <div className="grid gap-3">
                  <div>
                    <p>Rekening Bank Lain</p>
                    <p className="font-normal">
                      Rekening bank lain yang tidak tertera diatas
                    </p>
                  </div>
                  <input
                    {...register("other_bank", {
                      required: "Required",
                    })}
                    type="text"
                    className="border-2 w-1/2 py-3 px-6 rounded-lg font-medium"
                    placeholder="Ketikkan nama bank disini"
                    disabled={watchBank != "Lainnya"}
                  />
                  <p className="text-red-600 font-bold">
                    {errors?.other_bank?.message}
                  </p>
                </div>
              )}

              <div className="grid gap-3 grid-cols-1">
                <p>Nomor Rekening</p>
                <input
                  {...register("bank_number", { required: "Required" })}
                  type="text"
                  className="border-2 w-1/2 py-3 px-6 rounded-lg font-medium"
                  placeholder="Isi nomor rekening bank"
                />
              </div>

              <div className="grid gap-3 grid-cols-1">
                <p>Kepemilikan Rekening</p>
                <input
                  {...register("bank_name", { required: "Required" })}
                  type="text"
                  className="border-2 w-1/2 py-3 px-6 rounded-lg font-medium"
                  placeholder="Isi nama kepemilikan rekening bank"
                />
              </div>

              <div className="flex pt-5 flex-row-reverse">
                <button
                  type="submit"
                  className="w-fit rounded py-4 px-9 bg-primary  text-white justify-self-end hover:bg-secondary hover:text-primary hover:shadow-md active:shadow-none duration-100"
                >
                  Simpan & Lanjut
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default OwnerData;

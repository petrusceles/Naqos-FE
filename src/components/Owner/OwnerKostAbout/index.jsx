import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import { useOwnerForm, useOwnerFormDispatch } from "../ownerContext.jsx";
import { useKostFacility } from "../../../queries/filter.js";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { useNavigate } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
function OwnerKostAbout() {
  const ownerForm = useOwnerForm();
  const ownerFormDispatch = useOwnerFormDispatch();
  console.log("KOST-ABOUT", ownerForm);
  const kostFacility = useKostFacility();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    watch,
    control,
    trigger,
  } = useForm({
    defaultValues: {
      kost_facilities: ownerForm?.kost_facilities ?? [],
      regulations: ownerForm?.regulations ?? [],
      bans: ownerForm?.bans ?? [],
      description: ownerForm?.description ?? "",
    },
    // values: {
    //   facility: ownerForm?.facility,
    //   regulations: ownerForm?.regulations ?? [],
    //   bans: ownerForm?.bans ?? [],
    //   description: ownerForm?.description ?? "",
    // },
    mode: "all",
  });

  // const kostFacilityArray = useFieldArray({
  //   control,
  //   name: "facility",
  //   rules: {
  //     required: "Required",
  //   },
  // });

  const regulationsArray = useFieldArray({
    control,
    name: "regulations",
    rules: {
      maxLength: 4,
    },
  });

  const bansArray = useFieldArray({
    control,
    name: "bans",
    rules: {
      maxLength: 4,
    },
  });

  const onSubmit = (data, e) => {
    e?.preventDefault();
    ownerFormDispatch({
      type: "kost_added",
      kost_data: { ...data },
    });
    navigate("/owner/kost-photo");
  };

  return (
    <div className="flex gap-4 min-w-[1280px] max-w-[1920px]">
      <OwnerInputSidebar />
      <div className="grid grid-cols-1 w-3/4 content-start py-20 px-8 gap-14">
        <div className="grid grid-cols-1 gap-3 w-[60%]">
          <h1 className="font-bold text-4xl ">Tentang Kos</h1>
          <p className="leading-tight font-medium">
            Silahkan centang dan isi hal-hal yang sesuai dengan kos
          </p>
        </div>
        <form
          className="grid grid-cols-1 font-bold gap-9"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Fasilitas Bersama</p>
              <p className="font-normal">
                Fasilitas umum yang dapat digunakan oleh seluruh penyewa
              </p>
            </div>
            <div className="grid justify-items-start place-items-start gap-2 font-medium">
              {kostFacility?.data?.data?.data?.kost_facilities?.map((facility) => {
                return (
                  <label className="flex items-center gap-3">
                    <input
                      {...register("kost_facilities", {
                        required: "Required",
                      })}
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      value={facility?._id}
                    />
                    <div className="cursor-pointer" htmlFor="RuangTamu">
                      {facility?.name}
                    </div>
                  </label>
                );
              })}
            </div>
            <p className="text-red-600">{errors?.kost_facilities?.message}</p>
          </div>

          <div className="grid gap-3">
            <label className="grid gap-1">
              <p>Peraturan Kos</p>
              <p className="font-normal">
                Tulis aturan kos yang sesuai (opsional)
              </p>
            </label>
            <div className="w-full grid gap-5">
              {regulationsArray?.fields?.map((regulation, index) => (
                <div className="flex gap-3" key={regulation?.id}>
                  <input
                    {...register(`regulations.${index}`)}
                    className="border-2 w-3/4 py-3 px-6 rounded-md font-medium"
                    placeholder="Tulis aturan kos di sini"
                    type="text"
                    id={`regulations_${index}`}
                  />
                  <button
                    className="w-fit rounded-md py-1 px-3 hover:bg-secondary duration-200 ease-in-out active:shadow-none hover:shadow-md"
                    onClick={() => regulationsArray?.remove(index)}
                  >
                    <TrashIcon className="h-6 w-6" />
                  </button>
                </div>
              ))}

              {regulationsArray?.fields?.length < 4 && (
                <button
                  type="button"
                  className="w-fit px-6 py-2 rounded bg-secondary text-slate-800 hover:shadow-md active:shadow-none"
                  onClick={() => {
                    regulationsArray?.append("");
                  }}
                >
                  Tambah aturan
                </button>
              )}
            </div>
          </div>

          <div className="grid gap-3">
            <label className="grid gap-1">
              <p>Larangan Kos</p>
              <p className="font-normal">
                Tulis larangan kos yang sesuai (opsional)
              </p>
            </label>
            <div className="w-full grid gap-5">
              {bansArray?.fields?.length > 0 &&
                bansArray?.fields?.map((ban, index) => (
                  <div className="flex gap-3" key={ban?.id}>
                    <input
                      {...register(`bans.${index}`)}
                      className="border-2 w-3/4 py-3 px-6 rounded-md font-medium"
                      placeholder="Tulis larangan kos di sini"
                      type="text"
                      id={`bans_${index}`}
                    />
                    <button
                      className="w-fit rounded-md py-1 px-3 hover:bg-secondary duration-200 ease-in-out active:shadow-none hover:shadow-md"
                      onClick={() => bansArray?.remove(index)}
                    >
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  </div>
                ))}

              {bansArray?.fields?.length <= 4 && (
                <button
                  type="button"
                  className="w-fit px-6 py-2 rounded bg-secondary text-slate-800 hover:shadow-md active:shadow-none"
                  onClick={() => {
                    bansArray?.append("");
                  }}
                >
                  Tambah larangan
                </button>
              )}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Deskripsi Kos</p>
              <p className="font-normal">Ceritakan hal menarik tentang kos</p>
            </div>
            <textarea
              {...register("description", {
                required: "Required",
              })}
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Tulis hal-hal menarik dari kos, jabarkan pula peraturan rinci kos (bila ada)"
            />
            <p className="text-red-600">{errors?.description?.message}</p>
          </div>

          <div className="grid grid-cols-2 pt-10">
            <button className="border-2 border-primary w-fit rounded py-2 px-7 text-primary">
              Kembali
            </button>
            <button
              type="submit"
              className="border-2 border-primary w-fit rounded py-2 px-7 bg-primary  text-white justify-self-end"
            >
              Simpan & Lanjut
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OwnerKostAbout;

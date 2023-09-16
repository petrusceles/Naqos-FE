import React, { useState, useRef } from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import { useNavigate } from "react-router-dom";
import {
  useDistrict,
  useProvince,
  useSubdistrict,
} from "../../../queries/region.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAllKostType } from "../../../queries/kost.js";
import { useEffect } from "react";
import { useOwnerForm, useOwnerFormDispatch } from "../ownerContext.jsx";
import { useForm, useFieldArray } from "react-hook-form";
function OwnerKost() {
  const provinceState = useProvince();
  const kostTypes = useAllKostType();
  const districtState = useDistrict();
  const subdistrictState = useSubdistrict();
  const ownerFormDispatch = useOwnerFormDispatch();
  const ownerForm = useOwnerForm();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    // defaultValues: {
    //   name: "",
    //   address: "",
    //   province: "Pilih Provinsi",
    //   district: "Pilih Kabupaten/Kota",
    //   subdistrict: "Pilih Kecamatan",
    //   type: "",
    // },
    defaultValues: {
      name: ownerForm?.name,
      address: ownerForm?.address,
      province: ownerForm?.province ?? "Pilih Provinsi",
      district: ownerForm?.district ?? "Pilih Kabupaten/Kota",
      subdistrict: ownerForm?.subdistrict ?? "Pilih Kecamatan",
      type: ownerForm?.type,
    },
    mode: "all",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!!ownerForm?.province) {
        const provinceData = provinceState?.data?.data;
        const selectedProvince = provinceData?.find(
          (province) => province?.name == ownerForm?.province
        )?.id;
        if (!!selectedProvince) {
          const districtMutate = await districtState.mutateAsync({
            province: selectedProvince,
          });
          const districtData = districtMutate?.data;
          const selectedDistrict = districtData?.find(
            (district) => district?.name == ownerForm?.district
          )?.id;
          if (!!selectedDistrict) {
            subdistrictState.mutate({ district: selectedDistrict });
          }
        }
      }
    };
    fetchData();
  }, []);
  const watchDistrict = watch("district");

  const onSubmit = (data) => {
    ownerFormDispatch({
      type: "kost_added",
      kost_data: { ...data },
    });
    navigate("/owner/kost-about");
  };

  return (
    <div className="flex gap-4 min-w-[1280px] max-w-[1920px]">
      <OwnerInputSidebar />
      <div className="grid grid-cols-1 w-3/4 content-start py-20 px-8 gap-14">
        <div className="grid grid-cols-1 gap-3 w-[60%]">
          <h1 className="font-bold text-4xl ">Silahkan Lengkapi Data Kos</h1>
          <p className="leading-tight font-medium">
            Bantu calon penyewa mengetahui kosanmu!
          </p>
        </div>

        <form
          className="grid grid-cols-1 font-bold gap-9"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Apa Nama Kos yang dikelola?</p>
              <p className="font-normal">
                Ketik Kos (spasi) Nama Kos tanpa perlu ketik alamat atau nama
                daerah
              </p>
            </div>
            <input
              {...register("name", {
                required: "Required",
              })}
              type="text"
              className="border-2 w-3/4 py-3 px-6 rounded-lg font-medium"
              placeholder="Ketikkan nama kos beserta tipe kamar disini"
            />
            <p className="text-red-600 font-bold">{errors?.name?.message}</p>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Kos Ada di mana?</p>
              <p className="font-normal">Tuliskan alamat kos secara rinci</p>
            </div>
            <textarea
              {...register("address", {
                required: "Required",
              })}
              className="border-2 w-3/4 py-3 px-6 rounded-lg font-medium min-h-[180px]"
              placeholder="Tulis alamat kos hingga rincian patokan tertentu (misal: 300 meter dari UGM)"
              type="text"
            />
            <p className="text-red-600 font-bold">{errors?.address?.message}</p>
          </div>

          <div className="grid gap-3">
            <p>Provinsi</p>
            <select
              {...register("province", {
                required: "Required",
                validate: (fieldValue) => {
                  if (fieldValue == "Pilih Provinsi") {
                    return "Required";
                  }
                },
                onChange: (e) => {
                  const id = e.target.options[e.target.selectedIndex]?.id;
                  districtState.mutate({ province: id });
                  setValue("district", "Pilih Kabupaten/Kota");
                },
              })}
              type="text"
              className="select w-full max-w-xs"
            >
              <option disabled>Pilih Provinsi</option>
              {provinceState?.data?.data?.map((value) => {
                return (
                  <option key={value?.id} id={value?.id} value={value?.name}>
                    {value?.name}
                  </option>
                );
              })}
            </select>

            <p className="text-red-600 font-bold">
              {errors?.province?.message}
            </p>
          </div>

          {districtState?.isSuccess && (
            <div className="grid gap-3">
              <p>Kabupaten/Kota</p>
              <select
                {...register("district", {
                  required: "Required",
                  validate: (fieldValue) => {
                    if (fieldValue == "Pilih Kabupaten/Kota") {
                      return "Required";
                    }
                  },
                  onChange: (e) => {
                    const id = e.target.options[e.target.selectedIndex]?.id;
                    subdistrictState.mutate({ district: id });
                    setValue("subdistrict", "Pilih Kecamatan");
                  },
                })}
                className="select w-full max-w-xs"
                type="text"
              >
                <option disabled>Pilih Kabupaten/Kota</option>
                {districtState?.data?.data?.map((value) => {
                  return (
                    <option key={value?.id} id={value?.id} value={value?.name}>
                      {value?.name}
                    </option>
                  );
                })}
              </select>

              <p className="text-red-600 font-bold">
                {errors?.district?.message}
              </p>
            </div>
          )}

          {subdistrictState?.isSuccess &&
            watchDistrict != "Pilih Kabupaten/Kota" && (
              <div className="grid gap-3">
                <p>Kecamatan</p>
                <select
                  {...register("subdistrict", {
                    required: "Required",
                    validate: (fieldValue) => {
                      if (fieldValue == "Pilih Kecamatan") {
                        return "Required";
                      }
                    },
                  })}
                  className="select w-full max-w-xs"
                  type="text"
                >
                  <option disabled>Pilih Kecamatan</option>
                  {subdistrictState?.data?.data?.map((value) => {
                    return (
                      <option
                        key={value?.id}
                        id={value?.id}
                        value={value?.name}
                      >
                        {value?.name}
                      </option>
                    );
                  })}
                </select>

                <p className="text-red-600 font-bold">
                  {errors?.subdistrict?.message}
                </p>
              </div>
            )}

          <div className="grid gap-3">
            <div>
              <p>Jenis Kos disewakan untuk?</p>
              <p className="font-normal">Pilih jenis kos yang sesuai</p>
            </div>
            <div className="flex gap-5">
              {kostTypes?.data?.data?.data?.kost_types?.map((type) => {
                return (
                  <div className="flex" key={type?._id}>
                    <input
                      {...register("type", {
                        required: "Required",
                      })}
                      type="radio"
                      value={type?._id}
                      id={type?._id}
                      className="sr-only peer"
                    />
                    <label
                      className="border-2 peer-checked:border-primary w-36 h-36 rounded-lg grid items-center justify-items-center content-center gap-2 cursor-pointer"
                      htmlFor={type?._id}
                    >
                      <img src={type?.icon_url} className="w-20" />
                      <p>{type?.name}</p>
                    </label>
                  </div>
                );
              })}
            </div>
            <p className="text-red-600 font-bold">{errors?.type?.message}</p>
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

export default OwnerKost;

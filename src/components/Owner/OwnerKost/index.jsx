import React, { useState } from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import KostCampuranIcon from "../../../assets/kost-campuran-icon.svg";
import KostCampuranIconGs from "../../../assets/kost-campuran-icon-gs.svg";
import KostPriaIcon from "../../../assets/kost-pria.svg";
import KostPriaIconGs from "../../../assets/kost-pria-gs.svg";
import KostWanitaIcon from "../../../assets/kost-wanita.svg";
import KostWanitaIconGs from "../../../assets/kost-wanita-gs.svg";
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
function OwnerKost() {
  const provinceState = useProvince();
  const kostTypes = useAllKostType();
  const districtState = useDistrict();
  const subdistrictState = useSubdistrict();
  const ownerFormDispatch = useOwnerFormDispatch();
  const ownerForm = useOwnerForm();
  const navigate = useNavigate();

  useEffect(() => {
      districtState.mutate({ province: ownerForm?.province});
      subdistrictState.mutate({ district: ownerForm?.district });
  },[])




  
  console.log("KOST-DATA", ownerForm);
  // console.log(kostTypes?.data?.data?.data?.kost_types);
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
        <Formik
          initialValues={{
            name: ownerForm?.name ?? "",
            address: ownerForm?.address ?? "",
            province: ownerForm?.province ?? "Pilih Provinsi",
            district: ownerForm?.district ?? "Pilih Kabupaten/Kota",
            subdistrict: ownerForm?.subdistrict ?? "Pilih Kecamatan",
            type: ownerForm?.type ?? "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.address) {
              errors.address = "Required";
            }
            if (!values.province || values.province == "Pilih Provinsi") {
              console.log(values.province);
              errors.province = "Required";
            }
            if (!values.district || values.district == "Pilih Kabupaten/Kota") {
              errors.district = "Required";
            }
            if (
              !values.subdistrict ||
              values.subdistrict == "Pilih Kecamatan"
            ) {
              errors.subdistrict = "Required";
            }
            if (!values.type) {
              errors.type = "Required";
            }
            return errors;
          }}
          onSubmit={(values) => {
            // console.log(values);
            console.log("DISPATCH", ownerFormDispatch);
            ownerFormDispatch({
              type: "kost_added",
              kost_data: { ...values },
            });
            navigate("/owner/kost-about");
          }}
        >
          {(formik) => (
            <Form className="grid grid-cols-1 font-bold gap-9">
              <div className="grid gap-3">
                <div className="grid gap-1">
                  <p>Apa Nama Kos yang dikelola?</p>
                  <p className="font-normal">
                    Ketik Kos (spasi) Nama Kos tanpa perlu ketik alamat atau
                    nama daerah
                  </p>
                </div>
                <Field
                  type="text"
                  className="border-2 w-3/4 py-3 px-6 rounded-lg font-medium"
                  placeholder="Ketikkan nama kos beserta tipe kamar disini"
                  name="name"
                />
                <ErrorMessage
                  component={"div"}
                  name="name"
                  className="text-base px-5 text-red-600"
                />
              </div>

              <div className="grid gap-3">
                <div className="grid gap-1">
                  <p>Kos Ada di mana?</p>
                  <p className="font-normal">
                    Tuliskan alamat kos secara rinci
                  </p>
                </div>
                <Field
                  className="border-2 w-3/4 py-3 px-6 rounded-lg font-medium min-h-[180px]"
                  as="textarea"
                  placeholder="Tulis alamat kos hingga rincian patokan tertentu (misal: 300 meter dari UGM)"
                  type="text"
                  name="address"
                />
                <ErrorMessage
                  component={"div"}
                  name="address"
                  className="text-base px-5 text-red-600"
                />
              </div>

              <div className="grid gap-3">
                <p>Provinsi</p>
                <Field
                  as="select"
                  name="province"
                  type="text"
                  className="select w-full max-w-xs"
                  onChange={(e) => {
                    const id = e?.target?.value;
                    districtState.mutate({ province: id });
                    formik.values.province = id;
                    formik.values.district = "Pilih Kabupaten/Kota";
                  }}

                  // defaultValue={"Pilih Provinsi"}
                >
                  <option disabled>Pilih Provinsi</option>
                  {provinceState?.data?.data?.map((value) => {
                    return (
                      <option key={value?.id} id={value?.id} value={value?.id}>
                        {value?.name}
                      </option>
                    );
                  })}
                </Field>

                <ErrorMessage
                  component={"div"}
                  name="province"
                  className="text-base px-5 text-red-600"
                />
              </div>

              {districtState?.isSuccess && (
                <div className="grid gap-3">
                  <p>Kabupaten/Kota</p>
                  <Field
                    as="select"
                    name="district"
                    className="select w-full max-w-xs"
                    type="text"
                    onChange={(e) => {
                      const id = e?.target?.value;
                      subdistrictState.mutate({ district: id });
                      formik.values.district = id;
                      formik.values.subdistrict = "Pilih Kabupaten/Kota";
                    }}
                  >
                    <option disabled>Pilih Kabupaten/Kota</option>
                    {districtState?.data?.data?.map((value) => {
                      return (
                        <option
                          key={value?.id}
                          id={value?.id}
                          value={value?.id}
                        >
                          {value?.name}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    name="district"
                    className="text-base px-5 text-red-600"
                  />
                </div>
              )}

              {subdistrictState?.isSuccess &&
                !(formik.values.district == "Pilih Kabupaten/Kota") && (
                  <div className="grid gap-3">
                    <p>Kecamatan</p>
                    <Field
                      as="select"
                      name="subdistrict"
                      className="select w-full max-w-xs"
                      type="text"
                    >
                      <option disabled>Pilih Kecamatan</option>
                      {subdistrictState?.data?.data?.map((value) => {
                        return (
                          <option key={value?.id} id={value?.id} value={value?.id}>
                            {value?.name}
                          </option>
                        );
                      })}
                    </Field>
                    <ErrorMessage
                      component={"div"}
                      name="subdistrict"
                      className="text-base px-5 text-red-600"
                    />
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
                        <Field
                          type="radio"
                          value={type?._id}
                          id={type?.name}
                          name="type"
                          className="sr-only peer"
                        />
                        <label
                          className="border-2 peer-checked:border-primary w-36 h-36 rounded-lg grid items-center justify-items-center content-center gap-2 cursor-pointer"
                          htmlFor={type?.name}
                        >
                          <img src={type?.icon_url} className="w-20" />
                          <p>{type?.name}</p>
                        </label>
                      </div>
                    );
                  })}
                </div>
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default OwnerKost;

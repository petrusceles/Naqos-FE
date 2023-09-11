import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import BlankImage from "../../../assets/blank-image-card.svg";
import { useOwnerForm } from "../ownerContext.jsx";
import { useForm, useFieldArray } from "react-hook-form";
import { CameraIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRoomFacility } from "../../../queries/filter.js";
function OwnerRoom() {
  const ownerForm = useOwnerForm();
  console.log("ROOM", ownerForm);
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
      description: "",
      room_facilities: [],
      room_total: null,
      room_remaining: null,
      day_price: null,
      month_price: null,
      year_price: null,
      room_photos: [],
      available_price: [],
    },
    mode: "all",
  });

  const availablePriceArray = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "available_price", // unique name for your Field Array
    rules: {
      required: "Required",
    },
  });

  const roomPhotosArray = useFieldArray({
    control,
    name: "room_photos",
    rules: {
      maxLength: 4,
      validate: (fieldValue) => {
        if (
          (fieldValue?.length == 1 && fieldValue[0] == "") ||
          fieldValue?.length == 0
        ) {
          return "Required";
        }
      },
    },
  });

  const roomFacilitiesArray = useFieldArray({
    control, 
    name: "room_facilities", 
    rules: {
      required: "Required",
    },
  });

  const roomFacility = useRoomFacility();

  const watchRoomPhotos = watch("room_photos");

  const watchAvailablePrice = watch("available_price");

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex gap-4 min-w-[1280px] max-w-[1920px]">
      <OwnerInputSidebar />
      <div className="grid grid-cols-1 w-3/4 content-start py-20 px-8 gap-14">
        <div className="grid grid-cols-1 gap-3 w-[60%]">
          <h1 className="font-bold text-4xl ">Silahkan Lengkapi Data Kamar</h1>
          <p className="leading-tight font-medium">
            Informasi dibawah merupakan data untuk tipe-tipe kamar
          </p>
        </div>

        <form
          className="grid grid-cols-1 font-bold gap-9"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex border-2 px-4 py-2 gap-4 rounded-md min-w-[720px]">
            <ExclamationTriangleIcon className="w-8 text-red-600 row-span-2" />
            <div className="grid">
              <p className="font-bold">Aturan Jenis Kamar</p>
              <p className="font-normal">
                Jenis kamar yang disediakan hanya 1, saran: gunakan kamar tipe
                reguler atau default
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Deskripsi Kamar</p>
              <p className="font-normal">Jabarkan secara rinci tentang kamar</p>
            </div>
            <textarea
              {...register("description", {
                required: "Required",
              })}
              className="border-2 w-3/4 py-3 px-6 rounded-lg font-medium min-h-[180px]"
              placeholder="Tuliskan ukuran kamar, nomor kamar, dan lantai. Tuliskan pula hal menarik tentang kamar."
            />
            <p className="text-red-600">{errors?.description?.message}</p>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Fasilitas Kamar</p>
              <p className="font-normal">
                Fasilitas yang tersedia di kamar tipe ini
              </p>
            </div>
            <div className="grid justify-items-start place-items-start gap-2 font-medium">
              {roomFacility?.data?.data?.data?.room_facilities?.map(
                (facility) => {
                  return (
                    <div className="flex items-center gap-3">
                      <input
                        {...register("room_facilities", {
                          value: facility?._id,
                        })}
                        type="checkbox"
                        className="checkbox checkbox-sm "
                        id={facility?._id}
                        value={facility?._id}
                      />
                      <label className="cursor-pointer" htmlFor={facility?._id}>
                        {facility?.name}
                      </label>
                    </div>
                  );
                }
              )}
              <p className="text-red-500 font-bold">{errors?.room_facilities?.message}</p>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Berapa Jumlah Total Kamar?</p>
              <p className="font-normal">
                Jumlah total kamar harus diantara 1-500
              </p>
            </div>
            <input
              {...register("room_total", {
                required: "Required",
                max: {
                  value: 500,
                  message: "Maximum 500 rooms",
                },
                min: {
                  value: 1,
                  message: "Minimum 1 rooms",
                },
              })}
              type="number"
              className="border-2 w-3/4 py-3 px-6 rounded-lg font-medium"
              placeholder="Ketikkan jumlah kamar disini"
            />
            <p className="text-red-500">{errors?.room_total?.message}</p>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Berapa Sisa Kamar yang Tersedia?</p>
              <p className="font-normal">
                Jumlah sisa kamar yang tersedia harus diantara 1-500
              </p>
            </div>
            <input
              {...register("room_remaining", {
                required: "Required",
                max: {
                  value: 500,
                  message: "Maximum 500 rooms",
                },
                min: {
                  value: 1,
                  message: "Minimum 1 rooms",
                },
              })}
              type="number"
              className="border-2 w-3/4 py-3 px-6 rounded-lg font-medium"
              placeholder="Ketikkan jumlah kamar yang tersedia disini"
            />
            <p className="text-red-500">{errors?.room_remaining?.message}</p>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Sewa Kamar</p>
              <p className="font-normal">
                Centang opsi kamar dapat disewa dalam rentang waktu apa saja
              </p>
            </div>
            <form className="grid justify-items-start place-items-start gap-2 font-medium">
              <div className="flex items-center gap-3">
                <input
                  {...register("available_price", {
                    value: "day",
                  })}
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="DayPrice"
                  value={"day"}
                />
                <label className="cursor-pointer" htmlFor="DayPrice">
                  Per Hari
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  {...register("available_price", {
                    value: "month",
                  })}
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="MonthPrice"
                  value={"month"}
                />
                <label className="cursor-pointer" htmlFor="MonthPrice">
                  Per Bulan
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  {...register("available_price", {
                    value: "year",
                  })}
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="YearPrice"
                  value={"year"}
                />
                <label className="cursor-pointer" htmlFor="YearPrice">
                  Per Tahun
                </label>
              </div>
              <p className="text-red-600 font-bold">
                {errors?.available_price?.message}
              </p>
            </form>
          </div>

          {watchAvailablePrice?.includes("day") && (
            <div className="grid gap-3">
              <p>Harga Sewa Per Hari</p>
              <input
                {...register("day_price", {
                  validate: (fieldValues) => {
                    console.log(fieldValues);
                    if (watchAvailablePrice?.includes("day") && !fieldValues) {
                      return "Required";
                    }
                  },
                  min: 1,
                  max: 999999999,
                })}
                type="number"
                className="border-2 w-3/4 py-3 px-6 rounded-lg font-medium"
                placeholder="Rp0"
              />
              <p className="text-red-600 font-bold">
                {errors?.day_price?.message}
              </p>
            </div>
          )}

          {watchAvailablePrice?.includes("month") && (
            <div className="grid gap-3">
              <p>Harga Sewa Per Bulan</p>
              <input
                {...register("month_price", {
                  validate: (fieldValues) => {
                    console.log(fieldValues);
                    if (
                      watchAvailablePrice?.includes("month") &&
                      !fieldValues
                    ) {
                      return "Required";
                    }
                  },
                  min: 1,
                  max: 999999999,
                })}
                type="number"
                className="border-2 w-3/4 py-3 px-6 rounded-lg font-medium"
                placeholder="Rp0"
              />
              <p className="text-red-600 font-bold">
                {errors?.month_price?.message}
              </p>
            </div>
          )}

          {watchAvailablePrice?.includes("year") && (
            <div className="grid gap-3">
              <p>Harga Sewa Per Tahun</p>
              <input
                {...register("year_price", {
                  validate: (fieldValues) => {
                    console.log(fieldValues);
                    if (watchAvailablePrice?.includes("year") && !fieldValues) {
                      return "Required";
                    }
                  },
                  min: 1,
                  max: 999999999,
                })}
                type="number"
                className="border-2 w-3/4 py-3 px-6 rounded-lg font-medium"
                placeholder="Rp0"
              />
              <p className="text-red-600 font-bold">
                {errors?.year_price?.message}
              </p>
            </div>
          )}

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Foto Kamar atau Ruangan</p>
              <p className="font-normal">Foto maksimal 4</p>
            </div>

            {roomPhotosArray?.fields?.map((room_photo, index) => {
              return (
                <div
                  key={room_photo?.id}
                  className="max-w-sm grid gap-3 place-items-start"
                >
                  <div className="w-full flex items-start justify-between gap-4">
                    <input
                      type="file"
                      className="file-input file-input-sm hidden"
                      id={`room_photo_${index}`}
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setValue(`room_photos.${index}`, e.target.files[0]);
                        }
                        trigger("room_photos");
                      }}
                    />

                    {watchRoomPhotos[index] !== "" ? (
                      <img
                        src={URL.createObjectURL(watchRoomPhotos[index])}
                        className="w-96 shadow-md rounded-lg"
                      />
                    ) : (
                      <label
                        className="w-96 bg-slate-200/70 h-56 rounded-md grid content-center justify-items-center text-slate-600 cursor-pointer"
                        htmlFor={`room_photo_${index}`}
                      >
                        <CameraIcon className="h-12 w-h-12" />
                        <p>Pilih foto</p>
                      </label>
                    )}
                    <button
                      className="hover:shadow-md active:shadow-none p-2 bg-secondary rounded duration-300 ease-in-out w-fit"
                      onClick={() => roomPhotosArray.remove(index)}
                    >
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              );
            })}
            {roomPhotosArray?.fields?.length < 4 && (
              <button
                type="button"
                className="w-fit px-6 py-2 rounded bg-secondary text-slate-800 hover:shadow-md active:shadow-none duration-300 ease-in-out"
                onClick={() => {
                  roomPhotosArray.append("");
                }}
              >
                Tambah foto
              </button>
            )}
            <p className="text-red-600">{errors?.room_photos?.root?.message}</p>
          </div>

          <div className="flex pt-10 justify-between">
            <button className="border-2 border-primary w-fit rounded py-2 px-7 text-primary">
              Kembali
            </button>
            <div className="flex items-center gap-7 justify-end">
              <div className="flex items-center gap-4 w-[40%]">
                <input type="checkbox" className="checkbox" />
                <p className="font-semibold text-slate-500">
                  Saya setuju dengan syarat & ketentuan yang berlaku
                </p>
              </div>
              <button
                className="border-2 border-primary w-fit rounded py-2 px-7 bg-primary  text-white justify-self-end"
                type="submit"
              >
                Simpan & Lanjut
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OwnerRoom;

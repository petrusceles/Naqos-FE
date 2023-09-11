import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import {
  ExclamationTriangleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { CameraIcon } from "@heroicons/react/24/solid";
import BlankImage from "../../../assets/blank-image-card.svg";
import { useOwnerForm, useOwnerFormDispatch } from "../ownerContext.jsx";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { root } from "postcss";
function OwnerKostPhoto() {
  const ownerFormDispatch = useOwnerFormDispatch();
  const ownerForm = useOwnerForm();
  console.log("KOST-PHOTO", ownerForm);
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      outside_photos: ownerForm?.outside_photos ?? [],
      inside_photos: ownerForm?.inside_photos ?? [],
    },
    mode: "all",
  });

  const outsidePhotosArray = useFieldArray({
    control,
    name: "outside_photos",
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
  const insidePhotosArray = useFieldArray({
    control,
    name: "inside_photos",
    rules: {
      maxLength: 4,
      required: "Required",
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

  const watchOutsidePhotos = watch("outside_photos");
  const watchInsidePhotos = watch("inside_photos");
  const navigate = useNavigate();
  // console.log(errors?.outside_photos?.root?.message);
  const onSubmit = (data, e) => {
    e.preventDefault();
    // const finalData = data.filter((value) => value != "");
    ownerFormDispatch({
      type: "kost_added",
      kost_data: { ...data },
    });
    navigate("/owner/room");
  };
  return (
    <div className="flex gap-4 min-w-[1280px] max-w-[1920px] ">
      <OwnerInputSidebar />

      <form
        className="grid grid-cols-1 w-3/4 content-start py-20 px-8 gap-14"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="grid grid-cols-1 gap-3 w-[60%]">
          <h1 className="font-bold text-4xl ">Pasang Foto Kos</h1>
          <p className="leading-tight font-medium">
            Foto kos tampak depan merupakan foto yang dilihat calon penyewa di
            halaman depan.
          </p>
        </div>

        <div className="grid grid-cols-1 font-bold gap-9">
          <div className="flex border-2 px-4 py-2 gap-4 rounded-md min-w-[720px]">
            <ExclamationTriangleIcon className="w-8 text-red-600 row-span-2" />
            <div className="grid">
              <p className="font-bold">Aturan Foto</p>
              <p className="font-normal">
                Foto tidak terbalik, tidak ada teks dan logo, serta tidak berupa
                kolase
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-1">
              <p>Foto Bangunan Tampak Depan</p>
              <p className="font-normal">
                Foto bangunan dalam keadaan horizontal.
              </p>
            </div>

            {outsidePhotosArray?.fields?.map((outside_photo, index) => {
              return (
                <div
                  key={outside_photo?.id}
                  className="max-w-sm grid gap-3 place-items-start"
                >
                  <div className="w-full flex items-start justify-between gap-4">
                    <input
                      {...register(`outside_photos.${index}`)}
                      type="file"
                      className="file-input file-input-sm hidden"
                      id={`outside_photo_${index}`}
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setValue(
                            `outside_photos.${index}`,
                            e.target.files[0]
                          );
                        }
                        trigger("outside_photos");
                      }}
                    />

                    {watchOutsidePhotos[index] !== "" ? (
                      <img
                        src={URL.createObjectURL(watchOutsidePhotos[index])}
                        className="w-96 shadow-md rounded-lg"
                      />
                    ) : (
                      <label
                        className="w-96 bg-slate-200/70 h-56 rounded-md grid content-center justify-items-center text-slate-600 cursor-pointer"
                        htmlFor={`outside_photo_${index}`}
                      >
                        <CameraIcon className="h-12 w-h-12" />
                        <p>Pilih foto</p>
                      </label>
                    )}
                    <button
                      className="hover:shadow-md active:shadow-none p-2 bg-secondary rounded duration-300 ease-in-out w-fit"
                      onClick={() => outsidePhotosArray.remove(index)}
                    >
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              );
            })}
            {outsidePhotosArray?.fields?.length < 4 && (
              <button
                type="button"
                className="w-fit px-6 py-2 rounded bg-secondary text-slate-800 hover:shadow-md active:shadow-none duration-300 ease-in-out"
                onClick={() => {
                  outsidePhotosArray.append("");
                }}
              >
                Tambah foto
              </button>
            )}
            <p className="text-red-600">
              {errors?.outside_photos?.root?.message}
            </p>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-1">
              <p>Foto Tampilan Dalam Bangunan</p>
              <p className="font-normal">
                Foto fasilitas atau ruangan dalam bangunan dalam keadaaan
                terang.
              </p>
            </div>

            {insidePhotosArray?.fields?.map((inside_photo, index) => {
              return (
                <div
                  key={inside_photo?.id}
                  className="max-w-sm grid gap-3 place-items-start"
                >
                  <div className="w-full flex items-start justify-between gap-4">
                    <input
                      type="file"
                      className="file-input file-input-sm hidden"
                      id={`inside_photo_${index}`}
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setValue(`inside_photos.${index}`, e.target.files[0]);
                        }
                        trigger("inside_photos");
                      }}
                    />

                    {watchInsidePhotos[index] !== "" ? (
                      <img
                        src={URL.createObjectURL(watchInsidePhotos[index])}
                        className="w-96 shadow-md rounded-lg"
                      />
                    ) : (
                      <label
                        className="w-96 bg-slate-200/70 h-56 rounded-md grid content-center justify-items-center text-slate-600 cursor-pointer"
                        htmlFor={`inside_photo_${index}`}
                      >
                        <CameraIcon className="h-12 w-h-12" />
                        <p>Pilih foto</p>
                      </label>
                    )}
                    <button
                      className="hover:shadow-md active:shadow-none p-2 bg-secondary rounded duration-300 ease-in-out w-fit"
                      onClick={() => insidePhotosArray.remove(index)}
                    >
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              );
            })}
            {insidePhotosArray?.fields?.length < 4 && (
              <button
                type="button"
                className="w-fit px-6 py-2 rounded bg-secondary text-slate-800 hover:shadow-md active:shadow-none duration-300 ease-in-out"
                onClick={() => {
                  insidePhotosArray.append("");
                }}
              >
                Tambah foto
              </button>
            )}
            <p className="text-red-600">
              {errors?.inside_photos?.root?.message}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 pt-10 sticky top-[100vh] font-bold">
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
  );
}

export default OwnerKostPhoto;

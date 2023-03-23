import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import BlankImage from "../../../assets/blank-image-card.svg";
function OwnerKostPhoto() {
  return (
    <div className="flex gap-4 min-w-[1280px] max-w-[1920px]">
      <OwnerInputSidebar />

      <div className="grid grid-cols-1 w-3/4 content-start py-20 px-8 gap-14">
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

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Foto Bangunan Tampak Depan</p>
              <p className="font-normal">
                Foto bangunan dalam keadaan horizontal.
              </p>
            </div>
            <img src={BlankImage} className="max-w-xs" />
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Foto Tampilan Dalam Bangunan</p>
              <p className="font-normal">
                Foto fasilitas atau ruangan dalam bangunan dalam keadaaan terang
                (opsional).
              </p>
            </div>
            <img src={BlankImage} className="max-w-xs" />
          </div>

          <div className="grid grid-cols-2 pt-10">
            <button className="border-2 border-primary w-fit rounded py-2 px-7 text-primary">
              Kembali
            </button>
            <button className="border-2 border-primary w-fit rounded py-2 px-7 bg-primary  text-white justify-self-end">
              Simpan & Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerKostPhoto;

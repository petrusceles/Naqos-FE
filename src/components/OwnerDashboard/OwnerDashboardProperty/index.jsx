import React from "react";
import OwnerDashboardSidebar from "../ownerDashboardSidebar";
import { PlusIcon, MapPinIcon } from "@heroicons/react/24/solid";
function OwnerDashboardProperty() {
  return (
    <div className="h-full w-full grid grid-cols-4">
      <OwnerDashboardSidebar />
      <div className="col-span-3 grid pt-44 place-content-start px-10 gap-8">
        <button className="bg-primary font-semibold text-white px-6 py-3 rounded-md flex items-center gap-3 w-fit">
          <PlusIcon className="w-7" />
          <span>Tambah Properti</span>
        </button>
        <div className="grid gap-3 w-full">
          <div className="w-3/4 bg-white rounded-3xl shadow-lg grid grid-cols-2 py-10 px-14 gap-8">
            <div className="grid gap-4">
              <div className="border-2 border-primary rounded-full py-1 px-2 font-semibold text-primary text-sm w-fit">
                Campuran
              </div>
              <div className="grid">
                <h3 className="text-2xl font-bold">Kos Lily</h3>
                <p className="leading-tight text-sm">Rincian alamat kos secara lengkap dan kode pos</p>
              </div>
              <div className="flex gap-1">
                <MapPinIcon className="w-6" />
                <p className="text-lg">Yogyakarta</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl w-60 flex items-center justify-self-end">
              <img src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1677522766/NaqosV2/dillon-kydd-XGvwt544g8k-unsplash_fvpq9k.jpg" className="object-cover"/>
            </div>
            <button className="border-[3px] font-semibold text-primary py-2 box-border rounded-md border-primary">Hapus Kos</button>
            <button className="bg-primary text-white rounded-md py-2 font-semibold">Edit Kos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboardProperty;

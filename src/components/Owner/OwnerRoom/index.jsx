import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import BlankImage from "../../../assets/blank-image-card.svg";
function OwnerRoom() {
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

        <div className="grid grid-cols-1 font-bold gap-9">
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
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Tuliskan ukuran kamar, nomor kamar, dan lantai. Tuliskan pula hal menarik tentang kamar."
            />
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Fasilitas Kamar</p>
              <p className="font-normal">
                Fasilitas yang tersedia di kamar tipe ini
              </p>
            </div>
            <form className="grid justify-items-start place-items-start gap-2 font-medium">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="RuangTamu"
                />
                <label className="cursor-pointer" for="RuangTamu">
                  Wifi
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="Dispenser"
                />
                <label className="cursor-pointer" for="Dispenser">
                  KM (Kamar Mandi) dalam
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="MesinCuci"
                />
                <label className="cursor-pointer" for="MesinCuci">
                  Air Panas
                </label>
              </div>
            </form>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Berapa Jumlah Total Kamar?</p>
              <p className="font-normal">
                Jumlah total kamar harus diantara 1-500
              </p>
            </div>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Ketikkan jumlah kamar disini"
            />
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Berapa Sisa Kamar yang Tersedia?</p>
              <p className="font-normal">
                Jumlah sisa kamar yang tersedia harus diantara 1-500
              </p>
            </div>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Ketikkan jumlah kamar yang tersedia disini"
            />
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
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="RuangTamu"
                />
                <label className="cursor-pointer" for="RuangTamu">
                  Per Hari
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="Dispenser"
                />
                <label className="cursor-pointer" for="Dispenser">
                  Per Minggu
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="MesinCuci"
                />
                <label className="cursor-pointer" for="MesinCuci">
                  Per Bulan
                </label>
              </div>
            </form>
          </div>

          <div className="grid gap-3">
            <p>Harga Sewa Per Hari</p>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Rp0"
            />
          </div>

          <div className="grid gap-3">
            <p>Harga Sewa Per Minggu</p>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Rp0"
            />
          </div>

          <div className="grid gap-3">
            <p>Harga Sewa Per Bulan</p>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Rp0"
            />
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Foto Kamar atau Ruangan</p>
              <p className="font-normal">Foto maksimal 4</p>
            </div>
            <img src={BlankImage} className="max-w-xs" />
          </div>

          <div className="flex pt-10 justify-between">
            <button className="border-2 border-primary w-fit rounded py-2 px-7 text-primary">
              Kembali
            </button>
            <div className="flex items-center gap-7 justify-end">
              <div className="flex items-center gap-4 w-[40%]">
                <input type="checkbox" className="checkbox" />
                <p className="font-semibold text-slate-500">Saya setuju dengan syarat & ketentuan yang berlaku</p>
              </div>
              <button className="border-2 border-primary w-fit rounded py-2 px-7 bg-primary  text-white justify-self-end">
                Simpan & Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerRoom;

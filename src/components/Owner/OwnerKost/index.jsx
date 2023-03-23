import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import KostCampuranIcon from "../../../assets/kost-campuran-icon.svg";
import KostCampuranIconGs from "../../../assets/kost-campuran-icon-gs.svg";
import KostPriaIcon from "../../../assets/kost-pria.svg";
import KostPriaIconGs from "../../../assets/kost-pria-gs.svg";
import KostWanitaIcon from "../../../assets/kost-wanita.svg";
import KostWanitaIconGs from "../../../assets/kost-wanita-gs.svg";
function OwnerKost() {
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

        <div className="grid grid-cols-1 font-bold gap-9">
          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Apa Nama Kos yang dikelola?</p>
              <p className="font-normal">
                Ketik Kos (spasi) Nama Kos tanpa perlu ketik alamat atau nama
                daerah
              </p>
            </div>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Ketikkan nama kos beserta tipe kamar disini"
            />
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Kos Ada di mana?</p>
              <p className="font-normal">Tuliskan alamat kos secara rinci</p>
            </div>
            <textarea
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Tulis alamat kos hingga rincian patokan tertentu (misal: 300 meter dari UGM)"
            />
          </div>

          <div className="grid gap-3">
            <p>Provinsi</p>
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Pilih Provinsi
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>

          <div className="grid gap-3">
            <p>Kabupaten/Kota</p>
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Pilih Kabupaten/Kota
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>

          <div className="grid gap-3">
            <p>Kecamatan</p>
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Pilih Kecamatan
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>

          <div className="grid gap-3">
            <div>
              <p>Jenis Kos disewakan untuk?</p>
              <p className="font-normal">Pilih jenis kos yang sesuai</p>
            </div>
            <form className="flex gap-5">
              <div className="flex">
                <input
                  type="radio"
                  id="putri"
                  name="kostType"
                  className="sr-only peer"
                />
                <label
                  for="putri"
                  className="border-2 peer-checked:border-primary w-36 h-36 rounded-md grid items-center justify-items-center content-center gap-2 cursor-pointer"
                >
                  <img src={KostWanitaIcon} className="w-20" />
                  <p>Putri</p>
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  id="putra"
                  name="kostType"
                  className="sr-only peer"
                />
                <label
                  for="putra"
                  className="border-2 peer-checked:border-primary w-36 h-36 rounded-md grid items-center justify-items-center content-center gap-2 cursor-pointer"
                >
                  <img src={KostPriaIcon} className="w-20" />
                  <p>Putra</p>
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  id="campuran"
                  name="kostType"
                  className="sr-only peer"
                />
                <label
                  for="campuran"
                  className="border-2 peer-checked:border-primary w-36 h-36 rounded-md grid items-center justify-items-center content-center gap-2 cursor-pointer"
                >
                  <img src={KostCampuranIcon} className="w-20" />
                  <p>Campuran</p>
                </label>
              </div>
            </form>
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

export default OwnerKost;

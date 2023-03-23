import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
function OwnerData() {
  return (
    <div className="flex gap-4 min-w-[1280px]">
      <OwnerInputSidebar />
      <div className="grid grid-cols-1 w-3/4 content-start py-20 px-8 gap-14">
        <div className="grid grid-cols-1 gap-3 w-[60%]">
          <h1 className="font-bold text-4xl ">
            Silahkan Lengkapi Data Pemilik/Pengelola Kos
          </h1>
          <p className="leading-tight font-medium">
            Data pemilik digunakan apabila calon penyewa akan melakukan
            negosiasi dan pembayaran
          </p>
        </div>

        <div className="grid grid-cols-1 font-bold gap-9">
          <div className="grid gap-3">
            <p>Nama Pemilik/Pengelola</p>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Ketikkan nama lengkapmu disini"
            />
          </div>

          <div className="grid gap-3">
            <p>Nomor HP (WhatsApp) Pemilik/Pengelola</p>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Isi nomor handphone Whatsapp aktif"
            />
          </div>

          <div className="grid gap-3">
            <div>
              <p>Rekening Bank</p>
              <p className="font-normal">
                Rekening yang digunakan untuk pembayaran melalui transfer
              </p>
            </div>
            <form className="grid gap-3 w-1/2">
              <div className="relative">
                <input
                  className="bg-red-500 peer sr-only"
                  type="radio"
                  id="BCA"
                  name="bank"
                />
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                <label
                  for="BCA"
                  className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                >
                  <span className="peer-checked:font-bold">Bank BCA</span>
                </label>
              </div>
              <div className="relative">
                <input
                  className="bg-red-500 peer sr-only"
                  type="radio"
                  id="Mandiri"
                  name="bank"
                />
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                <label
                  for="Mandiri"
                  className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                >
                  <span className="peer-checked:font-bold">Bank Mandiri</span>
                </label>
              </div>
              <div className="relative">
                <input
                  className="bg-red-500 peer sr-only"
                  type="radio"
                  id="BNI"
                  name="bank"
                />
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                <label
                  for="BNI"
                  className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                >
                  <span className="peer-checked:font-bold">Bank BNI</span>
                </label>
              </div>
              <div className="relative">
                <input
                  className="bg-red-500 peer sr-only"
                  type="radio"
                  id="BRI"
                  name="bank"
                />
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                <label
                  for="BRI"
                  className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                >
                  <span className="peer-checked:font-bold">Bank BRI</span>
                </label>
              </div>
              <div className="relative">
                <input
                  className="bg-red-500 peer sr-only"
                  type="radio"
                  id="BTN"
                  name="bank"
                />
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                <label
                  for="BTN"
                  className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                >
                  <span className="peer-checked:font-bold">Bank BTN</span>
                </label>
              </div>
              <div className="relative">
                <input
                  className="bg-red-500 peer sr-only"
                  type="radio"
                  id="Lainnya"
                  name="bank"
                />
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                <label
                  for="Lainnya"
                  className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                >
                  <span className="peer-checked:font-bold">Lainnya</span>
                </label>
              </div>
            </form>
          </div>

          <div className="grid gap-3">
            <div>
              <p>Rekening Bank Lain</p>
              <p className="font-normal">
                Rekening bank lain yang tidak tertera diatas
              </p>
            </div>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Ketikkan nama bank disini"
            />
          </div>

          <div className="grid gap-3">
            <p>Nomor Rekening</p>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Isi nomor rekening bank"
            />
          </div>

          <div className="grid gap-3">
            <p>Kepemilikan Rekening</p>
            <input
              className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
              placeholder="Isi nama kepemilikan rekening bank"
            />
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

export default OwnerData;

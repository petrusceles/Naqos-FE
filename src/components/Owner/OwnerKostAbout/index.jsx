import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";

function OwnerKostAbout() {
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

        <div className="grid grid-cols-1 font-bold gap-9">
          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Fasilitas Bersama</p>
              <p className="font-normal">
                Fasilitas umum yang dapat digunakan oleh seluruh penyewa
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
                  Ruang Tamu
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="Dispenser"
                />
                <label className="cursor-pointer" for="Dispenser">
                  Dispenser
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm "
                  id="MesinCuci"
                />
                <label className="cursor-pointer" for="MesinCuci">
                  Mesin Cuci
                </label>
              </div>
            </form>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Peraturan Kos</p>
              <p className="font-normal">
                Tulis aturan kos yang sesuai (opsional)
              </p>
            </div>
            <textarea
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Pisahkan dengan semicolon (;) untuk masing-masing aturan"
            />
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Larangan Kos</p>
              <p className="font-normal">
                Tulis larangan kos yang sesuai (opsional)
              </p>
            </div>
            <textarea
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Pisahkan dengan semicolon (;) untuk masing-masing larangan"
            />
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Deskripsi Kos</p>
              <p className="font-normal">Ceritakan hal menarik tentang kos</p>
            </div>
            <textarea
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Tulis hal-hal menarik dari kos, jabarkan pula peraturan rinci kos (bila ada)"
            />
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Pertanyaan yang Sering diajukan Penyewa</p>
              <p className="font-normal">
                Ketik pertanyaan yang sering diajukan penyewa beserta jawabannya
                (opsional)
              </p>
            </div>
            <textarea
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Tuliskan pertanyaan yang sering diajukan"
            />
            <textarea
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Tuliskan jawaban dari pertanyaan diatas"
            />
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Pertanyaan Lain yang Sering diajukan Penyewa</p>
              <p className="font-normal">
                Ketik pertanyaan yang sering diajukan penyewa beserta jawabannya
                (opsional)
              </p>
            </div>
            <textarea
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Tuliskan pertanyaan yang sering diajukan"
            />
            <textarea
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Tuliskan jawaban dari pertanyaan diatas"
            />
          </div>

          <div className="grid gap-3">
            <div className="grid gap-1">
              <p>Pertanyaan Lain yang Sering diajukan Penyewa</p>
              <p className="font-normal">
                Ketik pertanyaan yang sering diajukan penyewa beserta jawabannya
                (opsional)
              </p>
            </div>
            <textarea
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Tuliskan pertanyaan yang sering diajukan"
            />
            <textarea
              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
              placeholder="Tuliskan jawaban dari pertanyaan diatas"
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

export default OwnerKostAbout;

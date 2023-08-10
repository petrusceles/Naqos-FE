import React from 'react'

import KostNotFoundIcon from "../../assets/kost-not-found-icon.svg";
function FindKostNotFound() {
  return (
    <>
      <div className="w-full flex flex-wrap gap-1 lg:w-[70%]  justify-center py-12 lg:h-full lg:items-center ">
        <div className="flex items-center flex-wrap h-fit lg:gap-2">
          <div className="w-full flex justify-center py-4">
            <img src={KostNotFoundIcon} className="w-36 lg:w-52" />
          </div>
          <h1 className="w-full text-center font-semibold lg:text-xl">
            Kos yang kamu cari kosong :(
          </h1>
          <p className="w-full text-center text-xs lg:text-sm">
            Silahkan ubah filter untuk mencari kos lain yang tersedia
          </p>
        </div>
      </div>
    </>
  );
}

export default FindKostNotFound
import React from "react";

function TestimonialCard() {
  return (
    <div className="flex w-[600px] bg-white py-3 rounded-3xl min-w-[600px]">
      <div className="w-1/4 flex justify-center ">
        <div className="overflow-hidden w-7/12 rounded-full">
          <img
            src="https://res.cloudinary.com/dqzqbgi8e/image/upload/v1675255775/locxgwxeh00q8nvx3tr5.png"
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid-cols-1 grid w-3/4 gap-2 pr-6">
        <div className="grid grid-cols-1">
          <h4 className="text-lg font-medium">Nama Pemilik Kos</h4>
          <h5 className="text-xs">Nama kos, Alamat kos</h5>
        </div>
        <p className="text-sm text-justify">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          egestas bibendum fringilla.”
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;

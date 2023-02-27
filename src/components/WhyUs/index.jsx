import React from "react";
import SaveMoneyIcon from "../../assets/savemoney-icon.svg";
import ReminderIcon from "../../assets/reminder-icon.svg";
import FaqIcon from "../../assets/faq-icon.svg";
function WhyUs() {
  return (
    <div className="bg-white">
      <div className="container px-8 py-6 flex flex-wrap gap-8 pb-96 lg:py-12 lg:gap-10">
        <h2 className="font-semibold text-xl lg:text-3xl">
          Kenapa Harus Naqos?
        </h2>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3  lg:p-2 lg:gap-12 w-full ">
          <div className="grid grid-cols-2 justify-items-center gap-5 lg:flex lg:justify-start ">
            <div className="w-full flex justify-center rounded-md p-3 lg:justify-start  lg:p-0 lg:w-fit lg:max-w-[80px]">
              <img
                src={SaveMoneyIcon}
                className="max-w-[60px] min-h-[100px] lg:max-w-[70px] "
              />
            </div>
            <div className="flex flex-wrap items-center lg:bg-slate-100 lg:py-3 lg:px-5 lg:rounded-lg lg:shadow-lg">
              <h3 className="w-full font-semibold text-sm lg:text-xl">
                Murah
              </h3>
              <p className="w-full text-xs text-justify self-start lg:text-sm lg:self-start ">
                Kosan yang tersedia merupakan kosan dengan harga terjangkau.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-center gap-5 lg:flex lg:justify-start ">
            <div className="w-full flex justify-center rounded-md p-3 lg:justify-start  lg:p-0 lg:w-fit lg:max-w-[80px]">
              <img
                src={ReminderIcon}
                className="max-w-[60px] min-h-[100px] lg:max-w-[120px]"
              />
            </div>
            <div className="flex flex-wrap items-center lg:bg-slate-100 lg:py-3 lg:px-5 lg:rounded-lg lg:shadow-lg">
              <h3 className="w-full font-semibold text-sm lg:text-xl">
                Reminder
              </h3>
              <p className="w-full text-xs text-justify self-start lg:text-sm">
                Fitur reminder buat ngingetin kos yang harus segera dibayar
                setelah dibooking.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-center gap-5 lg:flex lg:justify-start ">
            <div className="w-full flex justify-center rounded-md p-3 lg:justify-start  lg:p-0 lg:w-fit lg:max-w-[80px]">
              <img
                src={FaqIcon}
                className="max-w-[60px] min-h-[100px] lg:max-w-[100px]"
              />
            </div>
            <div className="flex flex-wrap items-center lg:bg-slate-100 lg:py-3 lg:px-5 lg:rounded-lg lg:shadow-lg">
              <h3 className="w-full font-semibold text-sm lg:text-xl">
                Lengkap
              </h3>
              <p className="w-full text-xs text-justify self-start lg:text-sm">
                Deskripsi dan keterangan lengkap dari setiap kos disertai FAQ
                Box biar ga bingung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

import React from "react";

function NotificationBox() {
  return (
    <div className="px-3 w-full py-2 text-justify flex flex-wrap gap-1 hover:bg-[#F2EFFF] max-w-sm">
      <h2 className="font-semibold">Pembayaran Berhasil Dikonfirmasi</h2>
      <p className="text-xs">
        Pembayaran sudah diterima, kamar sudah dapat ditempati sesuai jadwal
      </p>
      <p className="text-[10px]">Fri, 24 March 2023 18:07 WIB</p>
    </div>
  );
}

export default NotificationBox;

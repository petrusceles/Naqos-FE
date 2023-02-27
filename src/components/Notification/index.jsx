import React from "react";
import NotificationBox from "./box";
import { XMarkIcon } from "@heroicons/react/24/solid";
function Notification({notificationState}) {
  return (
    <div className={`absolute top-[120%] bg-white drop-shadow-md text-sm justify-center max-h-96 overflow-auto no-scrollbar rounded-md max-w-[250px] lg:right-[11%] duration-200 ease-in-out ${notificationState.notification ? 'scale-100':'scale-0'} z-40`}>
      <div className="w-full grid grid-cols-2 py-2 px-3 items-center sticky top-0 bg-primary">
        <h2 className="justify-self-start font-medium text-lg text-white">Notifikasi</h2>
        <XMarkIcon className="max-w-[25px] justify-self-end text-white cursor-pointer" onClick={() => notificationState.setNotification((prev) => !prev)}/>
      </div>
      <NotificationBox />
      <NotificationBox />
      <NotificationBox />
      <NotificationBox />
    </div>
  );
}

export default Notification;

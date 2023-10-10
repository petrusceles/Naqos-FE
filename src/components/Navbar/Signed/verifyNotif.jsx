import React from "react";
import { useSendVerif } from "../../../queries/auth.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import config from "../../../config/index.js";
import { toast } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
function NavbarSignedVerifyNotif() {
  const sendVerif = useSendVerif();
  const navigate = useNavigate();
  const [progressLoading, setProgressLoading] = useState(0);
  const onVerif = async (e) => {
    e.preventDefault();
    try {
      setProgressLoading(50);
      await sendVerif.mutateAsync({
        data: { verification_site: `${config.CLIENT_URL}/verif` },
      });
      setProgressLoading(100);
      navigate("/verif/pending");
    } catch (error) {
      toast.error(error?.message);
      setProgressLoading(100);
    }
  };
  return (
    <>
      <LoadingBar
        waitingTime={50}
        color="#0A008A"
        progress={progressLoading}
        height="5px"
      />
      <div className="fixed w-full z-40 top-24 flex justify-center lg:top-36 font-semibold">
        <div className="bg-secondary lg:w-[80%] flex justify-between items-center rounded-lg lg:py-2 lg:px-4 border-2 border-primary shadow-lg w-3/4 text-xs lg:text-base py-1 px-2">
          <p>Verifikasi email agar dapat melakukan transaksi!</p>
          <button
            onClick={onVerif}
            className="rounded-lg bg-primary lg:py-1 lg:px-3 text-slate-50 hover:bg-slate-200/30 hover:text-primary duration-100 ease-in-out hover:shadow-lg py-1 px-2"
          >
            Verifikasi Email
          </button>
        </div>
      </div>
    </>
  );
}

export default NavbarSignedVerifyNotif;

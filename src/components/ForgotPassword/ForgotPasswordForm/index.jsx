import React from "react";
import { useState } from "react";
import Logo from "../../../assets/naqos-logo-tag.png";
function ForgotPasswordForm() {
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const [isConfirmPasswordShowed, setIsConfirmPasswordShowed] = useState(false);
  return (
    <div className="flex flex-wrap w-full  lg:gap-20 gap-16 py-14 container px-8">
      <div className="w-full flex justify-center pb-10 lg:pb-0">
        <img className="lg:w-[360px] w-[200px]" src={Logo} alt="logo" />
      </div>
      <div className="w-full flex justify-center lg:justify-start pb-9">
        <div className="w-full flex flex-wrap gap-5 max-w-xl">
          <p className="font-semibold lg:text-2xl">Buat Password Baru</p>
          <div className="w-full flex flex-wrap gap-3">
            <p className="font-semibold text-sm w-full lg:text-lg">Password</p>
            <div className="w-full relative">
              <input
                className="rounded-full relative w-full text-sm font-semibold border-2 border-slate-300 py-2 px-4"
                placeholder="Minimal 6 karakter"
                type={`${isPasswordShowed ? "text" : "password"}`}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 right-[3%] cursor-pointer"
                onClick={() => {
                  setIsPasswordShowed((prev) => !prev);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class={`w-6 h-6 ${isPasswordShowed ? "hidden" : ""}`}
                >
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class={`w-6 h-6 ${isPasswordShowed ? "" : "hidden"}`}
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="font-semibold text-sm w-full lg:text-lg">Konfirmasi Password</p>
            <div className="w-full relative">
              <input
                className="rounded-full relative w-full text-sm font-semibold border-2 border-slate-300 py-2 px-4"
                placeholder="Minimal 6 karakter"
                type={`${isConfirmPasswordShowed ? "text" : "password"}`}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 right-[3%] cursor-pointer"
                onClick={() => {
                  setIsConfirmPasswordShowed((prev) => !prev);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class={`w-6 h-6 ${isConfirmPasswordShowed ? "hidden" : ""}`}
                >
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class={`w-6 h-6 ${isConfirmPasswordShowed ? "" : "hidden"}`}
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button className="mt-5 w-full lg:w-2/6 rounded-full bg-[#0A008A] capitalize hover:bg-[#E1E0FF] hover:text-[#4D50C5]  text-white py-2 px-7" disabled>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;

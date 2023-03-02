import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoadingBar from "react-top-loading-bar";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import imglogo from "../../assets/naqos-logo-tag.png";
import iconeyeslash from "../../assets/icon-eye-slash.svg";
import iconeye from "../../assets/icon-eye.svg";
import icongoogle from "../../assets/icon-google.svg";
import Pencari from "../../assets/seeker-icon.svg";
import Pemilik from "../../assets/owner-icon.svg";
import CTAuthModal from "../CTAuthModal";
import ForgotPasswordModal from "../ForgotPasswordModal";
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isDisabled, setIsDisabled] = useState(false);
  const [progressLoading, setProgressLoading] = useState(0);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onClickPasswordEye = (e) => {
    e.preventDefault();
    setIsPasswordHidden((prev) => {
      return !prev;
    });
  };

  //   const login = useMutation({
  //     mutationFn: async (newTodo) => {
  //       return await axios.post(appConfig.BE_AUTH_URL, newTodo);
  //     },
  //   });

  const onFormSubmitHandler = async (data) => {
    setIsDisabled(true);
    setProgressLoading(50);

    // login.mutate(data, {
    //   onSuccess: (res) => {
    //     setProgressLoading(100);
    //     localStorage.setItem("AUTH_TOKEN", res?.data?.data.access_token);
    //     localStorage.setItem("REFRESH_TOKEN", res?.data?.data.refresh_token);
    //     navigate("/");
    //   },
    //   onError: () => {
    //     setProgressLoading(100);
    //     toast.error("Username atau Password salah!");
    //   },
    // });
    setIsDisabled(false);
  };
  const [isRegisterModalShow, setIsRegisterModalShow] = useState(false);
  const [isForgotModalShow, setIsForgotModalShow] = useState(false);

  return (
    <>
      {isForgotModalShow && (
        <ForgotPasswordModal setIsModalShow={setIsForgotModalShow} />
      )}
      {isRegisterModalShow && (
        <CTAuthModal setIsModalShow={setIsRegisterModalShow} />
      )}
      <div className="px-8 font-[Montserrat]">
        <LoadingBar
          waitingTime={50}
          color="#0A008A"
          progress={progressLoading}
          height="5px"
        />
        <form onSubmit={handleSubmit(onFormSubmitHandler)}>
          <div className="flex flex-row justify-center">
            <Link to="/">
              <img
                className="lg:mt-[70px] lg:w-[360px] lg:h-[163.72px] mt-[27px] w-[171px] h-[78px]"
                alt=""
                src={imglogo}
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center mx-auto lg:mt-[48px] lg:w-[526px] mt-[18px]">
            <span className="lg:mb-[10px] lg:w-[209px] lg:h-[24px] lg:text-[20px] text-[14px] w-[175px] mb-[10px] text-black text-left font-[600]">
              Username
            </span>
            <input
              className="lg:h-[55px] lg:text-[20px] h-[48px] text-[12px] px-4 
            text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] 
            border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]"
              type=""
              placeholder="Ketikkan alamat email"
              name="username"
              {...register("username", {
                required: { value: true, message: "Masukkan email" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Masukkan email yang valid",
                },
              })}
            />
            {errors.username && errors.username.type === "required" && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
            {errors.username && errors.username.type === "pattern" && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
            <span className="lg:mt-[20px] lg:mb-[10px] lg:w-[209px] lg:h-[24px] lg:text-[20px] text-[14px] w-[175px] mt-[15px] mb-[10px] text-black text-left font-[600]">
              Password
            </span>
            <div className="flex flex-col flex-1 relative">
              <input
                className="lg:h-[55px] w-full lg:text-[20px] h-[48px] text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]"
                type={isPasswordHidden ? "password" : "text"}
                placeholder="Minimal 6 karakter"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <span className="text-red-500 text-sm">
                  Password harus diisi
                </span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="text-red-500 text-sm">
                  Password minimal 6 karakter
                </span>
              )}
              <div
                className="absolute top-1/2 -translate-y-1/2 right-[4%] cursor-pointer"
                onClick={(e) => {
                  onClickPasswordEye(e);
                }}
              >
                {isPasswordHidden ? (
                  <img src={iconeyeslash} />
                ) : (
                  <img src={iconeye} />
                )}
              </div>
            </div>

            <div
              onClick={() => {
                setIsForgotModalShow(true);
              }}
              className="lg:mt-[10px] lg:text-[16px] lg:font-[600] text-[14px] font-[500] mt-1 text-left text-black hover:text-black cursor-pointer"
            >
              Lupa Password
            </div>
          </div>
          <div className="flex flex-row justify-center lg:mt-[29px] mt-[20px]">
            {isDisabled ? (
              <button
                className="lg:w-[481px] lg:h-[43px] lg:text-[16px] w-[302px] h-[36px] text-[14px] bg-[#0A008A] rounded-[150px] outline-none font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-[#000000] focus:text-white focus:outline-none"
                type="submit"
                disabled={isDisabled}
              >
                Loading ...
              </button>
            ) : (
              <button
                className="lg:w-[481px] lg:h-[43px] lg:text-[16px] w-[302px] h-[36px] text-[14px] bg-[#0A008A] rounded-[150px] outline-none font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-[#000000] focus:text-white focus:outline-none"
                type="submit"
              >
                Masuk
              </button>
            )}
          </div>
        </form>
        <div className="flex flex-row justify-center lg:mt-[21px] mt-[5px]">
          <hr className="lg:mt-3 lg:w-[195px] w-[130px] mt-3 bg-[#999999] border-1 border-[#999999]" />
          <p className="lg:text-[24px] text-[12px] w-max mx-2 font-[600] text-[#999999]">
            atau
          </p>
          <hr className="lg:mt-3 lg:w-[195px] w-[130px] mt-3 bg-[#999999] border-1 border-[#999999]" />
        </div>
        <div className="flex flex-row justify-center lg:mt-[16px] mt-[5px]">
          <a
            rel="noreferrer"
            href="https://fsw-backend.up.railway.app/oauth/PENYEWA"
            target="_blank"
          >
            <button
              className="lg:w-[481px] lg:h-[44.96px] lg:text-[16px] w-[302px] h-[36px] text-[14px] outline-none rounded-[150px] font-[600] focus:outline-none
            bg-white border-2 border-[#b9b9bc] text-[#B9B9BC] hover:bg-[#0A008A] active:bg-[#0A008A] active:text-black 
            hover:text-white hover:border-[#E9E9EA] focus:border-[#0A008A] focus:bg-white focus:text-[#0A008A]"
              type="submit"
            >
              Masuk dengan Google
            </button>
          </a>
          <img
            className="absolute lg:mt-[11px] lg:mr-[230px] mt-2 mr-[200px]"
            src={icongoogle}
          />
        </div>
        <div className="flex flex-row justify-center lg:mt-[16px] mt-[20px] mb-[70px] gap-2">
          <p className="lg:text-[16px] text-[14px] text-center text-black font-[600]">
            Belum punya akun?
          </p>
          {/* <Link to='/auth/register'> */}
          {/* <p className='lg:text-[16px] text-[14px] text-center text-[#0A008A] font-[600]'>Daftar</p> */}
          <div
            onClick={() => {
              setIsRegisterModalShow(true);
            }}
            className="lg:text-[16px] text-[14px] text-center text-[#0A008A] font-[600] cursor-pointer"
          >
            Daftar
          </div>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default Login;

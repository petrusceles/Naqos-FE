import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import imglogo from "../../assets/naqos-logo-tag.png";
import iconeyeslash from "../../assets/icon-eye-slash.svg";
import iconeye from "../../assets/icon-eye.svg";
import icongoogle from "../../assets/icon-google.svg";
import { useForm } from "react-hook-form";
function SignUpOwner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "PENYEWA",
    },
  });

  const onSubmit = (e) => {
    console.log("submit");
  };
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onClickPasswordEye = (e) => {
    e.preventDefault;
    setIsPasswordHidden((prev) => {
      return !prev;
    });
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (event) => {
    const input = event.target.value;
    const filteredInput = input.replace(/\D/g, "");
    const lastDigit = filteredInput[filteredInput.length - 1];
    if (lastDigit === "") {
      setPhoneNumber(filteredInput.slice(0, -1));
    } else {
      setPhoneNumber(filteredInput);
    }
  };
  return (
    <div className="font-[Montserrat] container px-8">
      <div className="flex flex-row justify-center">
        <Link to="/">
          <img
            className="lg:mt-12 lg:w-[360px] lg:h-[163.72px] mt-[27px] w-[171px] h-[78px]"
            alt=""
            src={imglogo}
          />
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center mx-auto lg:mt-6 lg:w-[526px] mt-[18px]">
          <span className="lg:mb-[10px] lg:w-[209px] lg:h-[24px] lg:text-[20px] text-[14px] w-[175px] mb-[10px] text-black text-left font-[600]">
            Nama Lengkap
          </span>
          <input
            className="lg:h-[55px] lg:text-[18px] h-[48px] text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]"
            type="text"
            name="fullname"
            placeholder="Ketikkan nama lengkapmu disini"
            {...register("fullname", {
              required: { value: true, message: "Masukkan nama lengkap" },
            })}
            aria-invalid={errors.fullname ? "true" : "false"}
          />
          {errors.fullname && errors.fullname.type === "required" && (
            <span className="text-red-500 text-sm">
              {errors.fullname.message}
            </span>
          )}
          <span className="lg:mt-[20px] lg:mb-[10px] lg:w-[209px] lg:h-[24px] lg:text-[18px] text-[14px] w-[175px] mt-[15px] mb-[10px] text-black text-left font-[600]">
            Nomor Handphone
          </span>
          <div className="flex items-stretch rounded-[526px] border-2 border-[#dadadc] focus:border-[#0A008A] px-4 py-3 text-[12px] lg:text-[18px] space-x-2">
            <span className="font-[600] text-[#B9B9BC]">+62</span>
            <input
              className="w-full text-black font-[600] placeholder-[#b9b9bc] focus:outline-none"
              type="number"
              name="phoneNumber"
              placeholder="Isi nomor handphone Whatsapp aktif"
              s
              {...register("phoneNumber", {
                required: true,
                validate: (value) => Number(value) == value,
                minLength: 10,
              })}
              aria-invalid={errors.phoneNumber ? "true" : "false"}
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          {errors.phoneNumber && errors.phoneNumber.type === "validate" && (
            <span className="text-red-500 text-sm">
              Nomor handphone harus berupa angka
            </span>
          )}
          {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (
            <span className="text-red-500 text-sm">
              Nomor handphone minimal 10 digit
            </span>
          )}
          {errors.phoneNumber && errors.phoneNumber.type === "required" && (
            <span className="text-red-500 text-sm">
              Nomor handphone harus diisi
            </span>
          )}
          <span className="lg:mt-[20px] lg:mb-[10px] lg:w-[209px] lg:h-[24px] lg:text-[18px] text-[14px] w-[175px] mt-[15px] mb-[10px] text-black text-left font-[600]">
            Email
          </span>
          <input
            className="lg:h-[55px] lg:text-[18px] h-[48px] text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]"
            type="text"
            name="username"
            placeholder="Ketikkan alamat email"
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
          <div className="flex flex-col flex-1 relative ">
            <input
              className="lg:h-[55px] w-full lg:text-[18px] h-[48px] text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]"
              type={isPasswordHidden ? "password" : "text"}
              name="password"
              placeholder="Minimal 6 karakter"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <span className="text-red-500 text-sm absolute top-full">
                Password harus diisi
              </span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="text-red-500 text-sm absolute top-full">
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
        </div>
        <div className="flex flex-row justify-center lg:mt-12 mt-10">
          {false ? (
            <button
              className="md:w-[481px] md:h-[43px] md:text-[16px] md:pt-2 min-[393px]:w-[362px] min-[393px]:h-[36px] min-[393px]:text-[14px] min-[393px]:pt-1 bg-[#0A008A] rounded-[150px] outauth/line-none font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-[#000000] focus:text-white focus:outline-none disabled:bg-[#e8e8e9] disabled:text-[#ababaf]"
              type="submit"
              disabled={true}
            >
              Loading...
            </button>
          ) : (
            <button
              className="lg:w-[481px] lg:h-[43px] lg:text-[16px] w-[302px] h-[36px] text-[14px] bg-[#0A008A] rounded-[150px] outline-none font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-[#000000] focus:text-white focus:outline-none disabled:bg-[#e8e8e9] disabled:text-[#ababaf]"
              type="submit"
            >
              Daftarkan akun pemilik kos
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
            Daftar dengan Google
          </button>
        </a>
        <img
          className="absolute lg:mt-[11px] lg:mr-[230px] mt-2 mr-[200px]"
          src={icongoogle}
        />
      </div>
      <div className="flex flex-row justify-center lg:mt-[16px] mt-[20px] mb-[70px] gap-2">
        <p className="lg:text-[16px] text-[14px] text-center text-black font-[600]">
          Sudah punya akun?
        </p>
        <Link to="/auth/login">
          <p className="lg:text-[16px] text-[14px] text-center text-[#0A008A] font-[600]">
            Masuk
          </p>
        </Link>
      </div>
    </div>
  );
}

export default SignUpOwner;

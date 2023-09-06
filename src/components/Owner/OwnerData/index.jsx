import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import { useUser, useEditUserProfile } from "../../../queries/auth.js";
import { Formik, Form, ErrorMessage, Field } from "formik";
import ChildLoading from "../../AddOn/childLoading.jsx";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const bankAvailable = ["BCA", "Mandiri", "BNI", "BRI", "BTN"];
function OwnerData() {
  const user = useUser(true);
  const navigate = useNavigate();
  const editProfile = useEditUserProfile();
  console.log(user?.data?.data?.data);
  const [progressLoading, setProgressLoading] = useState(0);
  const queryClient = useQueryClient();
  return (
    <>
      <LoadingBar
        waitingTime={50}
        color="#0A008A"
        progress={progressLoading}
        height="5px"
      />
      <div className="flex gap-4 min-w-[1280px] ">
        <OwnerInputSidebar />
        {user?.isLoading ? (
          <div className="grow flex items-center justify-center">
            <ChildLoading className="w-1/4 " />
          </div>
        ) : (
          <div className="grid grid-cols-1 w-3/4 content-start py-20 px-8 gap-10">
            <div className="grid grid-cols-1 gap-3 w-[60%]">
              <h1 className="font-bold text-4xl ">
                Silahkan Lengkapi Data Pemilik/Pengelola Kos
              </h1>
              <p className="leading-tight font-medium">
                Data pemilik digunakan apabila calon penyewa akan melakukan
                negosiasi dan pembayaran
              </p>
            </div>
            <Formik
              initialValues={{
                bank:
                  user?.data?.data?.data?.bank &&
                  (bankAvailable.includes(user?.data?.data?.data?.bank)
                    ? user?.data?.data?.data?.bank
                    : "Lainnya"),
                bank_number: user?.data?.data?.data?.bank_number,
                bank_name: user?.data?.data?.data?.bank_name,
                other_bank: !bankAvailable.includes(
                  user?.data?.data?.data?.bank
                )
                  ? user?.data?.data?.data?.bank
                  : "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.bank) {
                  errors.bank = "Required";
                }
                if (!values.bank_number) {
                  errors.bank_number = "Required";
                } else if (!/^\d{9,}$/.test(values?.bank_number)) {
                  errors.bank_number = "Invalid bank number";
                }
                if (!values.bank_name) {
                  errors.bank_name = "Required";
                }
                if (values.bank == "Lainnya" && !values.other_bank) {
                  errors.other_bank = "Required";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setProgressLoading(50);
                await editProfile.mutateAsync(
                  {
                    update: {
                      id: user?.data?.data?.data?._id,
                      bank:
                        values.bank == "Lainnya"
                          ? values.other_bank
                          : values.bank,
                      bank_number: values.bank_number,
                      bank_name: values.bank_name,
                    },
                  },
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries({
                        queryKey: ["auth", "me"],
                      });

                      navigate("/owner/kost");
                    },
                    onError: (error) => {
                      toast.error(error?.response?.data?.message, {
                        position: "top-center",
                      });
                      setSubmitting(false)
                    },
                    onSettled: () => {
                      setProgressLoading(100);
                    },
                  }
                );
              }}
            >
              {(formik) => (
                <Form className="grid grid-cols-1 font-bold gap-9">
                  <div className="grid gap-3">
                    <div>
                      <p>Rekening Bank</p>
                      <p className="font-normal">
                        Rekening yang digunakan untuk pembayaran melalui
                        transfer
                      </p>
                    </div>
                    <div className="grid gap-3 w-1/2">
                      <div className="relative">
                        <Field
                          className="bg-red-500 peer sr-only"
                          type="radio"
                          value="BCA"
                          id="BCA"
                          name="bank"
                        />
                        <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                        <label
                          htmlFor="BCA"
                          className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                        >
                          <span className="peer-checked:font-bold">
                            Bank BCA
                          </span>
                        </label>
                      </div>
                      <div className="relative">
                        <Field
                          className="bg-red-500 peer sr-only"
                          type="radio"
                          value="Mandiri"
                          id="Mandiri"
                          name="bank"
                        />
                        <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                        <label
                          htmlFor="Mandiri"
                          className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                        >
                          <span className="peer-checked:font-bold">
                            Bank Mandiri
                          </span>
                        </label>
                      </div>
                      <div className="relative">
                        <Field
                          className="bg-red-500 peer sr-only"
                          type="radio"
                          value="BNI"
                          id="BNI"
                          name="bank"
                        />
                        <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                        <label
                          htmlFor="BNI"
                          className=" font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                        >
                          <span className="peer-checked:font-bold">
                            Bank BNI
                          </span>
                        </label>
                      </div>
                      <div className="relative">
                        <Field
                          className="bg-red-500 peer sr-only"
                          type="radio"
                          value="BRI"
                          id="BRI"
                          name="bank"
                        />
                        <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                        <label
                          htmlFor="BRI"
                          className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                        >
                          <span className="peer-checked:font-bold">
                            Bank BRI
                          </span>
                        </label>
                      </div>
                      <div className="relative">
                        <Field
                          className="bg-red-500 peer sr-only"
                          type="radio"
                          value="BTN"
                          id="BTN"
                          name="bank"
                        />
                        <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                        <label
                          htmlFor="BTN"
                          className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                        >
                          <span className="peer-checked:font-bold">
                            Bank BTN
                          </span>
                        </label>
                      </div>
                      <div className="relative">
                        <Field
                          className="bg-red-500 peer sr-only"
                          type="radio"
                          value="Lainnya"
                          id="Lainnya"
                          name="bank"
                        />
                        <div className="w-4 h-4 rounded-full border-2 border-slate-400 peer-checked:bg-primary peer-checked:ring-1 top-1/2 absolute -translate-y-1/2 left-5" />
                        <label
                          htmlFor="Lainnya"
                          className="font-semibold flex items-center w-full cursor-pointer border-2 gap-2 px-12 py-3 rounded-full peer-checked:border-primary"
                        >
                          <span className="peer-checked:font-bold">
                            Lainnya
                          </span>
                        </label>
                      </div>
                    </div>

                    <ErrorMessage
                      component={"div"}
                      name="bank"
                      className="text-base px-5 text-red-600"
                    />
                  </div>

                  <div className="grid gap-3">
                    <div>
                      <p>Rekening Bank Lain</p>
                      <p className="font-normal">
                        Rekening bank lain yang tidak tertera diatas
                      </p>
                    </div>
                    <Field
                      type="text"
                      className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
                      placeholder="Ketikkan nama bank disini"
                      name="other_bank"
                      disabled={formik.values.bank != "Lainnya"}
                    />

                    <ErrorMessage
                      component={"div"}
                      name="other_bank"
                      className="text-base px-5 text-red-600"
                    />
                  </div>

                  <div className="grid gap-3 grid-cols-1">
                    <p>Nomor Rekening</p>
                    <Field
                      type="text"
                      name="bank_number"
                      className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
                      placeholder="Isi nomor rekening bank"
                    />
                    <ErrorMessage
                      component={"div"}
                      name="bank_number"
                      className="text-base px-5 text-red-600"
                    />
                  </div>

                  <div className="grid gap-3 grid-cols-1">
                    <p>Kepemilikan Rekening</p>
                    <Field
                      type="text"
                      name="bank_name"
                      className="border-2 w-3/4 py-3 px-6 rounded-full font-medium"
                      placeholder="Isi nama kepemilikan rekening bank"
                    />
                    <ErrorMessage
                      component={"div"}
                      name="bank_name"
                      className="text-base px-5 text-red-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 pt-5">
                    <button
                      disabled={formik.isSubmitting}
                      className="border-2 border-primary w-fit rounded py-2 px-7 text-primary"
                    >
                      Kembali
                    </button>
                    <button
                      type="submit"
                      className="w-fit rounded py-4 px-9 bg-primary  text-white justify-self-end hover:bg-secondary hover:text-primary hover:shadow-md active:shadow-none duration-100"
                      disabled={formik.isSubmitting}
                    >
                      Simpan & Lanjut
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </>
  );
}

export default OwnerData;

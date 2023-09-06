import React, { useState } from "react";
import OwnerDashboardSidebar from "../ownerDashboardSidebar";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useEditUserProfile, useUser } from "../../../queries/auth.js";
import ChildLoading from "../../AddOn/childLoading.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function OwnerDashboardProfilePassword() {
  const [isOldPasswordHidden, setIsOldPasswordHidden] = useState(true);
  const [isNewPasswordHidden, setIsNewPasswordHidden] = useState(true);
  const editProfile = useEditUserProfile();
  const user = useUser(true);
  const navigate = useNavigate()
  return (
    <div className="h-full w-full grid grid-cols-4 ">
      <OwnerDashboardSidebar />
      {user?.isLoading ? (
        <div className="col-span-3 flex items-center justify-center">
          <ChildLoading className='w-1/4'/>
        </div>
      ) : (
        <div className="col-span-3 grid pt-44  px-14 content-start gap-6 pb-20">
          <h3 className="text-2xl font-semibold">Ganti Password</h3>
          <Formik
            initialValues={{ new_password: "", old_password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.new_password) {
                errors.new_password = "Required";
              } else if (
                !/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(values.new_password)
              ) {
                errors.new_password =
                  "Invalid password, minimum 6 length and contains uppercase and lowercase letter";
              }

              if (!values.old_password) {
                errors.old_password = "Required";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              editProfile.mutate(
                {
                  update: {
                    id: user?.data?.data?.data?._id,
                    password: values.new_password,
                    old_password: values.old_password,
                  },
                },
                {
                  onError: (error) => {
                    toast.error(error?.response?.data?.message, {
                      position: "top-center",
                    });
                  },
                  onSettled: () => {
                    navigate("/owner/dashboard/profile");
                  },
                  onSuccess: () => {
                    toast.success("password updated", {
                      position: "top-center",
                    });
                  },
                }
              );
            }}
          >
            {(formik) => (
              <Form className="grid gap-2 px-14">
                <label className="font-semibold ">Password</label>
                <div className="w-fit relative">
                  <Field
                    placeholder="Masukkan password lama "
                    name="old_password"
                    type={isOldPasswordHidden ? "password" : "text"}
                    className="border-2 pl-5 pr-12 py-2 rounded-full w-[500px]"
                  />
                  <div
                    onClick={() => {
                      setIsOldPasswordHidden((prev) => !prev);
                    }}
                    className="cursor-pointer"
                  >
                    {isOldPasswordHidden ? (
                      <EyeSlashIcon className="absolute w-6 right-0 -translate-y-1/2 top-1/2 mr-5" />
                    ) : (
                      <EyeIcon className="absolute w-6 right-0 -translate-y-1/2 top-1/2 mr-5" />
                    )}
                  </div>
                </div>
                <ErrorMessage
                  component={"div"}
                  name="old_password"
                  className=" text-red-600 font-semibold text-sm px-4"
                />
                <label className="font-semibold ">Buat Password Baru</label>
                <div className="w-fit relative">
                  <Field
                    placeholder="Minimal 6 karakter "
                    name="new_password"
                    type={isNewPasswordHidden ? "password" : "text"}
                    className="border-2 px-5 py-2 rounded-full w-[500px]"
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setIsNewPasswordHidden((prev) => !prev);
                    }}
                  >
                    {isNewPasswordHidden ? (
                      <EyeSlashIcon className="absolute w-6 right-0 -translate-y-1/2 top-1/2 mr-5" />
                    ) : (
                      <EyeIcon className="absolute w-6 right-0 -translate-y-1/2 top-1/2 mr-5" />
                    )}
                  </div>
                </div>

                <ErrorMessage
                  component={"div"}
                  name="new_password"
                  className=" text-red-600 font-semibold text-sm px-4"
                />
                <button
                  className={
                    "w-[500px] bg-primary rounded-full text-white text-sm font-semibold py-2 my-5 "
                  }
                  disabled={formik.isSubmitting}
                  type="submit"
                >
                  Reset Password
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}

export default OwnerDashboardProfilePassword;

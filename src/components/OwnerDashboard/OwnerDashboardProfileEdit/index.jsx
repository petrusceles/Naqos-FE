import React from "react";
import OwnerDashboardSidebar from "../ownerDashboardSidebar";
import { CameraIcon } from "@heroicons/react/24/solid";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { useEditUserProfile } from "../../../queries/auth.js";
import { useNavigate } from "react-router-dom";
import ChildLoading from "../../AddOn/childLoading.jsx";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
function OwnerDashboardProfileEdit(props) {
  const user = props?.user?.data?.data?.data;
  const editProfile = useEditUserProfile();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [avatarUrl, setAvatarUrl] = useState(user?.avatar_url);
  const [avatar, setAvatar] = useState();
  const changeAvatarButton = useRef(null);

  const onChangeAvatarHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarUrl(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      const pictureTemp = e.target.files[0];
      setAvatar(pictureTemp);
    }
  };

  // const editProfileForm = useFormik({
  //   initialValues: {
  //     name: user?.name,
  //     email: user?.email,
  //     phone_number: user?.phone_number,
  //   },
  //   onSubmit: () => {

  //   }
  // });


  return (
    <>
      <div className="h-full w-full grid grid-cols-4">
        <OwnerDashboardSidebar />
        {props.user.isLoading ? (
          <div className="col-span-3 grid justify-items-center items-center ">
            <div className="w-1/4">
              <ChildLoading />
            </div>
          </div>
        ) : (
          <div className="col-span-3 grid pt-44 justify-items-center px-14 content-start gap-6 pb-20">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <img
                  src={avatarUrl ? avatarUrl : user?.avatar_url}
                  className="object-cover h-full w-full object-center"
                />
              </div>
              <div className="bg-slate-400 w-fit rounded-full absolute p-2 right-0 top-[80%] -translate-y-1/2">
                <CameraIcon
                  className=" w-5 text-white cursor-pointer"
                  onClick={() => {
                    changeAvatarButton.current.click();
                  }}
                />
                <input
                  type="file"
                  className="hidden"
                  ref={changeAvatarButton}
                  onChange={onChangeAvatarHandler}
                />
              </div>
            </div>
            <div className="text-2xl font-semibold">{user?.name}</div>
            <div className="grid font-semibold w-full gap-8 px-24">
              <div className="text-2xl">Informasi Akun</div>
              <Formik
                initialValues={{
                  name: user?.name,
                  email: user?.email,
                  phone_number: user?.phone_number,
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.phone_number) {
                    errors.phone_number = "Required";
                  } else if (
                    !/^\+\d{1,3}\s?\d{6,}$/.test(values.phone_number)
                  ) {
                    errors.phone_number =
                      "Invalid phone number, plase use country code";
                  }
                  if (!values.name) {
                    errors.name = "Required";
                  } else if (!/^.{4,}$/.test(values.name)) {
                    errors.name = "Invalid name";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  editProfile.mutate(
                    {
                      update: {
                        id: user?._id,
                        name: values.name,
                        phone_number: values.phone_number,
                        email: values.email,
                        avatar: avatar,
                      },
                    },
                    {
                      onSuccess: () => {
                        queryClient.invalidateQueries({
                          queryKey: ["auth", "me"],
                        });
                      },
                      onError: (error) => {
                        toast.error(error?.response?.data?.message, {
                          position: "top-center",
                        });
                      },
                      onSettled: () => {
                        navigate("/owner/dashboard/profile");
                      },
                    }
                  );
                }}
              >
                {(formik) => (
                  <Form className="grid text-lg px-8 gap-2 font-medium">
                    <div className="grid grid-cols-4 gap-2">
                      <label className="self-center">Nama Lengkap</label>
                      <div className="grow grid gap-2 col-span-3">
                        <Field
                          type="text"
                          name="name"
                          className=" border-2 px-4 py-2 rounded-full font-normal w-full"
                        />
                      </div>
                      <div />
                      <ErrorMessage
                        component={"div"}
                        name="name"
                        className="text-base px-5 text-red-600  col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <label className="self-center">Nomor HP</label>
                      <div className="grow grid gap-2 col-span-3">
                        <Field
                          type="text"
                          name="phone_number"
                          className=" border-2 px-4 py-2 rounded-full font-normal w-full"
                        />
                      </div>
                      <div />
                      <ErrorMessage
                        component={"div"}
                        name="phone_number"
                        className="text-base px-5 text-red-600  col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <label className="self-center">Email</label>
                      <div className="grow grid gap-2 col-span-3">
                        <Field
                          type="email"
                          name="email"
                          className=" border-2 px-4 py-2 rounded-full font-normal w-full"
                        />
                      </div>
                      <div />
                      <ErrorMessage
                        component={"div"}
                        name="email"
                        className="text-base px-5 text-red-600  col-span-3"
                      />
                    </div>
                    <button
                      className={
                        "grow text-white rounded-full py-2 ml-[25%] " +
                        (formik.errors || formik.isSubmitting
                          ? "bg-primary"
                          : "bg-slate-700")
                      }
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      Simpan
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OwnerDashboardProfileEdit;

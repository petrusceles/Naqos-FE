import React from "react";
import OwnerInputSidebar from "../ownerInputSidebar";
import { useOwnerForm, useOwnerFormDispatch } from "../ownerContext.jsx";
import { useKostFacility } from "../../../queries/filter.js";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { useNavigate } from "react-router-dom";
function OwnerKostAbout() {
  const ownerForm = useOwnerForm();
  const ownerFormDispatch = useOwnerFormDispatch();
  console.log("KOST-ABOUT", ownerForm);
  const kostFacility = useKostFacility();
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 min-w-[1280px] max-w-[1920px]">
      <OwnerInputSidebar />
      <div className="grid grid-cols-1 w-3/4 content-start py-20 px-8 gap-14">
        <div className="grid grid-cols-1 gap-3 w-[60%]">
          <h1 className="font-bold text-4xl ">Tentang Kos</h1>
          <p className="leading-tight font-medium">
            Silahkan centang dan isi hal-hal yang sesuai dengan kos
          </p>
        </div>
        <Formik
          initialValues={{
            kost_facility: ownerForm?.kost_facility ?? [],
            regulations: ownerForm?.regulations ?? [],
            bans: ownerForm?.bans ?? [],
            description: ownerForm?.description ?? "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values?.kost_facility?.length) {
              errors.kost_facility = "Required";
            }
            console.log(!values?.description);
            if (!values?.description) {
              errors.description = "Required";
            }
            return errors;
          }}
          onSubmit={(values) => {
            ownerFormDispatch({
              type: "kost_added",
              kost_data: { ...values },
            });
            navigate("/owner/kost-photo");
          }}
        >
          {(formik) => (
            <Form className="grid grid-cols-1 font-bold gap-9">
              <div className="grid gap-3">
                <div className="grid gap-1">
                  <p>Fasilitas Bersama</p>
                  <p className="font-normal">
                    Fasilitas umum yang dapat digunakan oleh seluruh penyewa
                  </p>
                  <ErrorMessage
                    name="kost_facility"
                    component={"div"}
                    className="text-base text-red-600"
                  />
                </div>
                <div
                  className="grid justify-items-start place-items-start gap-2 font-medium"
                  as={""}
                >
                  {kostFacility?.data?.data?.data?.kost_facilities?.map(
                    (facility) => {
                      return (
                        <label className="flex items-center gap-3">
                          <Field
                            type="checkbox"
                            className="checkbox checkbox-sm "
                            name="kost_facility"
                            value={facility?._id}
                          />
                          <div className="cursor-pointer" htmlFor="RuangTamu">
                            {facility?.name}
                          </div>
                        </label>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="grid gap-3">
                <label className="grid gap-1" htmlFor="regulations">
                  <p>Peraturan Kos</p>
                  <p className="font-normal">
                    Tulis aturan kos yang sesuai (opsional)
                  </p>
                </label>

                <FieldArray name="regulations">
                  {({ insert, remove, push }) => (
                    <div className="w-full grid gap-5">
                      {formik?.values?.regulations?.length > 0 &&
                        formik?.values?.regulations?.map(
                          (regulation, index) => (
                            <div className="flex gap-3">
                              <Field
                                key={index}
                                name={`regulations.${index}`}
                                className="border-2 w-3/4 py-3 px-6 rounded-md font-medium"
                                placeholder="Tulis aturan kos di sini"
                                type="text"
                              />
                              <button
                                className="w-fit rounded-md py-1 px-3 hover:bg-secondary duration-200 ease-in-out active:shadow-none hover:shadow-md"
                                onClick={() => remove(index)}
                              >
                                <TrashIcon className="h-6 w-6" />
                              </button>
                            </div>
                          )
                        )}
                      <button
                        type="button"
                        className="w-fit px-6 py-2 rounded bg-secondary text-slate-800 hover:shadow-md active:shadow-none"
                        onClick={() => push("")}
                      >
                        Tambah aturan
                      </button>
                    </div>
                  )}
                </FieldArray>
              </div>

              <div className="grid gap-3">
                <label className="grid gap-1" htmlFor="ban">
                  <p>Larangan Kos</p>
                  <p className="font-normal">
                    Tulis larangan kos yang sesuai (opsional)
                  </p>
                </label>
                <FieldArray name="bans">
                  {({ insert, remove, push }) => (
                    <div className="w-full grid gap-5">
                      {formik?.values?.bans?.length > 0 &&
                        formik?.values?.bans?.map((ban, index) => (
                          <div className="flex gap-3">
                            <Field
                              key={index}
                              name={`bans.${index}`}
                              className="border-2 w-3/4 py-3 px-6 rounded-md font-medium"
                              placeholder="Tulis larangan kos di sini"
                              type="text"
                            />
                            <button
                              className="w-fit rounded-md py-1 px-3 hover:bg-secondary duration-200 ease-in-out active:shadow-none hover:shadow-md"
                              onClick={() => remove(index)}
                            >
                              <TrashIcon className="h-6 w-6" />
                            </button>
                          </div>
                        ))}
                      <button
                        type="button"
                        className="w-fit px-6 py-2 rounded bg-secondary text-slate-800 hover:shadow-md active:shadow-none"
                        onClick={() => push("")}
                      >
                        Tambah larangan
                      </button>
                    </div>
                  )}
                </FieldArray>
              </div>

              <div className="grid gap-3">
                <div className="grid gap-1">
                  <p>Deskripsi Kos</p>
                  <p className="font-normal">
                    Ceritakan hal menarik tentang kos
                  </p>
                  <ErrorMessage
                    name="description"
                    component={"div"}
                    className="text-base text-red-600"
                  />
                </div>
                <Field
                  as="textarea"
                  name="description"
                  className="border-2 w-3/4 py-3 px-6 rounded-md font-medium min-h-[180px]"
                  placeholder="Tulis hal-hal menarik dari kos, jabarkan pula peraturan rinci kos (bila ada)"
                />
              </div>

              <div className="grid grid-cols-2 pt-10">
                <button className="border-2 border-primary w-fit rounded py-2 px-7 text-primary">
                  Kembali
                </button>
                <button
                  type="submit"
                  className="border-2 border-primary w-fit rounded py-2 px-7 bg-primary  text-white justify-self-end"
                >
                  Simpan & Lanjut
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default OwnerKostAbout;

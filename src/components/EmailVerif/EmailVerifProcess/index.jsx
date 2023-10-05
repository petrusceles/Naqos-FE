import React from "react";
import EmailVerifSuccessIcon from "../../../assets/email-verif-success.svg";
import Logo from "../../../assets/naqos-logo-tag.png";
import { Link, useLocation } from "react-router-dom";
import { useVerif } from "../../../queries/auth.js";
import EmailVerifSuccess from "./success.jsx";
import EmailVerifFailed from "./failed.jsx"
import Loading from "../../AddOn/Loading.jsx";
function EmailVerif() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id");
  const token = queryParams.get("token");
  console.log(id);
  const verif = useVerif({ data: { id, token } });
  console.log(verif?.data)
  
  return (
    <>
     {verif.isLoading && <Loading />}
     {verif.isSuccess ? <EmailVerifSuccess/> : <EmailVerifFailed/>}
    </>
  );
}

export default EmailVerif;

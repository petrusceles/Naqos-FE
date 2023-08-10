import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import FindKost from "../components/FindKost";
import Footer from "../components/Footer";
import NavbarUnsigned from "../components/Navbar/Unsigned/index.jsx";
import { useUser } from "../queries/auth.js";
import Loading from "../components/AddOn/Loading.jsx";
import { useLocation } from "react-router-dom";
function FindKostPage() {
  const user = useUser();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const keyword = queryParams.get("keyword")
  console.log(keyword)
  return user.isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col h-screen justify-between">
      {user.isSuccess ? (
        <NavbarSigned user={user.data.data.data} />
      ) : (
        <NavbarUnsigned />
      )}
      <FindKost keyword={keyword} />
      <Footer />
    </div>
  );
}

export default FindKostPage;

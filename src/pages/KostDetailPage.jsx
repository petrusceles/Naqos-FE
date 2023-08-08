import React from "react";
import NavbarSigned from "../components/Navbar/Signed";
import NavbarUnsigned from "../components/Navbar/Unsigned/index.jsx";
import Footer from "../components/Footer";
import KostDetail from "../components/KostDetail";
import { useUser } from "../queries/auth.js";
import Loading from "../components/AddOn/Loading.jsx";
import { useParams } from "react-router-dom";
import { useAllKost, useKostDetail } from "../queries/kost.js";
import { useReview } from "../queries/review.js";
function KostDetailPage() {
  const { id } = useParams();
  const user = useUser();
  const kostDetail = useKostDetail({id});
  // console.log(kostDetail?.data?.data?.data?.kost?.user?._id);
  const kostRecommendation = useAllKost({limit:5, sorted_by:'price_month', search_by:{user:kostDetail?.data?.data?.data?.kost?.user?._id}})
  const kostReview = useReview({ kost: id });
  // console.log(kostReview.data?.data?.data);
  return user.isLoading ||
    kostDetail.isLoading ||
    kostRecommendation.isLoading ||
    kostReview.isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col h-screen justify-between">
      {user.isSuccess ? (
        <NavbarSigned user={user.data.data.data} />
      ) : (
        <NavbarUnsigned />
      )}
      <KostDetail
        kost={kostDetail.data.data.data.kost}
        kost_recommendation={kostRecommendation.data?.data?.data?.kosts}
        reviews={kostReview.data?.data?.data}
      />
      <Footer />
    </div>
  );
}

export default KostDetailPage;

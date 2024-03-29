import React from "react";
import NavbarUnsigned from "../components/Navbar/Unsigned";
import NavbarSigned from "../components/Navbar/Signed";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import KostRecommendation from "../components/KostRecommendation";
import Banner from "../components/Banner";
import KostCheap from "../components/KostCheap";
import Footer from "../components/Footer";
import CTAuthModal from "../components/CTAuthModal";
import KostCities from "../components/KostCities";
import { useUser, useLoginUser } from "../queries/auth.js";
import Loading from "../components/AddOn/Loading.jsx";
function LandingPage() {
  const user = useUser();
  return user.isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="flex flex-col h-screen justify-between">
        {user.isSuccess ? (
          <NavbarSigned user={user.data.data.data} />
        ) : (
          <NavbarUnsigned />
        )}
        <Hero />
        <WhyUs />
        <KostRecommendation />
        <Banner />
        <KostCheap />
        <KostCities />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;

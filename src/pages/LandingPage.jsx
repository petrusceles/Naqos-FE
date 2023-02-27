import React from 'react'
import NavbarUnsigned from '../components/Navbar/Unsigned'
import NavbarSigned from '../components/Navbar/Signed'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import KostRecommendation from '../components/KostRecommendation'
function LandingPage() {
  return (
    <div>
        <NavbarSigned />
        {/* <NavbarUnsigned /> */}
        <Hero />
        <WhyUs />
        <KostRecommendation />
    </div>
  )
}

export default LandingPage
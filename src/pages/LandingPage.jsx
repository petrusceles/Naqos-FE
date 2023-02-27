import React from 'react'
import NavbarUnsigned from '../components/Navbar/Unsigned'
import NavbarSigned from '../components/Navbar/Signed'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
function LandingPage() {
  return (
    <div>
        <NavbarSigned />
        {/* <NavbarUnsigned /> */}
        <Hero />
        <WhyUs />
    </div>
  )
}

export default LandingPage
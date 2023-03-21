import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import ProfileWishlist from '../components/Profile/ProfileWishlist'
function ProfileWishlistPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <ProfileWishlist />
      <Footer />
    </div>
  )
}

export default ProfileWishlistPage
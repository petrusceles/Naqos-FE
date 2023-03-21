import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import ProfileEdit from '../components/Profile/ProfileEdit'

function ProfileEditPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavbarSigned />
      <ProfileEdit />
      <Footer />
    </div>
  )
}

export default ProfileEditPage
import React from 'react'
import NavbarSigned from '../components/Navbar/Signed'
import Footer from '../components/Footer'
import ProfileEdit from '../components/Profile/ProfileEdit'
import { useUser } from '../queries/auth.js';
import NavbarUnsigned from '../components/Navbar/Unsigned/index.jsx';

function ProfileEditPage() {
  const user = useUser();
  return (
    <div className="flex flex-col h-screen justify-between">
      {user.isSuccess ? (
        <NavbarSigned user={user?.data?.data?.data} />
      ) : (
        <NavbarUnsigned />
      )}
      <ProfileEdit />
      <Footer />
    </div>
  );
}

export default ProfileEditPage
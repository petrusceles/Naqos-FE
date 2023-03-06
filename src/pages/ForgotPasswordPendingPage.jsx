import React from 'react'
import Footer from '../components/Footer'
import ForgotPasswordPending from '../components/ForgotPassword/ForgotPasswordPending'
function ForgotPasswordPendingPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
        <ForgotPasswordPending />
        <Footer />
    </div>
  )
}

export default ForgotPasswordPendingPage
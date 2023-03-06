import React from 'react'
import EmailVerifPending from '../components/EmailVerif/EmailVerifPending'
import Footer from '../components/Footer'
function EmailVerifPendingPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
        <EmailVerifPending />
        <Footer />
    </div>
  )
}

export default EmailVerifPendingPage
import React from 'react'
import EmailVerifFailed from '../components/EmailVerif/EmailVerifFailed'
import Footer from '../components/Footer'
function EmailVerifFailedPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <EmailVerifFailed />
      <Footer />
    </ div>
  )
}

export default EmailVerifFailedPage
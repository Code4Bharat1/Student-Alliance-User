export const metadata = {
  robots: { index: false, follow: false },
};

import Login from '@/components/ForgetPass/Contact/Contact'
import React from 'react'

const Page = () => {
  return (
    <div>
     {/* <Navbar/>  */}
     <Login/>
     {/* <Footer/> */}
    </div>
  )
}

export default Page

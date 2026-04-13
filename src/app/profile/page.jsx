export const metadata = {
  robots: { index: false, follow: false },
};

import UserProfile from '@/components/UserProfile/Profile'
import React from 'react'

const Page = () => {
  return (
    <div>
      <UserProfile/>
    </div>
  )
}

export default Page

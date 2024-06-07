import Image from 'next/image'
import React from 'react'

export default function BottomBanner() {
  return (
    <div className='bottom_banner'>
      <div className="topimage">
          <p>The mobile banking service is available on Smart Phones and Tablets using iOS, Android and Windows mobile operating systems.. The E-banking platform can be accessed using Internet Explorer, Google Chrome, Mozilla Firefox, Safari and Opera browsers.</p>
          <div className="stores">
            <Image
              width={150}
              height={50}
              className='store-logo'
              src="/assets/images/googlestore.png"
              alt="vicwhite"
            />
            <Image
              width={150}
              height={50}
              className='store-logo'
              src="/assets/images/applestore.png"
              alt="vicwhite"
            />
          </div>
        </div>
    </div>
  )
}

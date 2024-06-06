import React from 'react'
import Image from "next/image";

export default function Quicklinks() {
  return (
    <div className="quick-shots">
        <div className="box">
            <Image
              width={30}
              height={30}
              className='services'
              src="/assets/images/beneficiary.svg"
              alt="profile"
            />
            <h4>Beneficiary</h4>
          </div>
          <div className="box">
            <Image
              width={30}
              height={30}
              className='services'
              src="/assets/images/bill_payment.svg"
              alt="profile"
            />
            <h4>Bill Payment</h4>
          </div>
          <div className="box">
            <Image
              width={30}
              height={30}
              className='services'
              src="/assets/images/buyairtime.svg"
              alt="profile"
            />
            <h4>Buy Airtime</h4>
          </div>
          <div className="box">
            <Image
              width={30}
              height={30}
              className='services'
              src="/assets/images/mpesa.png"
              alt="profile"
            />
            <h4>Mpesa</h4>
          </div>
          <div className="box">
            <Image
              width={30}
              height={30}
              className='services'
              src="/assets/images/pesalink.svg"
              alt="profile"
            />
            <h4>Pesalink</h4>
          </div>
          <div className="box">
            <Image
              width={30}
              height={30}
              className='services'
              src="/assets/images/addaccount.svg"
              alt="profile"
            />
            <h4>Add Account</h4>
          </div>
    </div>
  )
}
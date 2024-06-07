import AccountSummary from '@/app/components/AccountSummary'
import UserAccount from '@/app/components/UserAccount'
import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";


export default function Accounts() {
  return (
    <div  className="main-home">
      <div className="shots">
                <p className='listitems'>Dashboard / Account Summary</p>
                <p className="greetings">Welcome Back</p>
                <h2>Mr. A. N. Other</h2>
                <p className="lastlogin">Last Login: 10-05-2024  10:40</p>

                <UserAccount/>

                <div className='submenus'>
                    <h3>Account Summary</h3>
                    <ul>
                        <li>Pending Transactions <span><FaCircleArrowRight /></span></li>
                        <li>In Process Transactions <span><FaCircleArrowRight /></span></li>
                        <li>Initiated Transactions <span><FaCircleArrowRight /></span></li>
                        <li>Rejected Transactions <span><FaCircleArrowRight /></span></li>
                    </ul>
                </div>

            </div>
      <div className="">
      <AccountSummary/>
      </div>
    </div>
  )
}

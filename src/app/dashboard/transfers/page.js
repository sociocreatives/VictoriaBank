import UserAccount from '@/app/components/UserAccount'
import React from 'react'

export default function Transfers() {
  return (
    <div className="main-home">
            <div className="shots">
                <p className='listitems'>Dashboard / Tasks</p>
                <p className="greetings">Welcome Back</p>
                <h2>Mr. A. N. Other</h2>
                <p className="lastlogin">Last Login: 10-05-2024  10:40</p>

                <UserAccount/>

                <div className='submenus'>
                    <h3>Transfers</h3>
                    <ul>
                        <li>Add Beneficiary</li>
                        <li>View Beneficiary</li>
                        <li>Within Bank</li>
                        <li>Own Accounts</li>
                    </ul>
                </div>

            </div>
            <div className="">
                Transfers      </div>
        </div>
  )
}

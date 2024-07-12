"use client"
import Image from 'next/image'
import React from 'react'
import accounts from '/models/accounts.json';
import company from '/models/companyname.json';
import currency from '/models/currency.json';
import beneficiary from '/models/beneficiaries.json';


const AccountComponent = () => {
    return (

        <form>
            <div className='airtime_modal'>
                <div className='header_modal'>
                    <Image
                        width={30}
                        height={30}
                        className='services'
                        src="/assets/images/pesalink.svg"
                        alt="profile"
                    />
                    <h2>Add Account | <span>Accounts</span></h2>
                </div>
                <div className='first_inpute'>

                    <select name="accounts" id="accounts">
                        {accounts.map((getservice, index) => (
                            <option value="{getservice.accountNumber}" key={index}>{getservice.accountNumber}</option>
                        ))}

                    </select>
                    <input type='text' placeholder='Account Name' disabled />
                </div>

                <div className='first_inpute'>
                    <input type='text' placeholder='Amount' />
                    <select name="accounts" id="accounts">
                        {beneficiary.map((getservice, index) => (
                            <option value="{getservice.fullName}" key={index}>{getservice.fullName}</option>
                        ))}
                    </select>
                </div>
                <div className='first_inpute'>
                    <input type='text' placeholder='Mobile Number' />
                    <input type='text' placeholder='Payment Details' />
                </div>
                <button type='submit'>SUBMIT</button>
            </div>
        </form>
    )
}

export default AccountComponent

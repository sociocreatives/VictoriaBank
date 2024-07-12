"use client"
import Image from 'next/image'
import React from 'react'
import accounts from '/models/accounts.json';
import company from '/models/companyname.json';
import currency from '/models/currency.json';


const AirtimeComponent = () => {
    return (

        <form>
            <div className='airtime_modal'>
                <div className='header_modal'>
                    <Image
                        width={30}
                        height={30}
                        className='services'
                        src="/assets/images/buyairtime.svg"
                        alt="profile"
                    />
                    <h2>Buy Airtime | <span>Payments</span></h2>
                </div>
                <div className='first_inpute'>

                    <select name="accounts" id="accounts">
                        {accounts.map((getservice, index) => (
                            <option value="{getservice.accountNumber}" key={index}>{getservice.accountNumber}</option>
                        ))}

                    </select>
                    <input type='text' placeholder='Account Name' disabled />
                </div>

                <select name="company" id="companies">
                    {company.map((getservice, index) => (
                        <option value="{getservice.companyName}" key={index}>{getservice.companyName}</option>
                    ))}

                </select>

                <div className='first_inpute'>
                    <input type='text' placeholder='Amount' />
                    <select name="accounts" id="accounts">
                        {currency.map((getservice, index) => (
                            <option value="{getservice.currencyId}" key={index}>{getservice.currencyName}</option>
                        ))}
                    </select>
                </div>
                <div className='first_inpute'>
                    <input type='text' placeholder='Mobile Number' />
                    <input type='text' placeholder='Mobile Number to Top Up' />
                </div>
                <button type='submit'>SUBMIT</button>
            </div>
        </form>
    )
}

export default AirtimeComponent

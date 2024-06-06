"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import {Button} from "@nextui-org/button";
import DataTable from '../components/DataTable';


export default function Otp() {
    const [otp, setOtp] = useState(new Array(4).fill(""))

    function handleChange(e, index) {
        if (isNaN(e.target.value)) return false;

        setOtp([
            ...otp.map((data, indx) => (indx === index ? e.target.value : data))
        ]);

        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus()
        }
    }
    
    return (
        <div>
            <div className='otparea'>
            {otp.map((data, i) => {
                return
                <input type='text' key={i} value={data} maxLength={1} onChange={(e) => handleChange(e, i)} />            })}
            </div>
            <Link href="/dashboard"><button>SUBMIT</button></Link>
            <Button>Press me</Button>
            <DataTable/>
        </div>
    )
}



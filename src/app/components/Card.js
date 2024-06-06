'use client'
import { useContext, useState } from "react";
import Image from "next/image";
import { BiHide } from "react-icons/bi";

export default function Card() {
    const [show, setShow]=useState(false)

    return (
        <div className='accoutn_card'>
            <div className='logo_chip'>
                <Image
                    width={30}
                    height={40}
                    className='chiplogo_image'
                    src="/assets/images/chip.svg"
                    alt="vicwhite"
                />
                <Image
                    width={100}
                    height={40}
                    className='viclogo_image'
                    src="/assets/images/vic_white.svg"
                    alt="vicwhite"
                />
            </div>
            <div className='balance_card'>
                <div className='mainbalance'>
                    <p>Balance    <span><BiHide className='showhide' onClick={()=>setShow(!show)}/></span></p>
                    { show? <h4>$ 10,000.00</h4> : <h4>*************</h4>}
                    
                </div>
                <p className='user_account_type'>USD</p>
            </div>
        </div>
    )
}

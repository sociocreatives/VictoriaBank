import React from 'react'
import { BiEnvelope, BiBell } from "react-icons/bi";
import Image from "next/image";


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='pagename'><p></p></div>
            <div className='navbarelements'>
                <div className='iconssides'>
                    <BiBell className='icons' />
                    <BiEnvelope className='icons' />
                </div>

                <div className='prof'>
                    <p>A.N Other</p>
                    <Image
                        width={40}
                        height={40}
                        className='profile_image'
                        src="/assets/images/erick.jpeg"
                        alt="profile"
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import ProfileDropdown from '../ui/profile-dropdown'
import EMSLogo from '../../../public/logos/light-ens-logo.png'
import Image from "next/image";

export const FormHeader = () => {
    return (
        <>
            <div className='w-full py-2 px-5 bg-white border-b flex items-center justify-between'>
                <div className='flex items-center'>
                    <Image
                        src={EMSLogo}
                        alt="EMS Logo"
                        className="w-[75px] h-8 object-contain"
                    />
                </div>
                <div className='flex items-center'>
                    <ProfileDropdown />
                </div>
            </div>
        </>
    )
}

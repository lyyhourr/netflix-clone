import Image from 'next/image'
import React, { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className='relative flex h-screen bg-black md:items-center md:justify-center md:bg-transparent'>
            <Image
                src={"/login_background.jpg"}
                className='hidden sm:flex sm:object-cover -z-10
                brightness-50'
                alt=''
                fill
                priority
            />
            <Image
                src={"/netflix_logo.svg"}
                className='absolute left-4 top-4 object-contain md:left-10 md:top-6'
                alt='logo'
                width={120}
                height={120}
                priority
            />
            {children}
        </div>
    )
}

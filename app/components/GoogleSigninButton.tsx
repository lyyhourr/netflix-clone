"use client"
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export default function GoogleSigninButton() {
    return (
        <Button onClick={() => signIn("google")} variant={"outline"} size={"icon"}>
            <Image
                src={"/google.svg"}
                alt='google icon'
                className='w-6 h-6'
                width={10000}
                height={10000}
            />
        </Button>
    )
}

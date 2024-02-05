"use client"
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Signout() {
    const router = useRouter()
    const signout = async () => {
        const sign_out = await signOut()
        if (sign_out) {
            router.refresh()
        }
    }
    return (
        <Button onClick={signout}>sign out</Button>
    )
}

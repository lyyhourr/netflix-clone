"use client"
import { Button } from '@/components/ui/button'
import { GithubIcon } from 'lucide-react'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function GithubSigninButton() {
    return (
        <Button onClick={() => signIn("github")} variant={"outline"} size={"icon"}>
            <GithubIcon />
        </Button>
    )
}

import { authOptions } from '@/utils/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'
import Signout from '../components/Signout'
import { redirect } from 'next/navigation'
import Navbar from '../components/Navbar'
import MovieVideo from '../components/MovieVideo'
import RecentlyAdded from '../components/RecentlyAdded'

export default async function Home() {
    const session: any = await getServerSession(authOptions)

    if (!session) {
        redirect("/login")
    }
    return (
        <div className='p-3 lg:p-0'>
            <MovieVideo />
            <h1 className='text-3xl font-bold '>Recently Added</h1>
            <RecentlyAdded />
        </div>
    )
}

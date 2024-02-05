import { PlayCircle } from 'lucide-react'
import React from 'react'
interface iAppProps {
    title: string
    overview: string
    movieId: number
    watchLists: boolean
    watchListId: string
    youtubeUrl: string
}
export default function MovieCard({ movieId, overview, title, watchListId, watchLists, youtubeUrl }: iAppProps) {
    return (
        <>
            <button className='mt-14'>
                <PlayCircle className='h-20 w-20' />
            </button>
            <div className='right-5 top-5 absolute z-10'>
                {
                    watchLists ? (
                        <h1>yess</h1>
                    ) : (

                        <h1>no</h1>
                    )
                }
            </div>
        </>
    )
}

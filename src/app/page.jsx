// 'use client'
// import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import Label from '@/components/Label'
import axios from '@/lib/axios'
import Link from 'next/link'
import Image from 'next/image'

const getNovels = async () => {
    // const novels = await fetch('http://novel-backend.test/api/novels?page=1')
    const novels = await fetch('http://novel-backend.test/api/novels')

    const novelsData = await novels.json()
    console.log(novelsData)

    return novelsData
}
const Home = async () => {
    const novelData = await getNovels()
    const novel = await novelData.data
    console.log(novel)

    return (
        <div className='grid sm:grid-cols-2'>
            {novel.map(data => (
                <div className='p-2 bg-white' key={data.id}>
                    <Link href={`/novel/${data.id}`}>
                        <div className='flex h-32 md:h-44 hover:text-green-500'>
                            <div className='relative mr-2 basis-1/4'>
                                <Image
                                    src={data.cover}
                                    alt='cover'
                                    objectFit='cover'
                                    fill={true}
                                />
                            </div>
                            <div className='overflow-hidden basis-3/4'>
                                <h1 className='text-sm font-bold capitalize md:text-lg'>
                                    {data.title}
                                </h1>
                                <p className='text-sm md:text-base line-clamp-5 md:line-clamp-6'>
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

// const Home = () => {
//     const [novel, setNovel] = useState([])

//     useEffect(() => {
//         const getNovels = async () => {
//             try {
//                 const novels = await axios.get('/api/novels?page=1')
//                 const novelsData = await novels.data.data

//                 console.log(novelsData)
//                 setNovel(novelsData)
//             } catch (error) {
//                 console.error('Error fetching menu data:', error)
//             }
//         }
//         getNovels()
//     }, [])

//     return (
//         <div>
//             {novel.map(data => (
//                 <div key={data.id}>
//                     <a href=''>{data.title}</a>
//                 </div>
//             ))}
//         </div>
//     )
// }

export default Home

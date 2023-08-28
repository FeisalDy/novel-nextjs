// 'use client'
// import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import Label from '@/components/Label'
import axios from '@/lib/axios'
import Link from 'next/link'
import Image from 'next/image'

const getNovels = async () => {
    try {
        const res = await fetch('http://novel-backend.test/api/novels?page=1', {
            cache: 'no-store'
        })
        const data = await res.json()

        const totalPage = data.meta.last_page

        const novelsResponse = await fetch(
            `http://novel-backend.test/api/novels?page=${totalPage}, { cache: 'no-store' }`
        )
        const novelsData = await novelsResponse.json()

        return novelsData
    } catch (error) {
        console.error('Error fetching data:', error)
        return null
    }
}
const Home = async () => {
    const novelData = await getNovels()
    const novel = await novelData.data
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='p-2 text-xl text-white rounded-sm bg-custom-green'>
                        Latest Novel
                    </h2>
                </div>
                <Link
                    href={{
                        pathname: '/novel',
                        query: { page: '1' }
                    }}
                    className='p-2 hover:text-green-400'
                >
                    {'More >>'}
                </Link>
            </div>
            <div
                className={`grid ${
                    novel.length % 2 === 0 ? 'sm:grid-cols-2' : ''
                }`}
            >
                {novel.map((data, index) => (
                    <div
                        className={`p-2 bg-white ${
                            novel.length % 2 !== 0 && index === novel.length - 1
                                ? 'sm:col-span-2'
                                : ''
                        }`}
                        key={data.id}
                    >
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
                                    <h2 className='text-sm font-bold capitalize md:text-lg'>
                                        {data.title}
                                    </h2>
                                    <p className='text-sm md:text-base line-clamp-5 md:line-clamp-6'>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
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

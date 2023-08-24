// 'use client'
// import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import Label from '@/components/Label'
import axios from '@/lib/axios'
import Link from 'next/link'

const getNovels = async () => {
    const novels = await fetch('http://novel-backend.test/api/novels?page=1')

    const novelsData = await novels.json()
    console.log(novelsData)

    return novelsData
}

const Home = async () => {
    const novelData = await getNovels()
    const novel = await novelData.data
    console.log(novel)

    return (
        <div>
            {novel.map(data => (
                <div key={data.id}>
                    <a href=''>{data.title}</a>
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

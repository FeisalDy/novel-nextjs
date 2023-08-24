'use client'
import Button from '@/components/Button'
import Label from '@/components/Label'
import React, { useEffect } from 'react'
import axios from '@/lib/axios'
import Link from 'next/link'
import { useState } from 'react'

const Home = () => {
    const [novel, setNovel] = useState([])

    useEffect(() => {
        const getNovels = async () => {
            try {
                const novels = await axios.get('/api/novels')
                const novelsData = await novels.data.data

                console.log(novelsData)
                setNovel(novelsData)
            } catch (error) {
                console.error('Error fetching menu data:', error)
            }
        }
        getNovels()
    }, [])

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

export default Home

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

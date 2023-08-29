'use client'
import React, { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ReactPaginate from 'react-paginate'

const Novel = () => {
    const router = useSearchParams()
    const page = Number(router.get('page')) || 1
    const sort = router.get('sort')

    const [novels, setNovels] = useState([])
    const [meta, setMeta] = useState({}) // State to track pagination data
    const dataLength = novels.length

    const handlePagination = newPage => {
        router.push({
            pathname: '/novel',
            query: { page: newPage, sort }
        })
    }

    useEffect(() => {
        const getNovels = async () => {
            try {
                const res = await fetch(
                    `http://novel-backend.test/api/novels?sort=${sort}&page=${page}`,
                    {
                        cache: 'no-store'
                    }
                )

                const data = await res.json()
                const novelsData = data.data
                const meta = data.meta

                setNovels(novelsData)
                setMeta(meta)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        getNovels()
    }, [page, sort])

    console.log(meta)

    return (
        <div>
            <div>
                <Link
                    href={{
                        pathname: '/novel',
                        query: { page: '1', sort: 'latest' }
                    }}
                >
                    Latest
                </Link>
                <Link
                    href={{
                        pathname: '/novel',
                        query: { page: '1', sort: 'oldest' }
                    }}
                >
                    Oldest
                </Link>
            </div>
            <div>
                <Link
                    href={{
                        pathname: '/novel',
                        query: { page: page - 1, sort }
                    }}
                >
                    Previous
                </Link>

                {/* Next page link */}
                <Link
                    href={{
                        pathname: '/novel',
                        query: { page: page + 1, sort }
                    }}
                >
                    Next
                </Link>
            </div>
            <div
                className={`grid ${
                    dataLength % 2 === 0 ? 'sm:grid-cols-2' : ''
                }`}
            >
                {novels.map((data, index) => (
                    <div
                        className={`p-2 bg-white ${
                            dataLength % 2 !== 0 && index === dataLength - 1
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

export default Novel

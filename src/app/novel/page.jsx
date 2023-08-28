'use client'
import React from 'react'

const getNovels = async () => {
    try {
        const res = await fetch('http://novel-backend.test/api/novels?page=1', {
            cache: 'no-store'
        }).then(res => res.json())

        const totalPage = res.meta.last_page
        console.log(totalPage)
    } catch (error) {
        console.error('Error fetching data:', error)
        return null
    }
}

const Novel = () => {
    const novelData = getNovels()
    return <div>Novel</div>
}

export default Novel

'use client'
import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const Nav = () => {
    const { user, logout } = useAuth()
    return (
        <nav>
            <ul className='flex justify-center'>
                <li className='px-4'>
                    {' '}
                    <Link href='/'>Home</Link>
                </li>
                <li className='px-4'>
                    {' '}
                    <Link href='/about'>About</Link>
                </li>
                <li className='px-4'>
                    {' '}
                    <Link href='/'>Service</Link>
                </li>
                {user ? (
                    <li className='px-4'>
                        <Link href='#' className='' onClick={logout}>
                            Logout
                        </Link>
                    </li>
                ) : (
                    <li className='px-4'>
                        <Link href='/login' className=''>
                            Login
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav

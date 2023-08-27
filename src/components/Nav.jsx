'use client'
import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Label from './Label'
import Input from './Input'
import Button from './Button'

const Nav = () => {
    const { user, logout } = useAuth()
    const [active, setActive] = useState(false)
    const navRef = useRef(null)

    const handleClick = () => {
        setActive(!active)
    }

    const handleOutsideClick = event => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setActive(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleOutsideClick)
        return () => {
            window.removeEventListener('click', handleOutsideClick)
        }
    }, [])

    return (
        // <nav className='bg-white'>
        //     <ul className='flex justify-center'>
        //         <li className='px-4'>
        //             {' '}
        //             <Link href='/'>Home</Link>
        //         </li>
        //         <li className='px-4'>
        //             {' '}
        //             <Link href='/about'>About</Link>
        //         </li>
        //         <li className='px-4'>
        //             {' '}
        //             <Link href='/'>Service</Link>
        //         </li>
        //         {user ? (
        //             <li className='px-4'>
        //                 <Link href='#' className='' onClick={logout}>
        //                     Logout
        //                 </Link>
        //             </li>
        //         ) : (
        //             <li className='px-4'>
        //                 <Link href='/login' className=''>
        //                     Login
        //                 </Link>
        //             </li>
        //         )}
        //     </ul>
        // </nav>
        <nav className='flex flex-wrap items-center p-3 bg-white' ref={navRef}>
            <Link href='/'>
                <div className='inline-flex items-center p-2'>
                    <Image
                        src='/logo.svg'
                        height={48}
                        width={48}
                        alt='Read Novel'
                    />
                    <span className='hidden pl-4 text-xl font-bold tracking-wide text-black uppercase sm:block'>
                        Dragon Da
                    </span>
                </div>
            </Link>

            <button
                className='inline-flex p-3 ml-auto text-black rounded outline-none hover:bg-green-600 lg:hidden hover:text-black'
                onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>

            <div
                className={`${
                    active ? '' : 'hidden'
                }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
                <div className='flex flex-col items-start lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
                    <Link className='w-full lg:w-auto' href='/'>
                        <p
                            className='items-center justify-center px-3 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white'
                            onClick={handleClick}
                        >
                            Home
                        </p>
                    </Link>
                    <Link className='w-full lg:w-auto' href='/'>
                        <p
                            className='items-center justify-center px-3 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white'
                            onClick={handleClick}
                        >
                            Read
                        </p>
                    </Link>

                    {user ? (
                        <Link
                            className='w-full lg:w-auto'
                            href='#'
                            onClick={logout}
                        >
                            <p
                                className='items-center justify-center px-3 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white'
                                onClick={handleClick}
                            >
                                Logout
                            </p>
                        </Link>
                    ) : (
                        <Link className='w-full lg:w-auto' href='/login'>
                            <p
                                className='items-center justify-center px-3 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white'
                                onClick={handleClick}
                            >
                                Login
                            </p>
                        </Link>
                    )}
                </div>

                <div className='flex pl-4'>
                    <div className='flex w-full border rounded lg:w-auto'>
                        <form
                            onSubmit=''
                            autoComplete='off'
                            className='w-full space-y-4 lg:w-auto'
                        >
                            <div className='w-5/6'>
                                <Input
                                    id='text'
                                    type='text'
                                    // value={email}
                                    className=''
                                    // onChange={e => [setEmail(e.target.value)]}
                                    required
                                    autoFocus
                                    placeholder='Search'
                                />
                            </div>
                        </form>
                        <Button className='flex items-center justify-center w-1/6 bg-transparent border-l'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-6 h-6 text-gray-600'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav

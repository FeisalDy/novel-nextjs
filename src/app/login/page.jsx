'use client'
import Button from '@/components/Button'
import React, { useState } from 'react'
import Input from '@/components/Input'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import Error from '@/components/Error'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const { login, isLoading, user } = useAuth({ middleware: 'guest' })

    if (isLoading || user) {
        return <>is Loading...</>
    }

    const submitForm = async e => {
        e.preventDefault()

        login({ email, password, setErrors })
    }

    return (
        <div className='flex justify-center'>
            <div className='w-11/12 p-2 mb-4 bg-white'>
                <Error errors={errors} />

                <form
                    onSubmit={submitForm}
                    autoComplete='off'
                    className='space-y-4'
                >
                    <div className=''>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id='email'
                            type='email'
                            value={email}
                            className='w-full'
                            onChange={e => setEmail(e.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    <div className=''>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            id='password'
                            type='password'
                            value={password}
                            className='w-full'
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className=''>
                        <Button>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

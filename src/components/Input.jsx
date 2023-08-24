import React from 'react'

const Input = ({ disabled = false, className = '', ...props }) => {
    return (
        <input
            disabled={disabled}
            className={`${className} outline-none border border-indigo-200 h-10 px-2 w-full rounded-md`}
            {...props}
        />
    )
}

export default Input

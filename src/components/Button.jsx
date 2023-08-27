import React from 'react'

const Button = ({ type = 'submit', className = '', ...props }) => {
    return (
        <button
            type={type}
            className={`${className} rounded inline-flex items-center px-4 py-2 bg-green-400 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-600 active:bg-green-600 focus:outline-none disabled:opacity-25 transition ease-in-out duration-150`}
            {...props}
        />
    )
}

export default Button

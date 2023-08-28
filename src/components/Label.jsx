import React from 'react'

const Label = ({ children, className = '', ...props }) => {
    return (
        <label className={`${className} block`} {...props}>
            {children}
        </label>
    )
}

export default Label

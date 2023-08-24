import React from 'react'

const Error = ({ errors = [], ...props }) => {
    return (
        <>
            {errors.length > 0 && (
                <div {...props}>
                    <div className='text-red-500 bold'>Error!</div>

                    <ul className='mb-2 text-sm text-red-500 '>
                        {errors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Error

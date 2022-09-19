import React from 'react'

export default function AddUser({ label, inputProps, onChange, value }) {
    return (
        <div className='flex flex-col '>
            <label className='mb-2 text-base text-gray-800'>
                {label}
            </label>
            <input
            className='widthOfBar bg-gray-200 py-2 px-3 border-2 outline-none'
            {...inputProps} onChange={onChange} value={value} />

        </div>
    )
}

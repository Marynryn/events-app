import React from 'react'

export const LiItem = ({ children }) => {
    return (
        <li className='bg-light-gray rounded-3xl px-4 py-2'>{children}</li>
    )
}
export default LiItem;

import React from 'react'



const Card = ({ props }) => {

    return (
        <div className=" p-4 " >

            <p className='text-sm mb-4 '>{props.name}</p>
            <p className='text-sm'>{props.email}</p>


        </div>)
}

export default Card;
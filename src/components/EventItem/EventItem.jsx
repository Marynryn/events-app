
import React from 'react'
import { formatDateString } from './../../helpers/formatDate';
import { Navigation } from 'components/Navigation/Navigation';


const EventItem = ({ props }) => {




    return (
        <div className="h-full p-6 " >

            <h3 className='text-lg text-lime-600 mb-4 min-h-14'>{props.title}</h3>
            <p className='text-sm mb-4 min-h-20'>{props.description}</p>
            <p className='mb-4 text-sm'>{formatDateString(props.event_date)}</p>
            <p className='text-sm'>{props.organizer}</p>
            <div className=' mt-6 mb-0 '> <Navigation props={props} /></div>

        </div>)
}

export default EventItem;
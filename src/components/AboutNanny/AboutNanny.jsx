import React from 'react'
import calculateAge from 'helpers/calculateAge';
import LiItem from 'components/LiItem/LiItem';


export const AboutNanny = ({ props }) => {

    const age = calculateAge(props.birthday);
    const characters = props.characters.map(item => item[0].toUpperCase() + item.slice(1));
    const result = characters.join(", ");
    return (
        <ul className='flex flex-wrap gap-2 font-medium text-base text-gray'>
            <LiItem>
                <p>Age: <span className='text-black underline underline-offset-1'>{age}</span> </p>
            </LiItem>

            <LiItem>
                <p>Experience: <span className='text-black'>{props.experience}</span></p></LiItem>
            <LiItem> <p>Kids age:<span className='text-black'> {props.kids_age}</span></p></LiItem>
            <LiItem> <p>Characters:<span className='text-black'> {result}</span></p></LiItem>
            <LiItem><p>Education:<span className='text-black'> {props.education}</span></p></LiItem>
            <li className='mt-4' style={{ marginBottom: "14px" }}> <p className="font-normal ">{props.about}</p></li>

        </ul>
    )
}
export default AboutNanny;
import { NavLink } from 'react-router-dom';



export const Navigation = ({ props }) => {


    return (
        <nav className=''>
            <ul className='flex  justify-between  '>
                <li id="1" className='font-normal text-blue-600 text-base underline hover:scale-110'>
                    <NavLink to={`/${props._id}/registration`}>
                        Register
                    </NavLink></li>
                <li id="2" className="font-normal text-blue-600 text-base underline hover:scale-110" >
                    <NavLink to={`/${props._id}/participants`} >
                        View
                    </NavLink></li>

            </ul>


        </nav >

    );
};
import { NavLink, useLocation } from 'react-router-dom';
import { IsLoggedIn } from 'helpers/isLoggedIn';
import { useEffect, useState } from 'react';


export const Navigation = () => {
    const location = useLocation();
    const [activePage, setActivePage] = useState('');


    useEffect(() => {

        setActivePage(location.pathname);
    }, [location]);

    return (
        <nav className='lg:items-center  text-center'>
            <ul className='block lg:h-10 lg:flex text-center mb-4 lg:mb-0 lg:justify-center  lg:items-center '>
                <li id="1" className='font-normal mb-4 lg:mb-0 text-base lg:mr-8 xl:mr-10 hover:scale-110'>
                    <NavLink to="/">
                        Home
                    </NavLink></li>
                <li id="2" className={`font-normal mb-4 lg:mb-0 hover:scale-110 after:hidden text-base ${activePage === '/nannies' ? ' relative lg:after:block after:content-[" "] after:w-2 after:h-2 after:bg-white after:rounded-full after:top-6 after:right-6  after:absolute' : ''}`} >
                    <NavLink to="/nannies">
                        Nannies
                    </NavLink></li>
                <li id="3" className={`font-normal  after:hidden hover:scale-110 text-base lg:ml-8 ${activePage === '/favorites' ? ' relative lg:after:block after:content-[" "] after:w-2 after:h-2 after:bg-white after:rounded-full after:top-6 after:right-6  after:absolute' : ''}`} >  {IsLoggedIn() && (<NavLink className="" to="/favorites">
                    Favorites
                </NavLink>)}</li>

            </ul>


        </nav >

    );
};

import Button from 'components/Button/Button'
import { IsLoggedIn } from 'helpers/isLoggedIn'
import React, { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from 'firebase.js';
import sprite from "svg/symbol-defs.svg";


export const UserMenu = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const loggedInUser = await IsLoggedIn();
            setUser(loggedInUser);
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('Logout successful');
            setUser(null);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className='lg:flex  items-center text-center'>
            {user ? (
                <div className="hidden lg:flex">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                        <svg className="" width={16} height={16}>
                            <use href={`${sprite}#icon-avatar`} />
                        </svg>
                    </div>
                    <p className="ml-4 mr-6 flex items-center">{user.displayName}</p>
                </div>
            ) : null}
            <Button type={'button'} onClick={handleLogout}><span className='flex items-center text-xs xl:text-base' style={{ padding: "14px 30px", height: "48px" }}>Log Out</span></Button>
        </div>
    )
}
export default UserMenu;

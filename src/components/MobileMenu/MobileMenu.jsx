import AppBar from 'components/AppBar/AppBar';
import { AuthNav } from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import sprite from "svg/symbol-defs.svg";
const MobileMenu = ({ isOpen, onClose, isLog }) => {

    const handleCloseModal = useCallback(() => {
        onClose(false);
    }, [onClose]);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                handleCloseModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleCloseModal]);

    return isOpen ? ReactDOM.createPortal(
        <div className="fixed inset-0  flex justify-center items-center lg:hidden" onClick={handleBackdropClick}>
            <div className="fixed inset-0 bg-black opacity-50"></div>

            <div className="absolute right-0 top-0 h-full bg-teal-900 text-white w-80 shadow-lg p-4">
                <button type='button' className=' flex mr-0 ml-auto hover:scale-110 ' onClick={handleCloseModal}>
                    <svg className="w-4 h-4 fill-white" >
                        <use href={`${sprite}#icon-x`} width={16} height={16} />
                    </svg>
                </button>
                <div className='text-center mt-24 h-52 '>
                    <AppBar />
                    {isLog ? <UserMenu /> : <AuthNav />}
                </div>
            </div>
        </div>, document.getElementById('modal-root')
    ) : null
};

export default MobileMenu;

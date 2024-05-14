import React, { useCallback, useEffect } from 'react';
import sprite from "svg/symbol-defs.svg";
import ReactDOM from 'react-dom';


const Modal = ({ isOpen, onClose, children }) => {


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
        <div className="h-full w-full flex items-center justify-center fixed bg-slate-600 z-40 top-0 left-0  " style={{ minWidth: "320px" }} onClick={handleBackdropClick}>
            <div className=' overflow-y-auto  relative   z-30 bg-white rounded-2xl  ' style={{ width: "calc(565 / 1440 * 100%)", minWidth: "300px", padding: " calc(64 / 1440 * 100%)", maxHeight: "95%", scrollbarWidth: "thin" }}>
                <button type='button' className='hover:scale-110 flex mr-0 ml-auto absolute top-4 right-4' onClick={handleCloseModal}>
                    <svg className="w-8 h-8   " >
                        <use href={`${sprite}#icon-x`} width={32} height={32} />
                    </svg>
                </button>
                {children}
            </div>
        </div>, document.getElementById('modal-root')
    ) : null
};

export default Modal;

import { toast } from 'react-hot-toast';
import sprite from "svg/symbol-defs.svg";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'store/reducer';
import { IsLoggedIn } from "helpers/isLoggedIn";

const ButtonFavorite = ({ props }) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(storedFavorites.some(favorite => favorite.name === props.name));
    }, [props.name]);

    const toggleFavorite = () => {
        if (!IsLoggedIn()) {

            toast.error('You must log in to add to favorites');
            return;
        }
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            const updatedFavorites = favorites.filter(favorite => favorite.name !== props.name);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            dispatch(removeFromFavorites(props.name));
        } else {
            favorites.push(props);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            dispatch(addToFavorites(props));
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <button className="w-6 h-6 m-0 bg-white hover:scale-110" onClick={toggleFavorite}>
            <svg className={isFavorite ? " fill-teal-900 stroke-teal-900" : "fill-white stroke-black stroke-width-1"} width={26} height={26}>
                <use href={`${sprite}#icon-heart`} />
            </svg>
        </button>
    );
};

export default ButtonFavorite;

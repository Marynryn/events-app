import sprite from "svg/symbol-defs.svg";
import Location from 'components/Location/Location';
import Price from 'components/Price/Price';
import Rating from 'components/Rating/Rating';
import Reviews from 'components/Reviews/Reviews';
import React, { useState } from 'react'
import Line from "components/Line/Line";
import AboutNanny from "components/AboutNanny/AboutNanny";
import ButtonFavorite from "components/ButtonFavorite/ButtonFavorite";

const CardItem = ({ props }) => {

    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };


    return (
        <div className="p-6 lg:flex">
            <div className="flex">
                <div className='flex  items-center relative mr-6 mb-4 lg:mb-0' style={{
                    borderRadius: "30px",
                    border: "2px solid rgba(240, 63, 59, 0.20)",
                    height: "120px",
                    width: "120px",
                }}>
                    <img className="max-w-max " alt="nanny`s_photo" style={{ margin: "10px", borderRadius: "15px" }} src={props.avatar_url} width={96} height={96} />
                    <svg className=" fill-white absolute rounded-full  bg-green" style={{
                        height: "14px",
                        width: "14px",
                        top: "9px",
                        right: "9px",
                    }}>
                        <use href={`${sprite}#icon-radio-unchecked`} width={14} height={14} />
                    </svg>

                </div>
                <div className="mr-0 ml-auto lg:hidden">
                    <ButtonFavorite props={props} />
                </div></div>
            <div className=" w-full">
                <div className="lg:flex justify-between items-start">
                    <div className="">
                        <p className="text-gray font-medium text-base">Nanny</p>
                        <h3 className="text-2xl font-medium mt-2 mb-6">{props.name}</h3>
                    </div>

                    <div className=" flex items-center font-medium  text-base">
                        <div className="m:flex">
                            <Location props={props} />
                            <Line />
                            <Rating props={props} />
                            <Line />
                            <Price props={props} />
                        </div>
                        <div className="hidden lg:block">
                            <ButtonFavorite props={props} />
                        </div>
                    </div>
                </div>
                <div className="mt-4 lg:mt-0">
                    <AboutNanny props={props} />
                </div>

                {!expanded && (

                    <button className="font-medium text-base hover:scale-110 underline underline-offset-1" type="button" onClick={handleToggleExpand}>Read more</button>)}
                {expanded && (
                    <div className="card-content">
                        <Reviews user={props} />
                    </div>
                )}
            </div>

        </div>)
}

export default CardItem;
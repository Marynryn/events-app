import React, { useEffect, useState } from "react";

import EventItem from "components/EventItem/EventItem";

const EventsList = ({ props }) => {


    const [displayedCards, setDisplayedCards] = useState([]);
    const cardsPerPage = 3;


    useEffect(() => {

        setDisplayedCards(props.slice(0, cardsPerPage));
    }, [props, cardsPerPage]);

    const handleLoadMore = () => {

        const nextPage = Math.ceil(displayedCards.length / cardsPerPage) + 1;
        const startIndex = (nextPage - 1) * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, props.length);

        setDisplayedCards(prevCards => [
            ...prevCards,
            ...props.slice(startIndex, endIndex)
        ]);
    };

    return (
        <div className="">
            <ul className=" flex flex-wrap gap-10 justify-center" >
                {displayedCards.map((card) => (
                    <li key={card._id} className=" bg-white rounded-3xl  " style={{ width: "280px" }} >
                        <EventItem props={card} />
                    </li>
                ))}
            </ul>
            {displayedCards.length < props.length && (
                <div className="mt-16 text-center">
                    <button className=
                        ' bg-teal-900  text-white rounded-full hover:bg-light-teal hover:text-teal-900 ' style={{ border: "solid 1px", borderColor: "rgba(251, 251, 251, 0.40)" }} type={"button"} onClick={handleLoadMore} ><span className="flex" style={{ padding: "14px 40px", height: "48px", width: "159px" }}>Load more</span>

                    </button>
                </div>
            )}
        </div>
    );
};

export default EventsList;

import React, { useEffect, useState, useRef } from "react";
import EventItem from "components/EventItem/EventItem";

const EventsList = ({ props }) => {
    const [displayedCards, setDisplayedCards] = useState([]);
    const cardsPerPage = 8;

    const lastCardRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (lastCardRef.current && lastCardRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
                const nextPage = Math.ceil(displayedCards.length / cardsPerPage) + 1;
                const startIndex = (nextPage - 1) * cardsPerPage;
                const endIndex = Math.min(startIndex + cardsPerPage, props.length);
                setDisplayedCards(prevCards => [
                    ...prevCards,
                    ...props.slice(startIndex, endIndex)
                ]);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [displayedCards, props, cardsPerPage]);

    useEffect(() => {
        setDisplayedCards(props.slice(0, cardsPerPage));
    }, [props, cardsPerPage]);

    return (
        <div className="">
            <ul className="flex flex-wrap gap-10 justify-center">
                {displayedCards.map((card, index) => (
                    <li key={card._id} className="bg-white rounded-3xl" style={{ width: "280px" }}>
                        <EventItem props={card} />
                        {index === displayedCards.length - 1 && <div ref={lastCardRef}></div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsList;

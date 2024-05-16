import EventsList from "components/EventsList/EventsList";
import Filters from "components/Filters/Filters";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "store/operations";
import { selectIsLoading, selectVisibleEvents } from "store/selectors";


const Board = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchEvents());
    }, [dispatch]);
    const loading = useSelector(selectIsLoading);
    const events = useSelector(selectVisibleEvents);

    return (<div className="p-10">
        {loading ? <Loader /> : (<><h1 className="text-7xl mb-10 ml-10">Events</h1><Filters /> <EventsList props={events} /></>)}

    </div>)
}

export default Board;




import Card from "components/Card/Card";
import SearchInput from "components/SearchInput/SearchInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/dist";
import { fetchParticipants } from "store/operations";
import { selectGetEvents, selectVisibleParticipants } from "store/selectors";


const Participants = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const events = useSelector(selectGetEvents);
    const event = events.filter((event => event._id === id))
    useEffect(() => {

        dispatch(fetchParticipants({ id }));
    }, [dispatch, id]);

    const participants = useSelector(selectVisibleParticipants);

    return (<div className="p-10">
        <p className="text-5xl mb-10">"{event[0].title}" participants</p>
        <SearchInput />
        <ul className="flex flex-wrap gap-10 ">{participants.map((el, index) => (<li key={index} className=" bg-white rounded-2xl w-52 " >
            <Card props={el} />
        </li>))}</ul>
    </div>
    )
}
export default Participants;
import CardsList from "components/CardsList/CardsList";
import Filters from "components/Filters/Filters";
import Header from "components/Header.jsx/Header";
import { useSelector } from 'react-redux';
import { selectVisibleFavorites } from "store/selectors";

const Favorites = () => {
    const favoriteCards = useSelector(selectVisibleFavorites);

    return (<>
        <div className="w-screen  lg:justify-between bg-teal-900 text-white  " style={{ padding: "20px calc(128/1440 * 100%) " }} >
            <Header />
        </div >
        <div className="h-full  w-screen bg-light-gray" style={{ padding: "0 calc(128/1440 * 100%) 96px", minHeight: "100vh" }} >
            <div className="pt-16">
                <Filters />
            </div>
            <div className=" bg-light-gray">
                <CardsList props={favoriteCards} />
            </div>
        </div ></>
    );
}

export default Favorites;

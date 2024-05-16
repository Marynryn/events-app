import { useDispatch } from "react-redux";
import { addFilter } from "store/reducer";


const SearchInput = () => {

    const dispatch = useDispatch();
    const changeFilter = event => {
        const filter = event.currentTarget.value;
        dispatch(addFilter(filter));

    };
    return (

        <div className='mb-6'>
            <h3 className='font-lg text-lg text-gray pb-2'>Find </h3>
            <form >
                <div className=''>
                    <input className='px-4 py-1 rounded-2xl w-52' type="text"
                        name="name"
                        onChange={changeFilter}
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"

                        required />
                </div>
            </form>
        </div>

    );
};

export default SearchInput;
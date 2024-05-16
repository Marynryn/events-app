import React from 'react'
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { deselectFilter, setFilter } from 'store/reducer';


export const Filters = () => {


    const options = [
        { value: 'showAll', label: 'Show all' },
        { value: 'AtoZ', label: 'A to Z' },
        { value: 'ZtoA', label: 'Z to A' },
        { value: 'eventDate', label: 'Event Date' },
        { value: 'organizer', label: 'Organizer' },

    ];
    const defaultOption = options[0];
    const dispatch = useDispatch();


    const handleFilterChange = (selectedOption) => {

        if (!selectedOption) {
            dispatch(deselectFilter());
        } else {
            dispatch(setFilter(selectedOption.value));

        }
    };

    return (
        <div className='ml-10'>
            <p className='font-lg text-sm text-gray pb-2 '>Filters</p>

            <Select className="w-56 h-12 mb-8" options={options} defaultValue={defaultOption} onChange={handleFilterChange} styles={{
                control: (provided, state) => ({
                    ...provided,
                    cursor: 'default',
                    backgroundColor: '#0b6855',
                    color: 'white',
                    height: "48px",
                    borderRadius: '14px',
                    border: 'none',
                    boxShadow: state.isFocused ? '0 0 0 2px rgba(0,0,0,0.2)' : 'none',
                    '&:hover': {
                        border: 'none'
                    }
                }),
                singleValue: (provided) => ({
                    ...provided,
                    color: 'white',
                    paddingLeft: "10px",
                    margin: "0",
                    width: "170px"
                }),
                ValueContainer: (provided) => ({
                    ...provided,

                    width: "170px"
                }),
                input: (provided) => ({
                    ...provided,
                    display: 'none'
                }),
                indicatorSeparator: (provided) => ({
                    ...provided,
                    display: 'none',

                }),

                dropdownIndicator: (provided) => ({
                    ...provided,
                    padding: "8px 0",
                    marginRight: "18px",
                    color: 'white', '&:hover': {
                        color: 'white'
                    }
                }),
                menu: (provided) => ({
                    ...provided,
                    borderRadius: "14px",
                    padding: "10px 18px 2px 18px",

                    zIndex: 9999
                }),
                MenuList: (provided) => ({
                    ...provided,
                    display: "inline-flex",
                    gap: "12px",
                    color: "rgba(17, 16, 28, 0.30)",

                }),
                option: (provided, state) => ({
                    ...provided,
                    padding: "0 0 12px 0",
                    lineHeight: "20px",
                    fontSize: "18px",
                    backgroundColor: 'transparent',
                    color: state.isFocused ? 'black' : 'rgba(17, 16, 28, 0.30)'
                })
            }} />

        </div>
    )
}
export default Filters
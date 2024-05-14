import sprite from "svg/symbol-defs.svg";

const Rating = ({ props }) => {
    return (
        <div className='flex items-center'>
            <svg className="fill-yellow" width={16} height={16}>
                <use href={`${sprite}#icon-star-full`} />
            </svg>
            <h4 className="ml-2 text-base">Rating: {props.rating}</h4>
        </div>
    )
}
export default Rating;
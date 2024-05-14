import sprite from "svg/symbol-defs.svg";

const Location = ({ props }) => {
    return (<div className="flex items-center">
        <svg className="fill-white stroke-black" width={16} height={16}>
            <use href={`${sprite}#icon-map-pin`} />
        </svg>
        <p className="ml-2 text-base">{props.location}</p>
    </div >

    )
}
export default Location;
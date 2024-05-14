
const Price = ({ props }) => {


    return (
        <div className='flex'>
            <p className="">Price / 1 hour: <span className="text-green mr-12">{props.price_per_hour}$</span></p>



        </div>
    );
};

export default Price;
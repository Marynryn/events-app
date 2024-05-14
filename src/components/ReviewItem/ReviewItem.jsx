
import sprite from "svg/symbol-defs.svg";


const ReviewItem = ({ reviewerName, reviewerRating, comment }) => {
    const formatRating = (rating) => {
        if (rating === parseInt(rating)) { return rating.toFixed(1); } else { return rating.toString() }
    }

    return (
        <div className="">
            <div className="flex gap-3">
                <div className="w-11 h-11 rounded-full bg-light-teal flex items-center justify-center font-medium text-xl text-teal-900 mb-4">{reviewerName.charAt(0)}</div>


                <div className="">
                    <p className="font-medium text-base">{reviewerName}</p>
                    <div className="flex items-center  gap-2">
                        <svg className="fill-yellow" width={16} height={16}>
                            <use href={`${sprite}#icon-star-full`} />
                        </svg>
                        <p className="font-medium text-m h-5">{formatRating(reviewerRating)}</p></div>
                </div>
            </div>
            <div className="text-base text-gray mb-6">{comment}</div>

        </div>
    );
};
export default ReviewItem;
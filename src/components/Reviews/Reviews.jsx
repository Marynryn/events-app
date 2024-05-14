import BookingForm from "components/BookingForm/BookingForm";
import Modal from "components/Modal/Modal";
import ReviewItem from "components/ReviewItem/ReviewItem";
import { useState } from "react";


const Reviews = ({ user }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <div className=''>
            <ul className="mb-12 " style={{ marginTop: "34px" }}>
                {user.reviews.map((review, index) => (<li className='' key={index}>
                    <ReviewItem

                        reviewerName={review.reviewer}
                        reviewerRating={review.rating}
                        comment={review.comment}
                    /></li>
                ))}</ul>
            <button className="bg-teal-900 text-white rounded-full hover:bg-light-teal hover:text-teal-900" type={"button"} onClick={openModal}><span className=" flex" style={{ padding: "14px 28px", height: "48px", width: "215px" }}>Make an appointment</span></button>
            <Modal isOpen={modalOpen} onClose={setModalOpen} >
                <BookingForm props={user} onClose={setModalOpen} />
            </Modal>
        </div>
    );
};
export default Reviews;
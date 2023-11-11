import SharedTitle from "../../Components/SharedTitle/SharedTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get('/reviews.json')
            .then(res => {
                setReviews(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="mb-16">
            <div>
                <SharedTitle heading={"Testimonials"} subHeading={"What Our Client Says"}></SharedTitle>
            </div>

            {/* reviews slider */}
            <section>
                <Swiper  height={700} navigation={true} modules={[Navigation]} className="mySwiper">
                    {reviews.map(review =>
                        <SwiperSlide key={review._id} className="text-center">
                            <div>
                                <Rating
                                    className=" text-amber-500 my-10 "
                                    emptySymbol="fa fa-star-o fa-2x"
                                    fullSymbol="fa fa-star fa-2x"
                                    initialRating={review.rating}
                                />
                                <div className="flex items-center justify-center">
                                    <FaQuoteLeft className="text-7xl "></FaQuoteLeft>
                                </div>
                                <p className="text-xl text-center w-1/2 mx-auto"> {review.details}</p>
                                <p className="text-xl text-amber-600 text-center">{review.name}</p>
                            </div>
                        </SwiperSlide>)}

                </Swiper>
            </section>


        </div>
    );
};

export default Testimonial;

import SharedTitle from "../../Components/SharedTitle/SharedTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const images = [
    {"img":"https://i.ibb.co/D56MsHK/slide1.jpg","name":"salads"},
    {"img":"https://i.ibb.co/HtDCYPs/slide2.jpg","name":"soups"},
    {"img":"https://i.ibb.co/pn4cfb4/slide3.jpg","name":"pizzas"},
    {"img":"https://i.ibb.co/QKMpZbc/slide4.jpg","name":"dessets"},
    {"img":"https://i.ibb.co/D56MsHK/slide1.jpg","name":"salads"}
]
console.log(images[0].name)
const Order = () => {

    return (
        <div className="mt-20">
            <div>
                <SharedTitle
                    heading={"Order Online"}
                    subHeading={"From 11:00am to 10:00pm"}
                >
                </SharedTitle>
                <section className="my-16">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                      {images.map((image,index)=><SwiperSlide key={index}>
                        <img src={image.img} alt="" />
                        <div className="flex items-center justify-center">
                        <p className=" uppercase  text-white font-medium text-4xl shadow-md -mt-28">{image.name}</p>
                        </div>
                      </SwiperSlide>)}
                    </Swiper>
                </section>
            </div>

        </div>
    );
};

export default Order;
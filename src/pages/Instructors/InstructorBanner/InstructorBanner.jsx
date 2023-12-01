import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const InstructorBanner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-[80vh] object-cover' src='https://i.ibb.co/QJgjNww/pexels-photo-3823741.jpg' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[80vh] object-cover brightness-50' src='https://i.ibb.co/zfdX8Lc/pexels-photo-2644735.jpg' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[80vh] object-cover brightness-50' src='https://i.ibb.co/vLWqG0n/pexels-photo-687501.jpg' alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default InstructorBanner;
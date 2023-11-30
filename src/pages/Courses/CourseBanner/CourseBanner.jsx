import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../../assets/CourseBanner/1.jpg'
import image2 from '../../../assets/CourseBanner/2.jpg'
import image3 from '../../../assets/CourseBanner/3.jpg'

const CourseBanner = () => {
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
                    <img className='w-full h-[80vh] object-cover brightness-50' src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[80vh] object-cover brightness-50' src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[80vh] object-cover brightness-50' src={image3} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default CourseBanner;
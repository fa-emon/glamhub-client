import image from '../../../assets/Review/1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Review = () => {
    return (
        <div style={{ height: '80vh', width: '100%' }} className="bg-black mb-20 relative">
            <div className='w-full px-20'>
                <img className='brightness-50' style={{ height: '80vh', width: '100%', objectFit: 'contain' }} src={image} alt="" />
            </div>

            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper absolute bottom-96 text-white bg-slate-950 bg-opacity-10 bg-blend-soft-light w-3/4 mx-auto backdrop-blur-md rounded-lg"
                >
                    <SwiperSlide>
                        <h2 className='text-center heading-font text-3xl tracking-wider text-[#DD6E8B]'>REVIEWS !</h2>
                        <p className='text-justify w-1/2 mx-auto pt-10 pb-6 all-font'>Experiencing GlamHub is skin makeup expertise was like stepping into a world of radiance. The flawless finish and natural glow left me feeling confident and beautiful. Their dedication to perfection truly sets them apart.</p>
                        <h2 className='text-center pb-10 all-font text-lg tracking-wide'>Sophia Rodriguez</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <h2 className='text-center heading-font text-3xl tracking-wider text-[#DD6E8B]'>REVIEWS !</h2>
                        <p className='text-justify w-1/2 mx-auto pt-10 pb-6 all-font'>GlamHub transformed my everyday look into an enchanting masterpiece with their exceptional eye makeup techniques. The attention to detail and artistic touch brought out the true beauty of my eyes. I am forever grateful for the stunning transformation!</p>
                        <h2 className='text-center pb-10 all-font text-lg tracking-wide'>Ethan Carter</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <h2 className='text-center heading-font text-3xl tracking-wider text-[#DD6E8B] '>REVIEWS !</h2>
                        <p className='text-justify w-1/2 mx-auto pt-10 pb-6 all-font'>For my special day, GlamHub is bride makeup services turned my dream bridal look into a reality. The skilled hands and personalized approach ensured I felt like the most beautiful bride. Thank you for making my day truly magical!</p>
                        <h2 className='text-center pb-10 all-font text-lg tracking-wide'>Isabella Thompson</h2>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Review;
import image from '../../../assets/AboutMe/image.jpg'
import { Box, Typography } from '@mui/material';
import Slider from './Slider';

const AboutMe = () => {
    return (
        <div className="flex gap-6 my-20 px-20">
            <div className="w-2/5">
                <img src={image} alt="" />
            </div>
            <div className="w-3/5">
                <h2 className='uppercase heading-font text-[#DD6E8B] tracking-wide mb-4'>About Us</h2>
                <h2><Typography display="inline">
                    <Box className='heading-font text-[#DD6E8B] text-2xl mb-2' sx={{ letterSpacing: 6, display: 'inline-block' }}>Glam<span style={{ fontFamily: 'Ephesis, cursive' }}>Hub</span></Box>
                </Typography></h2>
                <hr className='w-[120px] border-[#DD6E8B] mb-3' />
                <p className='all-font text-justify opacity-70 pt-4 pb-10 text-white'>GlamHub is your premier destination for mastering the art of makeup. Our platform offers a comprehensive learning experience, from fundamental techniques to advanced skills. Whether you are a makeup enthusiast or aspiring artist, GlamHub provides expert tutorials, fostering a vibrant community where you can share, connect, and elevate your beauty journey. <h4 className='mt-2'><br /> Join us to explore and teach a spectrum of makeup styles, enhancing your skills and unleashing your creative potential. Welcome to the ultimate makeup education hub, where glamour meets expertise!</h4></p>
                <p className='heading-font text-[#DD6E8B] my-4 tracking-wide'>AWARDS</p>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default AboutMe;
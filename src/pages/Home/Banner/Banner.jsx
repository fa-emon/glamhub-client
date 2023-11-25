// import { Button } from '@chakra-ui/react';
import bannerImage from '../../../assets/NavBar/navImage.jpg'
// import { FaArrowCircleRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <>
            <img className='brightness-75 relative ' style={{ height: '100vh', objectFit: 'cover', width: '100%' }} src={bannerImage} alt="" />
            {/* <h2 className='absolute top-60 left-40 text-white'>Makeup</h2>
            <h2 className='absolute top-72 left-40 text-white'>Olivia vond</h2>
            <Button className='absolute bottom-60 left-40 bg-[#DD6E8B] rounded px-2 py-1' colorScheme='twitter' rightIcon={<FaArrowCircleRight className='text-white' />}>
                <span className='text-black tracking-wider heading-font'>About GlamHub</span>
            </Button> */}
        </>
    );
};

export default Banner;
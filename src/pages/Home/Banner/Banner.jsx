import { Button } from '@chakra-ui/react';
import bannerImage from '../../../assets/NavBar/navImage.jpg'
import { FaArrowCircleRight } from 'react-icons/fa';
import { Box, Typography } from '@mui/material';

const Banner = () => {
    return (
        <>
            <img className='brightness-75 relative ' style={{ height: '100vh', objectFit: 'cover', width: '100%' }} src={bannerImage} alt="" />
            <div className='absolute top-44 right-20'>
                <h2 className='text-white text-7xl heading-font'><span style={{ fontFamily: 'Ephesis, cursive' }}>A</span></h2>

                <hr className='border-t-2 border-[#DD6E8B] w-[255px]' />

                <h2><Typography display="inline">
                    <Box className='heading-font text-[#DD6E8B] text-2xl' sx={{ letterSpacing: 6, display: 'inline-block' }}>MAKEUP PLATFORM</Box>
                </Typography></h2>
                <h2 className='text-white all-font text-xl tracking-wider'>by</h2>
                <p>
                    <Typography display="inline">
                        <Box className='heading-font text-[#DD6E8B] text-9xl mt-4' sx={{ letterSpacing: 6, display: 'inline-block' }}>Glam<span style={{ fontFamily: 'Ephesis, cursive' }}>Hub</span></Box>
                    </Typography>
                </p>
                <Button className='bg-[#DD6E8B] hover:bg-black rounded px-2 py-1 mt-5' colorScheme='twitter' rightIcon={<FaArrowCircleRight className='text-white' />}>
                    <span className='text-black hover:text-white tracking-wider heading-font'>About GlamHub</span>
                </Button>
            </div>
        </>
    );
};

export default Banner;
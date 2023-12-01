import { Grid, GridItem } from '@chakra-ui/react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { RiFacebookFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full h-full pt-2" style={{
            backgroundColor: 'black',
            color: 'white'
        }}>
            <footer className='px-20' style={{ color: 'white' }}>
                <Grid className='flex items-center justify-center text-center my-10 h-full w-full' templateColumns='repeat(3, 1fr)' gap={30}>
                    <GridItem w='100%' bg='blue.500'>
                        <div>
                            <h2 className='all-font text-start'><Typography display="inline">
                                <Box className='heading-font text-[#DD6E8B] text-2xl' sx={{ letterSpacing: 6, display: 'inline-block' }}>Glam<span style={{ fontFamily: 'Ephesis, cursive' }}>Hub</span></Box>
                            </Typography>
                            </h2>
                            <p className='text-justify all-font text-sm mt-3'>Welcome to GlamHub, the ultimate makeup education platform. Learn and master all facets of makeup artistry with expert tutorials and a vibrant community of beauty enthusiasts.</p>
                            <div className='flex items-center justify-start text-[#DD6E8B] mt-6'>
                                <RiFacebookFill className='me-4' />
                                <FiInstagram className='me-4' />
                                <FaXTwitter className='me-4' />
                                <FaPinterestP className='me-4' />
                            </div>
                        </div>
                    </GridItem>

                    <GridItem w='100%' bg='blue.500'>
                        <div>
                            <h2 className='all-font text-start uppercase'><Typography display="inline">
                                <Box className='heading-font text-[#DD6E8B] text-lg' sx={{ letterSpacing: 6, display: 'inline-block' }}>get in touch</Box>
                            </Typography>
                            </h2>

                            <div className=' mt-1 mb-4'>
                                <Divider style={{ backgroundColor: '#DD6E8B' }} />
                            </div>

                            <div className='flex justify-start'>
                                <span className='text-[#DD6E8B]'><FaHeadphones className='me-6' /></span>
                                <p className='hover:text-[#DD6E8B] text-sm'>
                                    +1 900-444-6487
                                </p>
                            </div>
                            <div className='flex justify-start'>
                                <span className='text-[#DD6E8B]'><MdEmail className='me-6 my-2' /></span>
                                <p className='hover:text-[#DD6E8B] text-sm my-2'>glamhub@gmail.com</p>
                            </div>
                            <div className='flex justify-start'>
                                <span className='text-[#DD6E8B]'><IoLocation className='me-6' /></span>
                                <p className='text-sm'>75/A, West street, Bangladesh</p>
                            </div>
                        </div>
                    </GridItem>

                    <GridItem w='100%' bg='blue.500'>
                        <div>
                            <h2 className='all-font text-start uppercase'><Typography display="inline">
                                <Box className='heading-font text-[#DD6E8B] text-lg' sx={{ letterSpacing: 6, display: 'inline-block' }}>opening hours</Box>
                            </Typography>
                            </h2>

                            <div className=' mt-1 mb-4'>
                                <Divider style={{ backgroundColor: '#DD6E8B' }} />
                            </div>

                            <div className='flex justify-start'>
                                <p className='me-24 text-sm'>Mon-Fri :</p>
                                <p className='hover:text-[#DD6E8B] text-sm'>10am-7pm</p>
                            </div>
                            <div className='flex justify-start'>
                                <p className='me-24 text-sm my-2'>Saturday :</p>
                                <p className='hover:text-[#DD6E8B] text-sm my-2'>10am-5pm</p>
                            </div>
                            <div className='flex justify-start'>
                                <p className='me-24 text-sm'>Sunday :</p>
                                <p className='text-[#DD6E8B] text-sm'>By Call</p>
                            </div>
                        </div>
                    </GridItem>
                </Grid>
            </footer>

            <div>
                <hr style={{ borderColor: '#DD6E8B' }} />
            </div>

            <h2 className='text-center py-6 all-font'>© Copyright {currentYear}. All right reserved.</h2>
        </div>
    );
};

export default Footer;
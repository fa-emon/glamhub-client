import { Box, Typography } from '@mui/material';
import image1 from '../../../assets/PricingPlan/1.jpg'
import image2 from '../../../assets/PricingPlan/2.jpg'

const PricingPlan = () => {
    return (
        <div className="mb-20 text-white">
            <div className='flex flex-col text-start px-20 mb-4'>
                <h2>
                    <Typography display="inline">
                        <Box className='heading-font text-[#DD6E8B] uppercase heading-font' sx={{ letterSpacing: 6, display: 'inline-block' }}>prices</Box>
                    </Typography>
                </h2>
                <h2 className='my-2'>
                    <Typography display="inline">
                        <Box className='heading-font uppercase heading-font text-2xl font-bold text-white' sx={{ letterSpacing: 4, display: 'inline-block'}}>pricing plan</Box>
                    </Typography>
                </h2>
                <hr className='w-[168px] border-[#DD6E8B] mb-3' />
            </div>

            <div className='flex w-full px-20 gap-6'>
                <div className='w-1/2 relative'>
                    <img className='brightness-50' style={{ height: '80vh', width: '100%', objectFit: 'cover' }} src={image1} alt="" />
                    <div className='absolute bottom-30 left-20 right-20 top-20'>
                        <h2 className='heading-font text-xl tracking-wider mb-8'>GENERAL PRICES</h2>
                        <div className='flex all-font'>
                            <p className='me-3'>Eye Makeup</p>
                            <p>........................................................................</p>
                            <p className='ms-3'>$100</p>
                        </div>
                        <div className='flex all-font my-4'>
                            <p className='me-3'>Hair Makeup</p>
                            <p>......................................................................</p>
                            <p className='ms-3'>$180</p>
                        </div>
                        <div className='flex all-font my-4'>
                            <p className='me-3'>Bridal Makeup</p>
                            <p>..................................................................</p>
                            <p className='ms-3'>$600</p>
                        </div>
                        <div className='flex all-font my-4'>
                            <p className='me-3'>Child Face Painting</p>
                            <p>..........................................................</p>
                            <p className='ms-3'>$80</p>
                        </div>
                        <div className='flex all-font my-4'>
                            <p className='me-3'>Effect Makeup</p>
                            <p>...................................................................</p>
                            <p className='ms-3'>$150</p>
                        </div>
                        <div className='flex all-font my-4'>
                            <p className='me-3'>Face Makeup</p>
                            <p>.....................................................................</p>
                            <p className='ms-3'>$120</p>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 relative'>
                    <img className='brightness-50' style={{ height: '80vh', width: '100%', objectFit: 'cover' }} src={image2} alt="" />

                    <div className='absolute bottom-30 left-20 right-20 top-20'>
                        <h2 className='heading-font text-xl tracking-wider mb-8'>BRIDAL HAIRCUT</h2>
                        <div className='flex all-font'>
                            <p className='me-3'>Curly Haircute & Colors</p>
                            <p>..................................................</p>
                            <p className='ms-3'>$250</p>
                        </div>
                        <div className='flex all-font my-4'>
                            <p className='me-3'>Color corrections</p>
                            <p>...............................................................</p>
                            <p className='ms-3'>$150</p>
                        </div>
                        <div className='flex all-font my-4'>
                            <p className='me-3'>Hair Wash</p>
                            <p>............................................................................</p>
                            <p className='ms-3'>$100</p>
                        </div>
                        <div className='flex all-font my-4'>
                            <p className='me-3'>Hair Coloring</p>
                            <p>......................................................................</p>
                            <p className='ms-3'>$140</p>
                        </div>
                        <div className='flex all-font my-4'>
                            <p className='me-3'>Blow Dry Hair</p>
                            <p>......................................................................</p>
                            <p className='ms-3'>$90</p>
                        </div>
                        <div className='flex all-font my-4'>
                            <p className='me-3'>Foilyage</p>
                            <p>...................................................................................</p>
                            <p className='ms-3'>$70</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;
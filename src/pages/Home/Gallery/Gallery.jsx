import { Box, Typography } from '@mui/material';
import { Col, Row } from 'antd';
import image1 from '../../../assets/Gallery/child.jpg'
import image2 from '../../../assets/Gallery/eyebrow.jpg'
import image3 from '../../../assets/Gallery/3.jpg'
import image4 from '../../../assets/Gallery/4.jpg'
import image5 from '../../../assets/Gallery/5.jpg'
import image6 from '../../../assets/Gallery/6.jpg'
import image7 from '../../../assets/Gallery/7.jpg'
import image8 from '../../../assets/Gallery/8.jpg'
import image9 from '../../../assets/Gallery/9.jpg'


const Gallery = () => {
    return (
        <div className="mb-20">
            <div className='flex flex-col text-start px-20 mb-4'>
                <h2>
                    <Typography display="inline">
                        <Box className='heading-font text-[#DD6E8B] heading-font' sx={{ letterSpacing: 6, display: 'inline-block' }}>GALLERY</Box>
                    </Typography>
                </h2>
                <h2 className='my-2'>
                    <Typography display="inline">
                        <Box className='heading-font uppercase heading-font text-2xl font-bold text-black' sx={{ letterSpacing: 4, display: 'inline-block' }}>PORTFOLIO</Box>
                    </Typography>
                </h2>
                <hr className='w-[127px] border-[#DD6E8B] mb-3' />
            </div>

            <div className='w-full px-20'>
                <Row gutter={[16, 24]}>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src={image1} alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src={image2} alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src={image3} alt="" />
                    </Col>

                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src={image4} alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src={image5} alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src={image6} alt="" />
                    </Col>

                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src={image7} alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src={image8} alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src={image9} alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Gallery;
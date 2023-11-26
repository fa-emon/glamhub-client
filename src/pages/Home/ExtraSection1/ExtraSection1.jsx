import { Col, Row } from 'antd';
import image from '../../../assets/ExtraSection1/image.jpg'
import facial from '../../../assets/ExtraSection1/facial.png'
import Eyelash from '../../../assets/ExtraSection1/Eyelash.png'
import Eye from '../../../assets/ExtraSection1/eye.png'
import Eyebrow from '../../../assets/ExtraSection1/Eyebrow.png'
import Haircut from '../../../assets/ExtraSection1/haircut.png'
import Makeupbox from '../../../assets/ExtraSection1/makeup box.svg'

const ExtraSection1 = () => {
    return (
        <div className="bg-black mb-20 flex items-center">
            <div className='w-1/2'>
                <img style={{ height: '', width: '100%', objectFit: 'contain' }} src={image} alt="" />
            </div>
            <div className='w-1/2 text-white'>
                <Row gutter={[16, 32]}>
                    <Col className='all-font' span={8}>
                        <img className='rounded-full' style={{ width: '60px', height: '60px', backgroundColor: '#DD6E8B', color: 'white' }} src={facial} alt="" />
                        <h2 className='mt-4'>Facial Makeup</h2>
                    </Col>
                    <Col className='all-font' span={8}>
                        <img className='rounded-full' style={{ backgroundColor: '#DD6E8B', color: 'pink', width: '60px', height: '60px' }} src={Eyelash} alt="" />
                        <h2 className='mt-4'>Eyelash Makeup</h2>
                    </Col>
                    <Col className='all-font' span={8}>
                        <img className='rounded-full' style={{ backgroundColor: '#DD6E8B', color: 'white', width: '60px', height: '60px' }} src={Eye} alt="" />
                        <h2 className='mt-4'>Eye Makeup</h2>
                    </Col>

                    <Col className='all-font' span={8}>
                        <img className='rounded-full' style={{ backgroundColor: '#DD6E8B', color: 'white', width: '60px', height: '60px' }} src={Eyebrow} alt="" />
                        <h2 className='mt-4'>Eyebrow Makeup</h2>
                    </Col>
                    <Col className='all-font' span={8}>
                        <img className='rounded-full' style={{ backgroundColor: '#DD6E8B', color: 'white', width: '60px', height: '60px' }} src={Haircut} alt="" />
                        <h2 className='mt-4'>Haircut Makeup</h2>
                    </Col>
                    <Col className='all-font' span={8}>
                        <img className='rounded-full' style={{ backgroundColor: '#DD6E8B', color: 'white', width: '60px', height: '60px' }} src={Makeupbox} alt="" />
                        <h2 className='mt-4'>Dressing Table</h2>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ExtraSection1;
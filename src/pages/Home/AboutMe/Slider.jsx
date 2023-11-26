import award1 from '../../../assets/Award/award1.svg'
import award2 from '../../../assets/Award/award2.svg'
import award3 from '../../../assets/Award/award3.svg'
import award4 from '../../../assets/Award/award4.svg'
import award5 from '../../../assets/Award/award5.svg'
import award6 from '../../../assets/Award/award6.svg'

const Slider = () => {
    return (
        <div className='flex'>
            <img className='w-[100px] h-[100px] me-4' src={award1} alt="" />
            <img className='w-[100px] h-[100px] me-4' src={award2} alt="" />
            <img className='w-[100px] h-[100px] me-4' src={award3} alt="" />
            <img className='w-[100px] h-[100px] me-4' src={award4} alt="" />
            <img className='w-[100px] h-[100px] me-4' src={award5} alt="" />
            <img className='w-[100px] h-[100px] me-4' src={award6} alt="" />
        </div>
    );
};

export default Slider;
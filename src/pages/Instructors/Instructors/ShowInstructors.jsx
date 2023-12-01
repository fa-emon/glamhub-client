import { Button } from '@chakra-ui/react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const ShowInstructors = ({ categoryWiseInstructor }) => {
    const { category, instructor_image, instructor_name } = categoryWiseInstructor;

    const navigate = useNavigate();
    const handleSeeMore = () => {
        navigate(`/allInstructors/${category}`)
    }

    return (
        <div className="card card-compact w-96 shadow-xl relative">
            <figure className="brightness-100 hover:brightness-50 transform hover:scale-90 transition-transform duration-700">
                <img
                    style={{ height: '60vh' }}
                    className="w-full object-cover"
                    src={instructor_image}
                    alt=""
                />
            </figure>
            <div className="card-body heading-font tracking-wider text-white bg-[#0e0e0e] rounded-md">
                <div className='flex w-full justify-between items-center'>
                    <h2 className="card-title w-1/2"><span className='text-[#DD6E8B]'>{category}</span></h2>
                    <p className='w-1/2 text-end'>Instructor: {instructor_name}</p>
                </div>

                <Button onClick={handleSeeMore} className='bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded px-2 py-2 text-sm' colorScheme='twitter' rightIcon={<FaArrowCircleRight className='' />}>
                    <span className='tracking-wider heading-font'>see more</span>
                </Button>
            </div>
        </div>
    );
};

export default ShowInstructors;
import { Button } from '@chakra-ui/react';
import { FaArrowCircleRight } from 'react-icons/fa';

const ShowCourses = ({ categoryWiseCourse }) => {
    const { category, image, instructor_name, available_seats, price } = categoryWiseCourse;

    return (
        <div className="card card-compact w-96 shadow-xl relative">
            <figure className="brightness-100 hover:brightness-50 transform hover:scale-90 transition-transform duration-700">
                <img
                    style={{ height: '60vh' }}
                    className="w-full object-cover"
                    src={image}
                    alt=""
                />
            </figure>
            <div className="card-body heading-font tracking-wider text-white bg-[#0e0e0e] rounded-md">
                <div className='flex w-full justify-between items-center'>
                    <h2 className="card-title"><span className='text-[#DD6E8B]'>{category}</span></h2>
                    <Button className='bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded px-2 py-1' colorScheme='twitter' rightIcon={<FaArrowCircleRight className='' />}>
                        <span className='tracking-wider heading-font'>see more</span>
                    </Button>
                </div>
                <p>Instructors: {instructor_name}</p>
                <div className="flex justify-between w-full">
                    <p>Available Seats: {available_seats}</p>
                    <p className='text-end'>Price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowCourses;
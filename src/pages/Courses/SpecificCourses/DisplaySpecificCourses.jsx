import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const DisplaySpecificCourses = ({ allCourses }) => {
    const { user } = useContext(AuthContext);
    const { name, image, instructor_name, available_seats, price, course_id } = allCourses;

    const [, refetch] = useCart();
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/allCourses/category/${id}`)
    }

    const handleSelect = (allCourses) => {
        console.log(allCourses)
        const item = {
            course_id, name, image, price, 
            email: user?.email
        }
        
        if (user) {
            fetch(`http://localhost:5000/carts`, {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your desire course added successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        }
    }

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
            {
                available_seats == 0 ?
                    <>
                        <div className="card-body heading-font tracking-wider text-white bg-[#922f2f] rounded-md">
                            <div className='flex w-full justify-between items-center'>
                                <h2 className="card-title"><span className='text-[#DD6E8B]'>{name}</span></h2>
                                <Button onClick={() => handleDetails(course_id)} className='bg-[#808080] hover:bg-black text-black hover:text-white rounded px-2 py-1 btn-disabled' colorScheme='twitter' rightIcon={<FaArrowCircleRight className='' />}>
                                    <span className='tracking-wider heading-font uppercase'>details</span>
                                </Button>
                            </div>
                            <p>Instructors: {instructor_name}</p>
                            <div className="flex justify-between w-full">
                                <p>Available Seats: {available_seats}</p>
                                <p className='text-end'>Price: ${price}</p>
                            </div>
                            <div className='mt-1'>
                                <Button className='bg-[#808080] hover:bg-black text-black hover:text-white transition-transform duration-500 rounded px-2 py-2 w-full btn-disabled'>
                                    <span className='tracking-[.2rem] heading-font uppercase font-semibold '>select</span>
                                </Button>
                            </div>
                            <p className='absolute bottom-80 left-32 uppercase text-xl'>unavailable</p>
                        </div>
                    </>
                    :
                    <>
                        <div className="card-body heading-font tracking-wider text-white bg-[#0e0e0e] rounded-md">
                            <div className='flex w-full justify-between items-center'>
                                <h2 className="card-title"><span className='text-[#DD6E8B]'>{name}</span></h2>
                                <Button onClick={() => handleDetails(course_id)} className='bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded px-2 py-1' colorScheme='twitter' rightIcon={<FaArrowCircleRight className='' />}>
                                    <span className='tracking-wider heading-font uppercase'>details</span>
                                </Button>
                            </div>
                            <p>Instructors: {instructor_name}</p>
                            <div className="flex justify-between w-full">
                                <p>Available Seats: {available_seats}</p>
                                <p className='text-end'>Price: ${price}</p>
                            </div>
                            <div className='mt-1'>
                                <Button onClick={() => handleSelect(allCourses)} className='bg-[#DD6E8B] hover:bg-black text-black hover:text-white transition-transform duration-500 rounded px-2 py-2 w-full'>
                                    <span className='tracking-[.2rem] heading-font uppercase font-semibold '>select</span>
                                </Button>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default DisplaySpecificCourses;
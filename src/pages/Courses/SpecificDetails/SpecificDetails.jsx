import { useLoaderData } from "react-router-dom";


const SpecificDetails = () => {
    const specificDetails = useLoaderData();
    const { image, name, short_description, instructor_name, available_seats, price, instructor_image, ratings } = specificDetails;


    return (
        <div className="w-full flex gap-10 text-[#DD6E8B] px-20 my-20 heading-font">
            <div className="w-1/2">
                <img style={{ height: '80vh' }} className="w-full object-cover" src={image} alt="" />
            </div>

            <div className="w-1/2">
                <div className="w-full flex justify-between">
                    <h2 className="w-1/2">Course Name :</h2>
                    <h2 className="w-1/2">{name}</h2>
                </div>

                <div className="w-full flex justify-between py-2">
                    <h2 className="w-1/2">Instructor Name :</h2>
                    <h2 className="w-1/2">{instructor_name}</h2>
                </div>

                <div className="w-full flex justify-between py-2">
                    <p className="w-1/2">Short Descriptions :</p>
                    <h2 className="w-1/2">{short_description}</h2>
                </div>

                <div className="w-full flex justify-between py-2">
                    <p className="w-1/2">Available Seats :</p>
                    <h2 className="w-1/2">{available_seats}</h2>
                </div>

                <div className="w-full flex justify-between py-2">
                    <p className="w-1/2">Ratings :</p>
                    <h2 className="w-1/2">{ratings}</h2>
                </div>

                <div className="w-full flex justify-between py-2">
                    <p className="w-1/2">Price :</p>
                    <h2 className="w-1/2">${price}</h2>
                </div>

                <img className='h-16 w-16 rounded-full mx-auto object-cover mt-8 opacity-75' src={instructor_image} alt="" />

                <h2 className="text-center all-font text-white mt-1">Hi, I'm {instructor_name}</h2>
                <div className="w-[130px] mx-auto border-t-4 border-[#DD6E8B] rounded-b-2xl" />
                <p className="mt-2 text-center">In this entire course , I hope you will stick with me till the end.</p>
            </div>
        </div>
    );
};

export default SpecificDetails;
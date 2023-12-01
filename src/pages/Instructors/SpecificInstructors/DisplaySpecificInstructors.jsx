

const DisplaySpecificInstructors = ({ allInstructors }) => {
    const { instructor_image, instructor_name } = allInstructors;

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
            <div className="card-body heading-font tracking-wider text-[#DD6E8B] bg-[#0e0e0e] rounded-md">
                <p>Instructor: {instructor_name}</p>
            </div>
        </div>
    );
};

export default DisplaySpecificInstructors;
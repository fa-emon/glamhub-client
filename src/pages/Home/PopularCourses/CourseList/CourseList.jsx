const CourseList = ({ categoryWiseCourse }) => {

    return (
        <div className="relative">
            <figure className="brightness-100 hover:brightness-50 transform hover:scale-90 transition-transform duration-700">
                <img
                    style={{ height: '60vh' }}
                    className="w-full object-cover"
                    src={categoryWiseCourse.image}
                    alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div>
                        <p className="all-font text-white text-3xl">{categoryWiseCourse.category}</p>
                        <p className="text-[#DD6E8B] all-font tracking-[.5em]">DISCOVER</p>
                    </div>
                </div>
            </figure>
        </div>
    );
};

export default CourseList;

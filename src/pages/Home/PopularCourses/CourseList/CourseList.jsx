const CourseList = ({ categoryWiseCourse }) => {

    return (
        <div className="relative">
            <figure className="brightness-100 hover:brightness-50 transform hover:scale-90 transition-transform duration-700 text-white text-opacity-0 hover:text-opacity-100">
                <img
                    style={{ height: '60vh' }}
                    className="w-full object-cover"
                    src={categoryWiseCourse.image}
                    alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div>
                        <p className="all-font text-3xl">{categoryWiseCourse.category}</p>
                    </div>
                </div>
            </figure>
        </div>
    );
};

export default CourseList;

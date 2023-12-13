import ShowCourses from "./ShowCourses";
import useCourses from "../../../hooks/useCourses";

const Courses = () => {
    const [allCourses] = useCourses();

    const uniqueCourses = [...new Set(allCourses.map((allCourse) => allCourse.category))];

    return (
        <div className="my-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-20">
                {uniqueCourses.map((courseName, index) => {
                    const categoryWiseCourse = allCourses.find((allCourse) => allCourse.category === courseName);

                    return (
                        <ShowCourses key={index} categoryWiseCourse={categoryWiseCourse}></ShowCourses>
                    );
                })}
            </div>
        </div>
    );
};

export default Courses;
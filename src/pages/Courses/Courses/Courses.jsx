import { useEffect, useState } from "react";
import ShowCourses from "./ShowCourses";


const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allCourses`)
            .then(response => response.json())
            .then(data => {
                setAllCourses(data);
            });
    }, []);

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
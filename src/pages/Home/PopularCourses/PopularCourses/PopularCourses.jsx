import { useEffect, useState } from "react";
import CourseList from "../CourseList/CourseList";

const PopularCourses = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch(`https://glamhub-server.vercel.app/allCourses`)
            .then(response => response.json())
            .then(data => {
                // Create an object to store the course with the most enrolled students for each category
                const topCoursesByCategory = {};

                // Iterate through courses and keep track of the one with the highest enrollment for each category
                data.forEach(course => {
                    if (!topCoursesByCategory[course.category] ||
                        course.students_enrolled > topCoursesByCategory[course.category].students_enrolled) {
                        topCoursesByCategory[course.category] = course;
                    }
                });

                // Extract the values to get the final array of top courses
                const topCourses = Object.values(topCoursesByCategory);

                setAllCourses(topCourses);
            });
    }, []);

    return (
        <div className="mt-20">
            <h2 className="heading-font text-center uppercase text-[#DD6E8B] text-3xl tracking-[.5em] py-20 bg-black bg-opacity-95">
                Services That We Provide
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-20 px-20">
                {allCourses.map((course, index) => (
                    <CourseList key={index} categoryWiseCourse={course}></CourseList>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;

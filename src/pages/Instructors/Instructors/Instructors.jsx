import { useEffect, useState } from "react";
import ShowInstructors from "./ShowInstructors";


const Instructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allInstructors`)
            .then(response => response.json())
            .then(data => {
                setAllInstructors(data);
            });
    }, []);

    const uniqueInstructors = [...new Set(allInstructors.map((allInstructor) => allInstructor.category))];

    return (
        <div className="my-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-20">
                {uniqueInstructors.map((instructorName, index) => {
                    const categoryWiseInstructor = allInstructors.find((allInstructor) => allInstructor.category === instructorName);

                    return (
                        <ShowInstructors key={index} categoryWiseInstructor={categoryWiseInstructor}>
                        </ShowInstructors>
                    );
                })}
            </div>
        </div>
    );
};

export default Instructors;
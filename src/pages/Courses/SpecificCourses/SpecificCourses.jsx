import { useLoaderData } from "react-router-dom";
import DisplaySpecificCourses from "./DisplaySpecificCourses";
import CourseBanner from "../CourseBanner/CourseBanner";
import Feedback from "../Feedback/Feedback";


const SpecificCourses = () => {
    const specificCourses = useLoaderData();
    
    return (
        <>
            <CourseBanner></CourseBanner>

            <h2 className="heading-font text-center uppercase text-[#DD6E8B] text-3xl tracking-[.5em] py-20 bg-black bg-opacity-95">
                Choose your way
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-20 mb-20">
                {
                    specificCourses.map(allCourses => <DisplaySpecificCourses
                        key={allCourses.name}
                        allCourses={allCourses}
                    >
                    </DisplaySpecificCourses>)
                }
            </div>

            <Feedback></Feedback>
        </>
    );
};

export default SpecificCourses;
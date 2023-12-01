import { useLoaderData } from "react-router-dom";
import DisplaySpecificInstructors from "./DisplaySpecificInstructors";
import StudentFeedback from "../StudentFeedback/StudentFeedback";
import InstructorBanner from "../InstructorBanner/InstructorBanner";


const SpecificInstructors = () => {
    const SpecificInstructors = useLoaderData();

    return (
        <>
            <InstructorBanner></InstructorBanner>

            <h2 className="heading-font text-center uppercase text-[#DD6E8B] text-3xl tracking-[.5em] py-20 bg-black bg-opacity-95">
                honourable instructors
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-20 mb-20">
                {
                    SpecificInstructors.map(allInstructors => <DisplaySpecificInstructors
                        key={allInstructors.name}
                        allInstructors={allInstructors}
                    >
                    </DisplaySpecificInstructors>)
                }
            </div>

            <StudentFeedback></StudentFeedback>
        </>
    );
};

export default SpecificInstructors;
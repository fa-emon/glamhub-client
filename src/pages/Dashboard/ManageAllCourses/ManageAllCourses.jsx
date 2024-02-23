import useCourses from "../../../hooks/useCourses";
import DisplayAllCourses from "./DisplayAllCourses";

const ManageAllCourses = () => {
    const [allCourses] = useCourses();

    return (
        <>
            <div>
                <h2 className="text-center text-[#DD6E8B] heading-font my-4 tracking-[.5rem] text-xl bg-[#0a0a0a] py-2 rounded-md">MANAGE ALL COURSES:{allCourses.length}</h2>
            </div>

            <div className="overflow-x-auto text-white w-full bg-[#0e0e0e] rounded-md">
                <table className="table heading-font tracking-widest">
                    {/* head */}
                    <thead className="text-[#DD6E8B]">
                        <tr>
                            <th>IMAGE</th>
                            <th>COURSE NAME</th>
                            <th>PRICE</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCourses.map(courses => <DisplayAllCourses
                                key={courses._id}
                                courses={courses}>
                            </DisplayAllCourses>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageAllCourses;
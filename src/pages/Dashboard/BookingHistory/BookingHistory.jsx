import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import ShowBookingHistory from "./ShowBookingHistory";


const BookingHistory = () => {
    const { user } = useAuth();
    const { data: bookingHistory, isLoading, isError } = useQuery({
        queryKey: ['bookingHistory', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookingHistory/${user.email}`);
            if (!res.ok) {
                throw new Error('Failed to fetch booking history');
            }
            return res.json();
        },
    });

    if (isLoading) {
        return <div>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <>
            <h2 className="text-center text-[#DD6E8B] heading-font mt-4 tracking-[.5rem] text-xl bg-[#0a0a0a] py-2 rounded-md">BOOKING HISTORY</h2>

            <div className="overflow-x-auto text-white mt-6 w-full bg-[] rounded-md">
                <table className="table heading-font tracking-widest">
                    {/* head */}
                    <thead className="text-[#DD6E8B]">
                        <tr>
                            <th>IMAGE</th>
                            <th>COURSE NAME</th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingHistory.map((course, index) => (
                            <ShowBookingHistory
                                key={index}
                                course={course.detailedCourses}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BookingHistory;
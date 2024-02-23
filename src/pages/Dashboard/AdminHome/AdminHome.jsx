import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoWallet } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { SiCoursera } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: statistics = {} } = useQuery({
        queryKey: ['admin-statistics'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-statistics');
            return res.data;
        }
    })

    return (
        <>
            <div className="mb-20">
                <h2 className="text-center heading-font text-3xl pt-4 mt-10 text-[#DD6E8B]"><span className="text-white">Welcome</span>, {user?.displayName}</h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="bg-[#DD6E8B] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                    <div className="flex items-center justify-center">
                        <IoWallet className="text-6xl me-2 text-[#f1f1f1]"></IoWallet>
                        <div>
                            <p className="text-3xl heading-font text-end">${statistics.revenue}</p>
                            <p className="text-2xl all-font text-end">REVENUE</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#DD6E8B] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                    <div className="flex items-center justify-center">
                        <PiStudentFill className="text-6xl me-2 text-[#f1f1f1]"></PiStudentFill>
                        <div>
                            <p className="text-3xl heading-font">{statistics.users}</p>
                            <p className="text-2xl all-font text-end">CUSTOMERS</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#DD6E8B] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                    <div className="flex items-center justify-center">
                        <SiCoursera className="text-6xl me-2 text-[#f1f1f1]"></SiCoursera>
                        <div>
                            <p className="text-3xl heading-font">{statistics.allCourses}</p>
                            <p className="text-2xl all-font">COURSES</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#DD6E8B] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                    <div className="flex items-center justify-center">
                        <FaTruckFast className="text-6xl me-2 text-[#f1f1f1]"></FaTruckFast>
                        <div>
                            <p className="text-3xl heading-font">{statistics.orders}</p>
                            <p className="text-2xl all-font">ORDERS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminHome;
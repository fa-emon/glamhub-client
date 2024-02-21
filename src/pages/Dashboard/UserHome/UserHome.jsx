import { IoWallet } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import { GiLipstick } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";

const UserHome = () => {
    const { user } = useAuth();

    return (
        <>
            <div className="w-full mx-auto mt-8 mb-10">
                <div className="w- mt-5">
                    <img className="w-32 h-32 rounded-full mx-auto object-cover" src={user?.photoURL} alt="" />
                </div>

                <div className="w-">
                    <div className="animate__animated animate__fadeInLeft">
                        <img className="w-48 h-1/6 mx-auto" src="https://i.ibb.co/3cm669T/8474.png" alt="" />
                    </div>
                    <h2 className="text-center heading-font text-4xl mb-3 text-[#DD6E8B]"><span className="text-white">A pleasure to connect</span>, {user?.displayName}</h2>
                    <div className="animate__animated animate__fadeInRight">
                        <img className="w-48 h-1/6 mx-auto" src="https://i.ibb.co/42V3H53/89745.png" alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-[#DD6E8B] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                        <div className="flex items-center justify-center">
                            <IoWallet className="text-6xl me-2 text-[#f1f1f1]"></IoWallet>
                            <div>
                                <p className="text-3xl heading-font text-end">${}</p>
                                <p className="text-2xl all-font text-end">TOTAL PAID</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#DD6E8B] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                        <div className="flex items-center justify-center">
                            <FaPeopleCarry className="text-6xl me-2 text-[#f1f1f1]"></FaPeopleCarry>
                            <div>
                                <p className="text-3xl heading-font">{}</p>
                                <p className="text-2xl all-font">ORDERS</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#DD6E8B] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                        <div className="flex items-center justify-center">
                            <GiLipstick className="text-6xl me-2 text-[#f1f1f1]"></GiLipstick>
                            <div>
                                <p className="text-3xl heading-font">{}</p>
                                <p className="text-2xl all-font">COURSES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserHome;
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaSwatchbook } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdFace4 } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import useCart from "../hooks/useCart";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaUserShield } from "react-icons/fa6";
import { FaRegFaceSmile } from "react-icons/fa6";
import { SiGoogletagmanager } from "react-icons/si";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md"


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin on data.
    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col px-10 w-full">

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#DD6E8B]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content heading-font tracking-wide">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                            <>
                                <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><FaUserShield className="text-lg" />ADMIN HOME</Link>
                                </li>
                                <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><MdOutlineFaceRetouchingNatural className="text-lg" />ADD NEW COURSE</Link>
                                </li>
                                <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><FaRegFaceSmile className="text-lg" />UPDATE COURSE</Link>
                                </li>
                                <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><SiGoogletagmanager className="text-lg" />MANAGE ALL COURSES</Link>
                                </li>
                                <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link to={'/dashboard/allUsers'}
                                    ><PiUsersThreeFill className="text-lg" />ALL USERS</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><IoHome className="text-lg" />USER HOME</Link>
                                </li>
                                <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><SlCalender className="text-lg" />RESERVATION</Link>
                                </li>
                                <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><IoWalletSharp className="text-lg" />PAYMENT HISTORY</Link>
                                </li>
                                <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link to={'/dashboard/myCart'}><FaShoppingCart className="text-lg" />MY CART<div className="badge bg-black hover:bg-[#DD6E8B] text-white border-[#DD6E8B]">+{cart.length || 0}</div></Link>
                                </li>
                                <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><FaSwatchbook className="text-lg" />MY BOOKING HISTORY</Link>
                                </li>
                            </>
                    }

                    <hr style={{ backgroundColor: 'black', height: '2px', border: 'none', marginTop: '10px', marginBottom: '10px' }} />

                    <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                        <Link to={'/'}><IoHome className="text-lg" />HOME</Link>
                    </li>
                    <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                        <Link to={'/instructors'}><HiMiniUserGroup className="text-lg" />INSTRUCTORS</Link>
                    </li>
                    <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                        <Link to={'/courses'}><MdFace4 className="text-lg" />COURSES</Link>
                    </li>
                    <li className="bg-[#DD6E8B] hover:bg-black text-black hover:text-white rounded-md">
                        <Link to={'/contact'}><FaHeadphones className="text-lg" />CONTACT</Link>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
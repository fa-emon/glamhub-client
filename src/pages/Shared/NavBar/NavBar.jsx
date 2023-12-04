import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import { BiSolidUserCircle } from 'react-icons/bi';
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const isUserLoggedIn = !!user;

    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    const navOptions = <>
        <li><Link className="hover:bg-[#DD6E8B] hover:text-black tracking-wide" to={'/'}>Home</Link></li>
        <li><Link className="hover:bg-[#DD6E8B] hover:text-black tracking-wide" to={'/instructors'}>Instructors</Link></li>
        <li><Link className="hover:bg-[#DD6E8B] hover:text-black tracking-wide" to={'/courses'}>Courses</Link></li>
        {
            user ?
                <>
                    <li><Link className="hover:bg-[#DD6E8B] hover:text-black tracking-wide" to={'/dashboard/myCart'}>Dashboard <div className="badge bg-[#DD6E8B] text-white border-[#DD6E8B]">+{cart.length || 0}</div></Link></li>
                    <li><button onClick={handleLogOut} className="btn btn-ghost btn-sm heading-font hover:bg-[#DD6E8B] hover:text-black tracking-wide">LogOut</button></li>
                </> :
                <>
                    <li><Link className="hover:bg-[#DD6E8B] hover:text-black" to={'/login'}>Log In</Link></li>
                    <li><Link className="hover:bg-[#DD6E8B] hover:text-black" to={'/register'}>Sign Up</Link></li>
                </>
        }
    </>

    return (
        <div className="navbar opacity-95 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 heading-font">
                        {navOptions}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl heading-font">
                    <Typography display="inline">
                        <Box className='heading-font text-[#DD6E8B] text-2xl' sx={{ letterSpacing: 6, display: 'inline-block' }}>Glam<span style={{ fontFamily: 'Ephesis, cursive' }}>Hub</span></Box>
                    </Typography>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 heading-font tracking-wide">
                    {navOptions}
                </ul>
            </div>

            <div className="navbar-end tracking-wide">
                {isUserLoggedIn ?
                    <>
                        <div className="tooltip tooltip-left all-font" data-tip={user?.displayName}>
                            <img
                                src={user?.photoURL} // Replace with the actual image path
                                alt="User Profile"
                                className="w-10 h-10 rounded-full mr-2"
                            />
                        </div>
                    </>
                    :
                    <>
                        <div className="tooltip tooltip-left" data-tip={'No User Found'}>
                            <BiSolidUserCircle className="w-10 h-10 rounded-full mr-2 bg-slate-900"></BiSolidUserCircle>
                        </div>
                    </>
                }
            </div>

        </div>

    );
};
export default NavBar;

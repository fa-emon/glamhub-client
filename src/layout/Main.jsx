import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const isOnErrorPage = location.pathname === "/errorPage";

    return (
        <div>
            {!isOnErrorPage && <NavBar></NavBar>}
            <Outlet></Outlet>
            {!isOnErrorPage && <Footer></Footer>}
        </div>
    );
};

export default Main;
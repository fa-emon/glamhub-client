import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import Courses from "../pages/Courses/Courses/Courses";
import SpecificCourses from "../pages/Courses/SpecificCourses/SpecificCourses";
import SpecificDetails from "../pages/Courses/SpecificDetails/SpecificDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/allCourses/:category',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/allCourses/${params.category}`);
                },
                element: <SpecificCourses></SpecificCourses>
            },
            {
                path: '/allCourses/category/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/allCourses/category/${params.id}`);
                },
                element: <SpecificDetails></SpecificDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])
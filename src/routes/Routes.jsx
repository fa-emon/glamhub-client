import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import Courses from "../pages/Courses/Courses/Courses";
import SpecificCourses from "../pages/Courses/SpecificCourses/SpecificCourses";
import SpecificDetails from "../pages/Courses/SpecificDetails/SpecificDetails";
import PrivateRoute from "./PrivateRoute";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import SpecificInstructors from "../pages/Instructors/SpecificInstructors/SpecificInstructors";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddNewCourse from "../pages/Dashboard/AddNewCourse/AddNewCourse";
import AdminRoute from "./AdminRoute";
import ManageAllCourses from "../pages/Dashboard/ManageAllCourses/ManageAllCourses";

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
                element: <PrivateRoute><SpecificCourses></SpecificCourses></PrivateRoute>
            },
            {
                path: '/allCourses/category/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/allCourses/category/${params.id}`);
                },
                element: <SpecificDetails></SpecificDetails>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/allInstructors/:category',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/allInstructors/${params.category}`);
                },
                element: <PrivateRoute><SpecificInstructors></SpecificInstructors></PrivateRoute>
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
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'addNewCourse',
                element: <AdminRoute><AddNewCourse></AddNewCourse></AdminRoute>
            },
            {
                path: 'manageAllCourses',
                element: <AdminRoute><ManageAllCourses></ManageAllCourses></AdminRoute>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
        ]
    }
])
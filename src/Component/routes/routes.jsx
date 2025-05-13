import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../pages/Home";
import MyBookings from "../pages/MyBookings";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import LawerDetails from "../LawerDetails/LawerDetails";
import ErrorElement from "../ErrorPage/ErrorElement";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        errorElement: <ErrorElement/>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('lawersData.json'),
            },
            {
                path: '/my-bookings',
                element: <MyBookings />,
            },
            {
                path: '/blog',
                element: <Blogs />,
                loader: () => fetch('../blogsData.json'),
            },
           
            {
                path: '/lawerdetails/:id',
                element: <LawerDetails />,
                loader: () => fetch('../lawersData.json'),
            },
             

            
        ],

    }
]

)
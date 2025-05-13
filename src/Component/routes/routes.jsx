import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../pages/Home";
import MyBookings from "../pages/MyBookings";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('lawersData.json'),
            },
            {
                path: '/my-bookings',
                element: <MyBookings/>,
            },
            {
                path: '/blog',
                element: <Blogs/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            }
        ]
    }
]

)
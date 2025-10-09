import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import MyBookings from '../pages/MyBookings'
import Blogs from '../pages/Blogs'
import LawerDetails from '../LawerDetails/LawerDetails'
import ErrorElement from '../ErrorPage/ErrorElement'
import MainLayout from '../layouts/MainLayout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorElement />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('/lawersData.json'),
			},
			{
				path: '/my-bookings',
				element: <MyBookings />,
			},
			{
				path: '/blog',
				element: <Blogs />,
				loader: () => fetch('/blogsData.json'),
			},

			{
				path: '/lawerdetails/:id',
				element: <LawerDetails />,
				loader: () => fetch('/lawersData.json'),
			},
		],
	},
])

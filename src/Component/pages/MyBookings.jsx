import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getAppoinment, removeAppoinments } from '../utils';
import { Link } from 'react-router';

const MyBookings = () => {
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		const bookedAppoinments = getAppoinment();
		setAppointments(bookedAppoinments);
	}, []);


	const handleCancelAppointment = async (id) => {
		await removeAppoinments(id)
		await setAppointments(getAppoinment());
		toast.info('Appointment canceled successfully');
	}

	return (
		<div className='min-h-screen bg-gray-50 py-8 px-4'>
			<div className='container mx-auto md:px-32'>
				{appointments.length === 0 ? (
					<div className='bg-white rounded-lg shadow p-6 text-center'>
						<div className='text-gray-400 text-4xl mb-3'>📅</div>
						<div className='flex flex-col md:gap-4'>
							<h2 className='text-[24px] font-semibold text-gray-800'>
								You have not booked any appointments yet
							</h2>
							<p className='text-gray-500 text-sm text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
							<Link to={'/'}> <button className='btn bg-[#0EA106] text-white border border-[#0EA106]/20 text-center  md:text-[18px] font-semibold px-5 md:px-8 py-4 rounded-s-md shadow-none '>Book an Appoinment</button>

							</Link>
						</div>
					</div>
				) : (
					<div className='space-y-4'>
						<h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
							My Today Booked Appointments
						</h1>
						<p className='text-gray-500 text-sm text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
						{appointments.map((appointment) => (
							<div
								key={appointment.id}
								className='bg-white border border-gray-300 rounded-2xl shadow p-6'
							>
								<div className=' flex flex-col '>
									<div className='flex flex-row justify-between mb-4  ' >

										<div className='text-gray-700'>
											<h4 className='text-black text-[16px] font-semibold'>{appointment.name}</h4>
											<p className='text-gray-500'>{appointment.speciality}</p>
										</div>

										<div>
											<p className='font-medium text-gray-500 items-center '>
												Appointment Fee: {appointment.consultationFee} Taka
											</p>
										</div>
									</div>


									<button
										onClick={() => handleCancelAppointment(appointment.id)}
										className=' w-full bg-white border border-[#FF0000] hover:bg-red-600 text-[#FF0000] px-3 py-1 rounded-lg  text-sm transition'
									>
										Cancel Appointment
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default MyBookings

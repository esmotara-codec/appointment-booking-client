import { OctagonAlert } from 'lucide-react'
import { RiRegisteredLine } from 'react-icons/ri'
import { useLoaderData, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useEffect } from 'react'
import { addAppoinment } from '../utils'
import { useNavigate } from 'react-router-dom';


const LawerDetails = () => {
	const navigate = useNavigate();
	const lawData = useLoaderData()
	const { id } = useParams()

	const [singleLawer, setSingleLawer] = useState({})

	useEffect(() => {
		const single = lawData.find((lawer) => lawer.id === parseInt(id))
		setSingleLawer(single)
	}, [lawData, id])

	const {
		name,
		image,
		speciality,
		licenseNumber,
		experience,
		description,
		availability,
		consultationFee,
	} = singleLawer

	const handleAddAppointment = () => {
		const response = addAppoinment(singleLawer)
		if (response) {
			toast.success('Appointment added successfully')
			navigate('/my-bookings');
		}
		else {
			toast.error('Appointment already added')
		}

	}

	return (
		<div className='bg-white text-black pb-32'>
			<div className='container mx-auto px-10'>
				{/* Profile Header */}
				<div className='bg-gray-100 border border-gray-300 text-center items-center  rounded-2xl md:p-16 '>
					<h1 className='font-bold text-3xl text-gray-800 p-4'>
						Lawyer’s Profile Details
					</h1>
					<p className='text-gray-500 p-4'>{description}</p>
				</div>

				{/* Profile Body */}
				<div className='border border-gray-300 rounded-2xl md:p-6 mt-5 md:mt-10'>
					{/* Card section */}
					<div className='flex flex-wrap flex-none gap-9 p-2 md:p-5 '>
						<div className='flex justify-center items-center'>
							<img
								src={image}
								alt='Lawers Image'
								className='w-64 rounded-2xl'
							/>
						</div>
						<div className='w-2/3'>
							<div className='flex flex-col gap-2 '>
								<div className='flex flex-row gap-2 mb-2  md:pt-8'>
									<button className='bg-[#176AE5]/10 text-blue-600 px-3 py-1 rounded-full text-sm '>
										{experience} Years+ Experience{' '}
									</button>
								</div>
								<div className='text-gray-500 space-y-2'>
									<h4 className='font-bold text-xl  md:text-2xl text-gray-800'>
										{name}
									</h4>
									<div className='flex flex-wrap md:gap-7 '>
										<p className='text-gray-600 font-normal'>{speciality}</p>
										<div className='flex flex-row gap-2 items-center'>
											<RiRegisteredLine />
											<p className='text-gray-600 font-normal text-sm items-center'>
												{' '}
												License No:{licenseNumber}
											</p>
										</div>
									</div>
									{/* Availability Section  */}
									<div className='flex flex-wrap md:gap-7'>
										<p className='text-gray-700 font-semibold'>Availability </p>
										<div className='flex gap-1 md:gap-5 items-center'>
											{availability?.map((day) => (
												<p
													key={day}
													className=' border border-[#FFA000] bg-[#FFA000]/15 text-[#FFA000] text-sm px-2 py-1 rounded-full'
												>
													{day}
												</p>
											))}
										</div>
									</div>

									<p className='text-gray-700 font-semibold '>
										Consultation Fee :{' '}
										<span className='text-[#0EA106] font-semibold md:px-6 text-sm md:text-xl '>
											{' '}
											Taka : {consultationFee}{' '}
										</span>{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Profile Footer */}
				<div className='border border-gray-300 rounded-2xl md:p-6 md:mt-10 px-2 py-1 md:px-16 mt-3'>
					<h1 className=' font-bold text-2xl  md:text-3xl text-gray-800 md:p-4  text-center mb-2 '>
						Book an Appointment
					</h1>
					<div className='border border-dashed border-gray-300 rounded-2xl  '></div>
					<div className=' flex flex-wrap justify-between border-b-2 border-gray-300  p-5 mb-5'>
						<p className='font-bold text-gray-800 text-xl mb-1'>Availability</p>
						<button className='bg-[#09982F]/10 border border-[#09982F]/20 text-[#09982F] md:px-7 py-1 rounded-full px-3 '>
							Lawer Available Today
						</button>
					</div>
					<div className='border border-none bg-[#FFA000]/15 text-[#FFA000] text-[16px] rounded-2xl  px-5 py-1 '>
						<div className='flex flex-row  flex-wrap gap-1 items-center '>
							<OctagonAlert size={20} />
							<p className='text-sm '>
								Due to high patient volume, we are currently accepting
								appointments for today only. We appreciate your understanding
								and cooperation.
							</p>
						</div>
					</div>

					<button
						onClick={() => handleAddAppointment(singleLawer)}
						className='btn bg-[#0EA106] w-full border-none mt-5 md:mt-10 text-white md:text-xl px-10 py-4 rounded-full mb-3  '
					>
						Book Appointment Now
					</button>
				</div>
			</div>
		</div>
	)
}

export default LawerDetails

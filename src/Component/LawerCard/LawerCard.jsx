import { RiRegisteredLine } from 'react-icons/ri'
import { Link } from 'react-router'

const LawerCard = ({ lawer }) => {
	const { name, image, speciality, status, licenseNumber, experience, id } =lawer

	return (
		<div className='border border-gray-300 rounded-4xl md:p-6 p-3'>
			<div className='flex flex-row flex-none gap-9'>
				<div className='flex justify-center items-center'>
					<img src={image} alt='Lawers Image' className='rounded-2xl' />
				</div>
				<div className='w-2/3'>
					<div>
						<div className='flex flex-row gap-2 mb-2'>
							<button className='bg-[#09982F]/10 text-green-600 px-2 md:px-4 md:py-1 rounded-3xl text-[14px] md:text-sm  '>
								{status}
							</button>
							<button className='bg-[#176AE5]/10 text-blue-600 px-3 py-1 rounded-full text-[10px] md:text-sm '>
								{experience} Years Experience{' '}
							</button>
						</div>
						<div className='text-gray-500 mb-3'>
							<h4 className='font-bold text-gray-800'>{name}</h4>
							<p>{speciality}</p>
							<div className='flex flex-row gap-1 md:gap-2 items-center'>
								<RiRegisteredLine />
								<p className='text-gray-600 font-normal items-center '>
									{' '}
									License No:{licenseNumber}
								</p>
							</div>
						</div>

						<Link to={`/lawerdetails/${id}`}>
							<button className='btn bg-white border w-full  border-[#176AE5]/20 text-center text-[#176AE5] md:px-10 md:py-2 rounded-full shadow-none '>
								View details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LawerCard

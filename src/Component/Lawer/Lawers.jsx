import { useEffect, useState } from 'react'
import LawerCard from '../LawerCard/LawerCard'

const Lawers = ({ lawersPromise }) => {
	const [display, setDisplay] = useState([])
	const [viewAll, setViewAll] = useState(false)

	useEffect(() => {
		if (viewAll) {
			setDisplay(lawersPromise)
		} else {
			setDisplay(lawersPromise.slice(0, 6))
		}
	}, [lawersPromise, viewAll])

	return (
		<div className=' bg-white '>
			<div className='container mx-auto md:p-10 py-3 '>
				<div className='text-center items-center px-10 md:px-24 text-black mb-4 '>
					<h1 className='font-bold text-2xl  md:text-3xl'>Our Best Lawyers</h1>
					<p className='text-gray-500 text-[9px] md:text-[16px]'>
						Our platform connects you with verified, experienced Lawyers across
						various specialties — all at your convenience. Whether it's a
						routine checkup or urgent consultation, book appointments in minutes
						and receive quality care you can trust.
					</p>
				</div>
				<div className='grid grid-cols-1  md:grid-cols-2 gap-4 md:gap-10 px-4 md:px-10 '>
					{display.map((lawer) => (
						<LawerCard key={lawer.id} lawer={lawer}></LawerCard>
					))}
				</div>
				<div className='text-center mt-10'>
					<button
						onClick={() => setViewAll(!viewAll)}
						className='btn border border-none md:w-2/12 bg-[#0EA106] text-white text-sm md:text-xl px-6 md:px-10 rounded-full md:py-7 '
					>
						View All Lawers{' '}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Lawers

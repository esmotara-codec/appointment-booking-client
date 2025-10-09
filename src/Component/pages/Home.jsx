import Banner from '../Banner/Banner'
import { useLoaderData } from 'react-router'
import Lawers from '../Lawer/Lawers'
import Services from '../Services/Services'

const Home = () => {
	const data = useLoaderData()

	return (
		<>
			<Banner />
			<Lawers lawersPromise={data} />
			<Services />
		</>
	)
}

export default Home

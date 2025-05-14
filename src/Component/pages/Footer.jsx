import { NavLink } from 'react-router';
import { navigationData } from '../NavBar/navigationData';
import footerLogo from './../../assets/logo-footer.png';
import { mediaLinks } from '../SocialMediaLinks/MediaLinks';



const Footer = () => {
	
	return (
	<div className="bg-black  text-center p-10 md:p-16 md:px-32">
		<div className="flex flex-row justify-center items-center md:mb-4">
			<img src={footerLogo} alt="footerImage" />
			<h1  className='font-bold text-xl md:text-3xl text-white mb-2'>Law.BD</h1>
		</div>
		
		{/* Navlink */}
		<div className=' p-2 md:p-4'>
			<ul className='flex flex-row justify-center items-center md:gap-5'>
				{
					navigationData.map((route) => <li key={route.id} className='text-[10px] md:text-xl' ><NavLink 
					to={route.path} 
					className={({ isActive}) => `block px-3 py-2 text-gray-200 rounded-md hover:bg-[#0EA106]/60 ' ${ isActive ? ' font-semibold' : " "} ` }

					>
						{route.name}</NavLink></li>)
				}
				
			</ul>
		</div>

		 <div className='border border-dashed border-gray-500 rounded-2xl  '></div>
		 {/* Social Media Links */}
		<div className='p-5'>
			<ul className='flex flex-row justify-center items-center gap-2  md:gap-5 '>
				{
					mediaLinks.map((links) => <li key={links.id} ><NavLink 
					to={links.link} 
					className={({ isActive}) => `block text-gray-200  rounded-md hover:bg-red-200 ' ${ isActive ? ' font-semibold' : " "} ` }

					>
					<img src={links.image} alt="" className= ' w-[20px] md:w-[28px]  '/></NavLink></li>)
				}
				
			</ul>
		</div>

	</div>
	)
};

export default Footer;

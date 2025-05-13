import React from 'react';
import errorLogo from './../../assets/errorpage.jpg'
import NavBar from '../NavBar/NavBar';

const ErrorElement = () => {
    return (
        <div className='bg-white min-h-screen text-black'> 
            <NavBar/>
            <div className=' container mx-auto  md:p-10 py-3  text-center items-center '>
              <div className='flex flex-col justify-center items-center  gap-3'>
                  <img src={errorLogo} alt="" />
                <h1 className='text-red-400 text-3xl font-bold '>404 Page Not Found</h1>
                <p className='text-gray-600'>Opps the page you are looking for doesn't exits.</p>
                <button className='btn bg-[#176AE5] border   border-[#176AE5]/20 text-center text-white text-xl font-bold  px-10 py-2 rounded-s-md shadow-none '>Go Home</button>


              </div>
            </div>

            
        </div>
    );
};

export default ErrorElement;
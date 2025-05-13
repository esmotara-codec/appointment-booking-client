import { use } from 'react';
import LawerCard from '../LawerCard/LawerCard';

const Lawers = ({lawersPromise}) => {
    const lawersData =use(lawersPromise);
    console.log(lawersData);
    return (
        <div className=' bg-white '>
           <div className='container mx-auto md:p-10 py-3'>
             <div className='text-center items-center px-24 text-black mb-4 '>
                <h1 className='font-bold text-3xl'>Our Best Lawyers</h1>
                <p className='text-gray-500'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation,
                 book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-2 md:gap-10 px-10'>
                {
                    lawersData.map((lawer) => <LawerCard key={lawer.id} lawer={lawer}></LawerCard>)
                }

            </div>
            

           </div>    
        </div>
    );
};

export default Lawers;
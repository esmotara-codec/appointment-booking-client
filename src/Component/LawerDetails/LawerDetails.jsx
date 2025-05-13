import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const LawerDetails = () => {
    const lawData =useLoaderData();
    const {id} = useParams();
    const singleLawer = lawData.find(lawer => lawer.id === parseInt(id));
    const { name, image, speciality, status, licenseNumber, experience  } = singleLawer; 
    // console.log(id);
    // console.log(singleLawer);
   


    return (
        <div className='bg-white text-black '>
            {/* Profile Header */}
            <div>
                

            </div>
            
        </div>
    );
};

export default LawerDetails;
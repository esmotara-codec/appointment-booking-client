import CountUp from "react-countup";

const servicesDAta = [
    {
        "id": 1,
        "icon": "https://i.ibb.co/ZznhwQXb/success-doctor.png",
        "count": "199+",
        "label": "Total Lawyer"
    },
    {
        "id": 2,
        "icon": "https://i.ibb.co/5hPjFcgd/success-review.png",
        "count": "467+",
        "label": "Active Cases"
    },
    {
        "id": 3,
        "icon": "https://i.ibb.co/Jj2Nx3Lv/success-patients.png",
        "count": "1900+",
        "label": "Solved Cases"
    },
    {
        "id": 4,
        "icon": "https://i.ibb.co/Jj2Nx3Lv/success-patients.png",
        "count": "300+",
        "label": "Client Rating"
    }
];


const Services = () => {

    return (
        <div className=' container mx-auto  items-center  text-black p-5 mb-4 md:p-14 '>
            <h1 className=" font-bold text-2xl md:text-4xl mb-2 text-center">We Provide Best Law Services</h1>
            <p className="mb-2 md:p-4 text-[14px] font-normal text-center">
                Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-3 md:px-16 ">
                {
                    servicesDAta.map((service) =>
                        <div className='bg-gray-100 items-center p-4 md:px-20 text-black mb-4 border border-gray-300 rounded-2xl md:p-8 '
                            key={service.id}>
                            <img src={service.icon} alt="Service images" className="w-16 h-16" />
                            <h1 className="font-bold text-xl  md:text-3xl">
                                <CountUp
                                    start={50}
                                    end={parseInt(service.count)}
                                    duration={2}
                                    suffix="+"
                                />
                            </h1>
                            <p className="text-gray-500 text-sm">{service.label}</p>
                        </div>)
                }


            </div>

        </div>
    );
};

export default Services;

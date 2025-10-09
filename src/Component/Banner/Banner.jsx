import bannerImg from './../../assets/banner-img-1.png';

const Banner = () => {
    return (
        <div className='bg-white'>
            <div className="container mx-auto bg-white md:p-10 py-3" >
            <div
                className="relative h-[600px] flex flex-wrap justify-center items-center bg-amber-300 rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <div className="absolute inset-0 bg-linear-to-t from-black to-gray-500 opacity-20 rounded-2xl"></div>

                <div className="relative text-white text-center px-10 md:px-72 z-10">
                    <h1 className=" text-2xl md:text-5xl font-bold mb-4">
                        It avoids subjective claims or exaggeration that might raise red flags legally
                    </h1>
                    <p className=" text-[8px] md:text-[14px]  mb-4">
                        Our platform connects you with verified, experienced doctors across various specialties — all at your
                        convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive
                        quality care you can trust.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;

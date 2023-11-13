/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */

const SharedMenu = ({ bgimg, heading, subHeading }) => {
    return (
        <div>
            
            <section className="relative overflow-hidden">
                <div className="relative flex items-center justify-center w-full text-center bg-center bg-cover h-[700px]"
                    style={{backgroundImage: `url(${bgimg})` }}>
                    {/* Updated styles to increase text part width */}
                    <div className=" w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto">
                        <div className="z-10 max-w-4xl p-6 bg-black md:p-16 opacity-50 mx-auto">
                            <div className="text-center">
                                <h2 className="mb-6 text-[88px] font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
                                    {heading}
                                </h2>
                                <p className="mb-6 uppercase text-lg tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                                    {subHeading}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SharedMenu;

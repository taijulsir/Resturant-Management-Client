

const Hero = () => {
    return (
        <div>
           <section className="relative overflow-hidden">
        <div className="relative flex items-center justify-center w-full text-center bg-center bg-cover "
            style="background-image:url(https://i.postimg.cc/PqrSRxDN/pexels-fauxels-3184357.jpg); height:600px;">
            <div className="mx-4">
                <div className="z-10 max-w-3xl p-6 bg-gray-900 md:p-16 opacity-80">
                    <div className="text-center">
                        <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
                            We Provide Great Value For Business
                        </h2>
                        <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                            Success is most important part of life and it is determination of having achieved and
                            accomplished
                            aim with
                            lots of failure
                            enthusiam.
                        </p>
                        <div className="flex flex-wrap justify-center">
                            <input
                                className="w-full py-3 pl-4 mb-2 text-sm text-gray-900 rounded dark:placeholder-gray-300 dark:text-gray-300 dark:bg-gray-600 md:mb-0 md:w-1/2"
                                type="text" placeholder="Type your e-mail"/>
                            <button
                                className="w-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded md:w-auto md:ml-2 hover:bg-blue-700">Star
                                for free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </div>
    );
};

export default Hero;
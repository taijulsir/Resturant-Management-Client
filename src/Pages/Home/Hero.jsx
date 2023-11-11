

const Hero = () => {
    return (
        <div>
           <section className="relative overflow-hidden my-20">
        <div className="relative flex items-center justify-center w-full text-center bg-center bg-cover h-[600px] "
            style={{backgroundImage:'url(https://i.ibb.co/KLxb0C9/chef-service.jpg)'}}>
                <div className=" bg-black opacity-50"></div>
            <div className="mx-4">
                <div className="z-10 max-w-4xl p-6 bg-white md:p-16 opacity-80">
                    <div className="text-center">
                        <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight  md:text-6xl">
                        Bistro Boss
                        </h2>
                        <p className="mb-6 tracking-wide sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto text-zinc-950 md:mt-5">
                        Bistro Boss invites you to savor culinary excellence in every bite. Indulge in a symphony of flavors curated by our expert chefs, blending fresh ingredients and innovation. Elevate your dining experience with us and embark on a journey where every dish tells a story of passion and perfection.
                        </p>
                      
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </div>
    );
};

export default Hero;
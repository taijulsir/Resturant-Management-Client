import SharedTitle from "../../Components/SharedTitle/SharedTitle";

// https://i.ibb.co/yQmcYkh/featured.jpg
const FromMenu = () => {
    return (
        <div>


            <div className="hero h-[700px] my-16" style={{ backgroundImage: 'url(https://i.ibb.co/yQmcYkh/featured.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>



                <div>
                    <div className="mt-5 text-white font-normal" >
                        <SharedTitle heading={"Our Menu"} subHeading={"Check it Out"}></SharedTitle>
                    </div>
                    <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
                        <div className="md:h-[400px]">
                            <img src="https://i.ibb.co/yQmcYkh/featured.jpg" className="w-full h-full object-contain" />
                        </div>
                        <div className="max-md:text-center">
                            <h3 className="md:text-3xl text-2xl md:leading-10 text-white">Prompt Delivery and Enjoyable Dining Experience.</h3>
                            <p className="mt-6 text-sm text-white">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
                            <button className=" btn border-b-4 border-b-black">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromMenu;
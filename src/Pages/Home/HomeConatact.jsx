
import Lottie from "lottie-react";
import contact from "../../Lottie/Animation - 1699527378784.json"
const HomeConatact = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <h3 className="text-2xl md:text-4xl text-center text-zinc-950 font-bold font-mono mt-16">Conatact Us</h3>
            <div
                className="grid lg:grid-cols-3 items-center max-lg:justify-center h-full py-6 px-16 max-sm:px-4 mt-10 font-[sans-serif]">
                <div className="container mx-auto max-lg:text-center max-lg:mb-6">
                    <h2 className="text-4xl font-extrabold text-[#333]">Get In Touch</h2>
                    <p className="text-sm text-[#333] mt-4">Have a specific inquiry or looking to explore new opportunities? Our
                        experienced team is ready to engage with you.</p>
                    <form className="mx-auto mt-8 bg-white rounded-lg py-6 px-4 shadow-md">
                        <input type='text' placeholder='Name'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm mb-4 outline-none" />
                        <input type='email' placeholder='Email'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm mb-4 outline-none" />
                        <input type='text' placeholder='Subject'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm mb-4 outline-none" />
                        <textarea placeholder='Message' rows="6"
                            className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"></textarea>
                        <button type='button'
                            className="text-[#333] bg-green-200 hover:bg-green-300 font-semibold rounded-md text-sm px-6 py-3 block w-full mt-3">Send
                            Message</button>
                    </form>
                </div>
                <div className="z-10 relative lg:col-span-2 hidden lg:flex justify-end">
                    <Lottie
                      animationData={contact}
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeConatact;
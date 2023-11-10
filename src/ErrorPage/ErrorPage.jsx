import Lottie from "lottie-react";
import errorPage from "../Animation/Lottie/Animation - 1699642653370.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
           <div className="container mx-auto h-[700px] flex justify-center">
            <Lottie
                animationData={errorPage}
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div> 
       <div className="flex items-center justify-center">
       <Link to="/"><button className="btn  bg-green-500">Go Home</button></Link></div> 
        </div>
       
    );
};

export default ErrorPage;
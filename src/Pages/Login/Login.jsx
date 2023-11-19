import { useContext, useEffect,  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidate = (e) =>{
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)===true){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
       
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate(location?.state? location.state : "/")
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Logged in successful.',
              });
              
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div>
            <div className="font-[sans-serif] text-[#333]" style={{ backgroundImage: 'url("https://i.ibb.co/wMp9nDY/authentication.png")' }}>
                <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
                    <div className="grid md:grid-cols-2 items-center gap-4 lg:gap-10 max-w-7xl w-full">
                        <div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
                            <img src="https://i.ibb.co/p4bgZk9/authentication1.png" className="w-full h-full object-cover" alt="Dining Experience" />
                        </div>
                        <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                            <form className="space-y-6" onSubmit={handleLogin}>
                                <div className="mb-10">
                                    <h3 className="text-3xl font-extrabold">Sign in</h3>
                                    <p className="text-sm mt-4">Sign in to your account and explore a world of possibilities. Your journey begins here.</p>
                                </div>
                                {/* email */}
                                <div>
                                    <label className="text-sm mb-2 block">Email</label>
                                    <div className="relative flex items-center">
                                        <input name="email" type="email" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" placeholder="Enter email" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                                            <defs>
                                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                                </clipPath>
                                            </defs>
                                            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                                <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                                <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                {/* password */}
                                <div>
                                    <label className="text-sm mb-2 block">Password</label>
                                    <div className="relative flex items-center">
                                        <input name="password" type="password" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" placeholder="Enter password" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>


                                {/* recaptcha */}
                                <div>
                                    <label className="text-sm mb-2 block">
                                        <LoadCanvasTemplate></LoadCanvasTemplate>
                                    </label>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="relative flex items-center flex-1">
                                            <input name="captcha" onBlur={handleValidate}  type="text" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" placeholder="Type above code" />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                            </svg>
                                        </div>
                                       
                                    </div>

                                </div>

                                {/* forgot password */}
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="jajvascript:void(0);" className="text-blue-600 hover:underline">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div className="!mt-10">
                                    <input value="Log in" type="submit" disabled={disabled}  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-black focus:outline-none"/>
                                      
                                    
                                </div>
                                <p className="text-sm !mt-10 text-center">Don`t have an account <Link to="/register" className="text-blue-600 hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
                            </form>
                                <SocialLogin></SocialLogin>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
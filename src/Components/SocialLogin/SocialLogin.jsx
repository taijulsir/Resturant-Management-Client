import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleSign } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    const handleSocialLogin = () => {
        googleSign()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users',userInfo)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.insertedId >0 || res.data.insertedId === null) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'Logged in successful.',
                        })
                        navigate(location?.state ? location.state : '/')
                    }
                })

            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="flex flex-wrap ">

                {/* ggoogle */}
                <div className="w-full py-2 lg:px-2 lg:py-0 lg:w-1/3">
                    <button
                    onClick={handleSocialLogin}
                        className="flex items-center justify-center p-3 bg-red-700 rounded-md dark:bg-red-700 hover:bg-red-500 dark:hover:bg-gray-800">
                        <span className="inline-block mr-2 text-gray-300 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path
                                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z">
                                </path>
                            </svg>
                        </span>
                        <span
                            className="text-xs font-medium text-gray-200 uppercase lg:text-sm dark:text-gray-300">
                            Google</span>
                    </button>
                </div>
                {/* facebook */}
                <div className="w-full py-2 lg:px-2 lg:py-0 lg:w-1/3">
                    <button
                        className="flex items-center justify-center p-3 bg-blue-800 rounded-md hover:bg-blue-600 dark:hover:bg-gray-800">
                        <span className="inline-block mr-2 text-gray-300 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                                </path>
                            </svg>
                        </span>
                        <span
                            className="text-xs font-medium text-gray-200 uppercase lg:text-sm dark:text-gray-300">
                            Facebook</span>
                    </button>
                </div>
                {/* apple  */}
                <div className="w-full py-2 lg:px-2 lg:py-0 lg:w-1/3">
                    <button
                        className="flex items-center justify-center p-3 bg-gray-800 rounded-md dark:bg-gray-500 hover:bg-gray-700 dark:hover:bg-gray-600">
                        <span className="inline-block mr-2 text-gray-300 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                <path
                                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                <path
                                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                            </svg>
                        </span>
                        <span
                            className="text-xs font-medium text-gray-200 uppercase lg:text-sm dark:text-gray-300 ">
                            Apple</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
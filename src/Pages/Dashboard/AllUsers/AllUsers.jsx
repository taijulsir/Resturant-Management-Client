import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            console.log(res)
            return res.data;
        }
    })
    return (
        <div className="mt-5 px-36">
            <SharedTitle subHeading={"How Many??"} heading={"Manage All Users"}></SharedTitle>

            <div className=" bg-[#FFF] shadow-md py-12 px-12">
                <h3 className="text-3xl text-zinc-950 font-bold mb-6 ">Total User: {users.length}</h3>
                <div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white font-[sans-serif]">
                            <thead className="bg-gray-800 whitespace-nowrap">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Role
                                    </th>
                                  
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="whitespace-nowrap">

                               {users.map(user=> 
                                 <tr key={user._id} className="even:bg-blue-50">
                                    <td className="px-6 py-4 text-sm">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                       {user.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        Admin
                                    </td>
                                  
                                    <td className="px-6 py-4">
                                       
                                        <button className="mr-4" title="Delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                                                <path
                                                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                                    data-original="#000000" />
                                                <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>     )}               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
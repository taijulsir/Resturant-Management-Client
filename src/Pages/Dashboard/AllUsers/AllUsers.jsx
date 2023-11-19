import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            console.log(res)
            return res.data;
        }
    })

    // make admin
    const handleMakeAdmin = (user) => {
        console.log(user)
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is a admin `,
                    });
                    refetch()
                }
            })
    }

    // delete method
    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

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

                                    </th>
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

                                {users.map((user, index) =>
                                    <tr key={user._id} className="even:bg-blue-50">
                                        <td className="px-6 py-4 text-sm">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {user.role === 'admin' ? 'Admin' : 
                                            <button onClick={() => handleMakeAdmin(user)} className="btn bg-amber-500">
                                                <FaUsers className="text-2xl"></FaUsers>
                                            </button>}
                                        </td>

                                        <td className="px-6 py-4">

                                            <button onClick={() => handleDelete(user)} className="mr-4 btn" title="Delete">
                                                <FaTrashAlt className="text-2xl text-red-600"></FaTrashAlt>
                                            </button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu/useMenu";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menus] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDelete = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }
            }
        });
    }
  
 
    return (
        <div>

            <div>
                <SharedTitle heading={"manage all items"} subHeading={"Hurry up!!"}></SharedTitle>
            </div>
            <div className="overflow-x-auto mx-[151px] mt-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {menus.map((menu, index) =>
                            <tr key={menu._id} className="even:bg-blue-50">
                                <td className="px-6 py-4 text-sm">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <img src={menu.image} alt="" className="h-[100px] w-[100px]" />
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    {menu.name}
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    {menu.price}
                                </td>
                                <td className="px-6 py-4 text-sm">
                                       <Link to={`updateFoods/${menu._id}`}><button className="btn bg-amber-500">
                                            <FaEdit className="text-2xl"></FaEdit>
                                        </button></Link>
                                </td>

                                <td className="px-6 py-4">

                                    <button onClick={() => handleDelete(menu)} className="mr-4 btn" title="Delete">
                                        <FaTrashAlt className="text-2xl text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;
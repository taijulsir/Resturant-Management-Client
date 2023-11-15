import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import useCarts from "../../../Hooks/useCarts/useCarts";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
    const [cart] = useCarts()
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    const handleDelte = () => {

    }
    return (
        <div className="px-[131px]">
            <SharedTitle heading={"wanna add more"} subHeading={"my cart"} headingStyle={"text-2xl important"}></SharedTitle>
            <div className="my-16  bg-[#FFF] shadow-md">
                <div className=" flex justify-evenly py-14">
                    <h3 className="text-2xl font-bold">Total Orders: <span className="text-amber-600">{cart.length}</span> </h3>
                    <h3 className="text-2xl font-bold">Total Price: ${totalPrice} </h3>
                    <h3 className="px-3 py-2 bg-amber-700 text-white font-bold">Pay</h3>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                               <th>#</th>
                                <th>Item Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                      
                           {cart.map((item,index)=> <tr key={item._id}>
                                <td>
                                 {index}  
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td className="font-bold">
                                {item.name}
                                   
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={()=>handleDelte(cart._id)} className="btn bg-red-500"><AiOutlineDelete className="text-2xl text-white font-bold"></AiOutlineDelete></button>
                                </th>
                            </tr>
                          )}
                          
                           
                        </tbody>
                    
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
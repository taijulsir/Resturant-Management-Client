import { FaUtensils } from "react-icons/fa";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";



const image_Hosting_Key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`

const AddItems = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const {register,handleSubmit, formState: { errors },reset } = useForm()
    const onSubmit = async(data) => {
        // first upload image into imagebb
        const imageFile = {image:data.image[0]}
        const res = await axiosPublic.post(image_Hosting_Api,imageFile,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        // post database
        if(res.data.success){
            const menuItem = {
                name:data.name,
                recipe:data.recipe,
                image:res.data.data.display_url,
                category:data.category,
                price:data.category
            }
            console.log(menuItem)
            const menuRes = await axiosSecure.post('/menu',menuItem)         
                if(menuRes.data.insertedId){
                    reset()
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Succesfully added food.',
                      });                  
                }        
    }
}
    return (
        <div>
            <div className="my-5">
                <SharedTitle heading={"adding an item"} subHeading={"What's New?"}></SharedTitle>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-[#F3F3F3] shadow-md mx-[151px] my-16 p-[50px] lg:px-[180px]">
                    {/* recipe name */}
                    <div className="mb-6">
                        <label htmlFor="" className="block mb-2 text-sm   font-medium dark:text-gray-400">Recipe Name<span className="text-red-600"></span>*</label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            className="block w-full  px-5 py-4 mb-2 text-sm shadow-md outline-none bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                            placeholder="Full name...." />
                             {errors.name && <span className="text-red-500 font-medium">This field is required</span>}
                    </div>
                    {/* category and price container */}
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        {/* category */}
                        <div>
                            <div className="mb-6">
                                <label htmlFor="" className="block mb-2 text-sm   font-medium dark:text-gray-400">Category<span className="text-red-600"></span>*</label>
                                <select
                                {...register('category',{required:true})}
                                 className=" block w-full  px-5 py-4 mb-2 text-sm shadow-md outline-none bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 ">
                                    <option disabled selected>Select a category</option>
                                    <option value="soup">Soup</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="dessert">Dessert</option>
                                </select>
                            </div>
                            {errors.category && <span className="text-red-500 font-medium">This field is required</span>}
                        </div>
                        {/* price */}
                        <div>
                            <div className="mb-6">
                                <label htmlFor="" className="block mb-2 text-sm   font-medium dark:text-gray-400">Price<span className="text-red-600"></span>*</label>
                                <input
                                    {...register('price', { required: true })}
                                    type="text"
                                    className="block w-full  px-5 py-4 mb-2 text-sm shadow-md outline-none bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                                    placeholder="Price...." />
                            </div>
                            {errors.price && <span className="text-red-500 font-medium">This field is required</span>}
                        </div>
                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label htmlFor="" className="block mb-2 text-sm   font-medium dark:text-gray-400">Recipe Details<span className="text-red-600"></span>*</label>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        {errors.recipe && <span className="text-red-500 font-medium">This field is required</span>}
                    </div>
                    <div>
                    </div>
                    {/* image */}
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>

                            </label>
                            <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        {errors.image && <span className="text-red-500 font-medium">This field is required</span>} 
                    </div>
                    {/* button */}
                    <button className="flex btn bg-gradient-to-r from-yellow-600 mt-6 to-yellow-800">Add Item <FaUtensils className="text-2xl pl-2"></FaUtensils></button>

                </div>
            </form>
        </div>
    );
};

export default AddItems;
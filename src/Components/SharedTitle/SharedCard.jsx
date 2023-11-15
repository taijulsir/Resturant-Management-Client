/* eslint-disable react/prop-types */


import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import useCarts from "../../Hooks/useCarts/useCarts";


const SharedCard = ({ item }) => {
    const { image, name, price, recipe, } = item;
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const [,refetch] = useCarts()
    const handleAddToCart = (Food) => {
        if (user && user?.email) {
            const cardItem = {
                foodId: Food._id,
                email: user.email,
                image,
                name,
                price,
                recipe
            }
            axiosSecure.post('/carts', cardItem)
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        title: "Added!",
                        text: "Food Added in Add to cart",
                        icon: "success"
                    });
                    refetch()
                })
                .catch(error => console.log(error))

        }
        else {
            Swal.fire({
                title: "You are not log in",
                text: "Please log in to add to cart this food!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,log in!"
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login', { state: location.pathname })

                    Swal.fire({
                        title: "Login!",
                        text: "Login Now",
                        icon: "success"
                    });
                }
            });
        }
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mt-8">
                <figure><img src={image} className="w-full" alt={name} /></figure>
                <p className="absolute bg-gray-950 px-3 py-2 right-0 m-4 text-white font-medium rounded-lg">$ {price}</p>
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center">{name}</h2>
                    <p className=" text-justify">{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedCard;
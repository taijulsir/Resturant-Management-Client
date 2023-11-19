import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const useCarts = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["cart", user?.email],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            console.log(res.data)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCarts;
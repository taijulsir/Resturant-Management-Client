/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin/useAdmin";


const AdminRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isAdmin){
        return children;
    }
   return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default AdminRoutes;
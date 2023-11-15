import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { BsCart4 } from "react-icons/bs";
import useCarts from "../Hooks/useCarts/useCarts";

const Navbar = () => {

    const [cart] = useCarts()
    console.log(cart)
    const {user,logOut} = useContext(AuthContext) 
    console.log(user)
    const handleSignOUt = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error.message))
    }
    const navlinks =
        <>

            <li className=" uppercase text-base mr-2 text-amber-500  font-medium"><NavLink to="/" >Home</NavLink></li>
            <li className=" uppercase text-base mr-2 text-amber-500  font-medium"><NavLink to="/ourMenu" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-amber-400 " : ""}>Our Menu</NavLink></li>
            <li className=" uppercase text-base mr-2 text-amber-500  font-medium"><NavLink to="/ourShop/salad" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-amber-400" : ""}>Our Food</NavLink></li>
            <li className=" uppercase text-base mr-2 text-amber-500  font-medium"><NavLink to="/dashboard/cart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-amber-400" : ""}>Cart <BsCart4 className="text-2xl"></BsCart4><div className="badge badge-primary" >+{cart.length}</div></NavLink></li>
            <li className=" uppercase text-base mr-2 text-amber-500  font-medium"><NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-amber-400" : ""}>Dashboard</NavLink></li>
            <li className=" uppercase text-base mr-2 text-amber-500  font-medium"><NavLink to="/contactUs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-amber-400" : ""}>ContactUs</NavLink></li>
           
        </>

    return (
        <div>
            <div className="navbar  bg-opacity-30 container mx-auto  z-10 fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="normal-case text-xl"><img src="https://i.ibb.co/LQLBG3S/logo.png" alt="" className="w-28 h-20" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                {user ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                        <li className="text-xl font-medium px-1">{user.displayName}</li>
                        <li><button className="text-xl" onClick={handleSignOUt}>Logout</button></li>
                    </ul>
                </div> : <Link to="/login"><button className="btn bg-amber-400 font-bold"> Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
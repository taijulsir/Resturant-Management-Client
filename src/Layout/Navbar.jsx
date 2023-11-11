import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navlinks =
        <>

            <li className=" uppercase text-base mr-2  font-medium"><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-amber-400" : ""}>Home</NavLink></li>
            <li className=" uppercase text-base mr-2   shadow-md font-medium"><NavLink to="/contactUs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-amber-400" : ""}>ContactUs</NavLink></li>
            <li className=" uppercase text-base mr-2   shadow-md font-medium"><NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-amber-400" : ""}>Dashboard</NavLink></li>
            <li className=" uppercase text-base mr-2   shadow-md font-medium"><NavLink to="/ourMenu" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-amber-400 " : ""}>ourMenu</NavLink></li>
            <li className=" uppercase text-base mr-2   shadow-md font-medium"><NavLink to="/ourShop" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-amber-400" : ""}>ourShop</NavLink></li>
           
        </>

    return (
        <div>
            <div className="navbar bg-black bg-opacity-30 container mx-auto  z-10 fixed">
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
               <Link to='/login'><button className="btn bg-slate-100">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
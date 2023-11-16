import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHamburger, FaHome, FaList, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu p-4">

                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/adminHome"><FaHome className="text-2xl"></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addItems"><FaUtensils className="text-2xl"></FaUtensils>Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageItems"><FaList className="text-2xl"></FaList>Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageBookings"><FaBook className="text-2xl"></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allUsers"><FaUsers className="text-2xl"></FaUsers>All Users</NavLink></li>
                            </> :
                            <>
                                <li><NavLink to="/dashboard/userHome"><FaHome className="text-2xl"></FaHome>User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><FaCalendar className="text-2xl"></FaCalendar>Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/cart"><FaShoppingCart className="text-2xl"></FaShoppingCart>My cart</NavLink></li>
                                <li><NavLink to="/dashboard/reviews"><FaAd className="text-2xl"></FaAd>Add a reviews</NavLink></li>
                                <li><NavLink to="/dashboard/myBookings"><FaList className="text-2xl"></FaList>My Bookings</NavLink></li>
                            </>
                    }




                    <div className="divider"></div>
                    {/* shared */}
                    <li><NavLink to="/"><FaHome className="text-2xl"></FaHome> Home</NavLink></li>
                    <li><NavLink to="/ourShop/salad"><FaHamburger className="text-2xl"></FaHamburger> Menu</NavLink></li>
                    <li><NavLink to="/ourShop/contact"><FaEnvelope className="text-2xl"></FaEnvelope>Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1" style={{ backgroundImage: 'url("https://i.ibb.co/wMp9nDY/authentication.png")' }}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
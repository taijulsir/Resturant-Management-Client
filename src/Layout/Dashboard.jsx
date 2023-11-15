import { FaAd, FaCalendar, FaHamburger, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu p-4">
                    <li><NavLink to="/dashboard/userHome"><FaHome className="text-2xl"></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar className="text-2xl"></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart className="text-2xl"></FaShoppingCart>My cart</NavLink></li>
                    <li><NavLink to="/dashboard/reviews"><FaAd className="text-2xl"></FaAd>Add a reviews</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><FaList className="text-2xl"></FaList>My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome className="text-2xl"></FaHome> Home</NavLink></li>
                    <li><NavLink to="/ourShop/salad"><FaHamburger className="text-2xl"></FaHamburger> Menu</NavLink></li>                 
                </ul>
            </div>
            <div className="flex-1" style={{ backgroundImage: 'url("https://i.ibb.co/wMp9nDY/authentication.png")' }}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
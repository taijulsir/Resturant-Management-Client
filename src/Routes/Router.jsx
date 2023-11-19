import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "../Routes/AdminRoutes";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateFood from "../Pages/Dashboard/UpdateFood/UpdateFood";
import Payment from "../Pages/Dashboard/Payment/Payment";




const router = createBrowserRouter([
    
    // for all routes
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/ourMenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/ourShop/:category',
                element: <OurShop></OurShop>
            },
            
        ]
    },

    // login routes
    {
        path: "/login",
        element: <Login></Login>
    },

    // register routes
    {
        path: "/register",
        element: <SignUp></SignUp>
    },

    // dashboard routes
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
        // admin routes
            {
                path: 'allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: "addItems",
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>

            },
            {
                path: "manageItems",
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            },
            {
                path: 'manageItems/updateFoods/:id',
                element: <AdminRoutes><UpdateFood></UpdateFood></AdminRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
])
export default router;
import Banner from "./Banner";
import Hero from "./Hero";
import Menus from "./Menus";
import Order from "./Order";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Order></Order>
           <Hero></Hero>
           <Menus></Menus>
        </div>
    );
};

export default Home;
import Banner from "./Banner";
import Hero from "./Hero";
import HomeConatact from "./HomeConatact";
import Menus from "./Menus";
import Order from "./Order";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Order></Order>
           <Hero></Hero>
           <Menus></Menus>
           <HomeConatact></HomeConatact>
        </div>
    );
};

export default Home;
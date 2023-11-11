import Banner from "./Banner";
import FromMenu from "./FromMenu";
import Hero from "./Hero";
import HomeConatact from "./HomeConatact";
import Menus from "./Menus";
import Order from "./Order";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Order></Order>
           <Hero></Hero>
           <Menus></Menus>
           <HomeConatact></HomeConatact>
           <FromMenu></FromMenu>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
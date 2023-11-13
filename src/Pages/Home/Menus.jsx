import SharedTitle from "../../Components/SharedTitle/SharedTitle";
import './Menus.css'
import { Link } from "react-router-dom";
import useMenu from "../../Hooks/useMenu/useMenu";
import SharedDesign from "../../Components/SharedDesign";

const Menus = () => {
    const [menus] = useMenu()
    const popularMenu = menus.filter(menu => menu.category === "popular")
    return (
        <div>
            <div>
                <SharedTitle subHeading={"Check it out"} heading={"From Our Menu"}
                ></SharedTitle>
            </div>
            <section>
                <div>
                    <SharedDesign items={popularMenu}></SharedDesign>
                </div>
            </section>
            <div className="flex items-center justify-center">
                <Link to="/ourMenu"> <button className="btn hvr-underline-reveal">View All Menu</button></Link>
            </div>
        </div>
    );
};

export default Menus;
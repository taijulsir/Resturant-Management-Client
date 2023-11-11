import { useEffect, useState } from "react";
import SharedTitle from "../../Components/SharedTitle/SharedTitle";
import axios from "axios";
import Menu from "./Menu";
import './Menus.css'

const Menus = () => {
    const [menus, setMenus] = useState([])
 useEffect(()=>{
    axios.get('/menu.json')
    .then(res=>{
        const data = res.data.filter(menu=>menu.category === "popular")
        setMenus(data)
    })
    .catch(error=>console.log(error))
 },[])
   console.log(menus)    
    return (
        <div>
            <div>
                <SharedTitle subHeading={"Check it out"} heading={"From Our Menu"}
                ></SharedTitle>
            </div>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
                    {menus.map(menu =><Menu key={menu._id} menu={menu}></Menu>)}
                </div>
            </section>
           <div className="flex items-center justify-center">
           <button className="btn hvr-underline-reveal">View All Menu</button>

           </div>

        </div>
    );
};

export default Menus;
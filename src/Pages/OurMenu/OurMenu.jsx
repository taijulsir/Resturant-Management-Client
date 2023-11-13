
import SharedDesign from "../../Components/SharedDesign";
import SharedMenu from "../../Components/SharedMenu";
import SharedTitle from "../../Components/SharedTitle/SharedTitle";
import useMenu from "../../Hooks/useMenu/useMenu";


const OurMenu = () => {
    const [menus] = useMenu()
    const offeredMenu = menus.filter(menu => menu.category === "offered")
    const dessertMenu = menus.filter(menu => menu.category === "dessert")
    const pizzaMenu = menus.filter(menu => menu.category === "pizza")
    const soupMenu = menus.filter(menu => menu.category === "soup")
    const saladMenu = menus.filter(menu => menu.category === "salad")
    return (
        <div>

            {/* banner section */}
            <SharedMenu bgimg={"https://i.ibb.co/YyjwVzy/banner3.jpg"} heading={"OUR MENU"} subHeading={"Would you like to try a dish?"}></SharedMenu>

            {/* today offer section */}
            <div>
                <div className="mt-[130px]">
                    <SharedTitle subHeading={"TODAY'S OFFER"} heading={"Don`t miss"}></SharedTitle>
                </div>
                <div>
                    <SharedDesign items={offeredMenu} title={"dessert"}></SharedDesign>
                </div>
            </div>

            {/* desserts section */}
            <div className="mt-[115px]">
                <SharedMenu bgimg={"https://i.ibb.co/JjYsMbP/dessert-bg.jpg"} heading={"DESSERTS"} subHeading={" Satisfy your sweet tooth with delectable desserts, ranging from rich cakes to creamy ice creams, crafted with the finest ingredients for an indulgent and delightful experience."}></SharedMenu>
            </div>
          
            <div>
                <SharedDesign items={dessertMenu} title={"dessert"}></SharedDesign>
            </div>



            {/* pizza section */}
            <div className="mt-[115px]">
                <SharedMenu bgimg={"https://i.ibb.co/cDqW0hN/pizza-bg.jpg"} heading={"PIZZAS"} subHeading={" Experience pizza perfection with our artisanal creations, featuring a harmonious blend of premium cheeses, fresh toppings, and a crispy crust, delivering a taste of pure delight in every slice."}></SharedMenu>
            </div>
         
            <div>
                <SharedDesign items={pizzaMenu} title={"pizza"}></SharedDesign>
            </div>


            {/* Salad Section */}
            <div className="mt-[115px]">
                <SharedMenu bgimg={"https://i.ibb.co/z84Rhfq/salad-bg.jpg"} heading={"SALADS"} subHeading={" Warm your soul with our exquisite soup selection, meticulously prepared with fresh ingredients and flavorful spices, offering a comforting and nourishing experience in every spoonful."}></SharedMenu>
            </div>
          
            <div>
                <SharedDesign items={saladMenu} title={"salad"}></SharedDesign>
            </div>


            {/* soup section */}
            <div className="mt-[115px]">
                <SharedMenu bgimg={"https://i.ibb.co/Qk19N8Z/soup-bg.jpg"} heading={"SOUPS"} subHeading={" Elevate your palate with our vibrant salads, bursting with crisp greens, colorful veggies, and tantalizing dressings, creating a refreshing and wholesome dining option for a delightful and health-conscious meal."}></SharedMenu>
            </div>
           
            <div>
                <SharedDesign items={soupMenu} title={"soup"}></SharedDesign>
            </div>

        </div>
    );
};

export default OurMenu;
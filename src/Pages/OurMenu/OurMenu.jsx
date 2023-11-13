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
    const saladMenu = menus.filter(menu => menu.category === "dessert")
    return (
        <div>
            {/* banner section */}
            <SharedMenu bgimg={"https://i.ibb.co/YyjwVzy/banner3.jpg"} heading={"OUR MENU"} subHeading={"Would you like to try a dish?"}></SharedMenu>

            {/* today offer section */}
            <div>
                <div className="mt-[130px]">
                    <SharedTitle subHeading={"TODAY'S OFFER"} heading={"Don`t miss"}></SharedTitle>
                </div>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {offeredMenu.map(offered => <SharedDesign key={offered._id} price={offered.price} name={offered.name} image={offered.image} recipe={offered.recipe}></SharedDesign>)}
                </div>
                <div className="flex justify-center items-center mt-[65px]">
                    <button className="btn border-b-4 border-black uppercase text-xl">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>

            {/* desserts section */}
            <div className="mt-[115px]">
                <SharedMenu bgimg={"https://i.ibb.co/JjYsMbP/dessert-bg.jpg"} heading={"DESSERTS"} subHeading={" Satisfy your sweet tooth with delectable desserts, ranging from rich cakes to creamy ice creams, crafted with the finest ingredients for an indulgent and delightful experience."}></SharedMenu>
            </div>
            <div>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dessertMenu.map(dessert => <SharedDesign key={dessert._id} price={dessert.price} name={dessert.name} image={dessert.image} recipe={dessert.recipe}></SharedDesign>)}
                </div>
                <div className="flex justify-center items-center mt-[65px]">
                    <button className="btn border-b-4 border-black uppercase text-xl">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>



            {/* pizza section */}
            <div className="mt-[115px]">
                <SharedMenu bgimg={"https://i.ibb.co/cDqW0hN/pizza-bg.jpg"} heading={"PIZZAS"} subHeading={" Experience pizza perfection with our artisanal creations, featuring a harmonious blend of premium cheeses, fresh toppings, and a crispy crust, delivering a taste of pure delight in every slice."}></SharedMenu>          
            </div>
            <div>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pizzaMenu.map(pizza => <SharedDesign key={pizza._id} price={pizza.price} name={pizza.name} image={pizza.image} recipe={pizza.recipe}></SharedDesign>)}
                </div>
                <div className="flex justify-center items-center mt-[65px]">
                    <button className="btn border-b-4 border-black uppercase text-xl">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>


            {/* Salad Section */}
            <div className="mt-[115px]">
                <SharedMenu bgimg={"https://i.ibb.co/z84Rhfq/salad-bg.jpg"} heading={"SALADS"} subHeading={" Warm your soul with our exquisite soup selection, meticulously prepared with fresh ingredients and flavorful spices, offering a comforting and nourishing experience in every spoonful."}></SharedMenu>
            </div>
            <div>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {saladMenu.map(salad => <SharedDesign key={salad._id} price={salad.price} name={salad.name} image={salad.image} recipe={salad.recipe}></SharedDesign>)}
                </div>
                <div className="flex justify-center items-center mt-[65px]">
                    <button className="btn border-b-4 border-black uppercase text-xl">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>


            {/* soup section */}
            <div className="mt-[115px]">
                <SharedMenu bgimg={"https://i.ibb.co/Qk19N8Z/soup-bg.jpg"} heading={"SOUPS"} subHeading={" Elevate your palate with our vibrant salads, bursting with crisp greens, colorful veggies, and tantalizing dressings, creating a refreshing and wholesome dining option for a delightful and health-conscious meal."}></SharedMenu>
            </div>
            <div>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {soupMenu.map(soup => <SharedDesign key={soup._id} price={soup.price} name={soup.name} image={soup.image} recipe={soup.recipe}></SharedDesign>)}
                </div>
                <div className="flex justify-center items-center mt-[65px] mb-[65px]">
                    <button className="btn border-b-4 border-black uppercase text-xl">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;
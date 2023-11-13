import SharedMenu from "../../Components/SharedMenu";
import SharedTitle from "../../Components/SharedTitle/SharedTitle";


const OurMenu = () => {
    return (
        <div>
            {/* banner section */}
            <SharedMenu bgimg={"https://i.ibb.co/YyjwVzy/banner3.jpg"} heading={"OUR MENU"} subHeading={"Would you like to try a dish?"}></SharedMenu>

            {/* today offer section */}
            <div>
                <div className="mt-[130px]">
                <SharedTitle subHeading={"TODAY'S OFFER"} heading={"Don`t miss"}></SharedTitle>
                </div>


            </div>






            {/* desserts section */}
            <div>
                <SharedMenu bgimg={"https://i.ibb.co/JjYsMbP/dessert-bg.jpg"} heading={"DESSERTS"} subHeading={" Satisfy your sweet tooth with delectable desserts, ranging from rich cakes to creamy ice creams, crafted with the finest ingredients for an indulgent and delightful experience."}></SharedMenu>
            </div>
            {/* pizza section */}
            <div>
                <SharedMenu bgimg={"https://i.ibb.co/cDqW0hN/pizza-bg.jpg"} heading={"PIZZAS"} subHeading={" Experience pizza perfection with our artisanal creations, featuring a harmonious blend of premium cheeses, fresh toppings, and a crispy crust, delivering a taste of pure delight in every slice."}></SharedMenu>
            </div>
            {/* Salad Section */}
            <div>
                <SharedMenu bgimg={"https://i.ibb.co/z84Rhfq/salad-bg.jpg"} heading={"SALADS"} subHeading={" Warm your soul with our exquisite soup selection, meticulously prepared with fresh ingredients and flavorful spices, offering a comforting and nourishing experience in every spoonful."}></SharedMenu>
            </div>
            {/* soup section */}
            <div>
                <SharedMenu bgimg={"https://i.ibb.co/Qk19N8Z/soup-bg.jpg"} heading={"SOUPS"} subHeading={" Elevate your palate with our vibrant salads, bursting with crisp greens, colorful veggies, and tantalizing dressings, creating a refreshing and wholesome dining option for a delightful and health-conscious meal."}></SharedMenu>
            </div>
        </div>
    );
};

export default OurMenu;
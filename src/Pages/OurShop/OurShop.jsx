import SharedMenu from "../../Components/SharedMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu/useMenu";
import { useState } from "react";
import ShopTab from "./ShopTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
    const [menus] = useMenu()
    const categories = ['salad','pizza','soup','dessert','drink']
    const {category} = useParams()
    console.log(category)
    const initialIndex = categories.indexOf(category)
    console.log(initialIndex)
    const [index, setIndex] = useState(initialIndex)
    const saladMenu = menus.filter(menu => menu.category === "salad")
    const dessertMenu = menus.filter(menu => menu.category === "dessert")
    const pizzaMenu = menus.filter(menu => menu.category === "pizza")
    const soupMenu = menus.filter(menu => menu.category === "soup")
    const drinksMenu = menus.filter(menu => menu.category === "drinks")
    return (
        <div>
            <div>
                <SharedMenu bgimg={"https://i.ibb.co/JCsHscJ/banner2.jpg"} heading={"OUR SHOP"} subHeading={"Would you like to try a dish?"}></SharedMenu>
            </div>
            <div className="my-[130px] text-center">
                <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
                    <TabList  className="uppercase">
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>dessert</Tab>
                        <Tab>drink</Tab>
                    </TabList>


                    {/* salad */}
                    <TabPanel>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {saladMenu.map(salad=><SharedCard key={salad._id} image={salad.image} name={salad.name} recipe={salad.recipe}></SharedCard>)}
                       </div> */}
                        <ShopTab items={saladMenu}></ShopTab>
                    </TabPanel>


                    {/* pizza */}
                    <TabPanel>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pizzaMenu.map(pizza=><SharedCard key={pizza._id} image={pizza.image} name={pizza.name} recipe={pizza.recipe}></SharedCard>)}
                       </div> */}
                        <ShopTab items={pizzaMenu}></ShopTab>
                    </TabPanel>


                    {/* soup */}
                    <TabPanel>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {soupMenu.map(soup => <SharedCard key={soup._id} image={soup.image} name={soup.name} recipe={soup.recipe}></SharedCard>)}
                        </div> */}
                        <ShopTab items={soupMenu}></ShopTab>
                    </TabPanel>


                    {/* desserts  */}
                    <TabPanel>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {dessertMenu.map(dessert => <SharedCard key={dessert._id} image={dessert.image} name={dessert.name} recipe={dessert.recipe}></SharedCard>)}
                        </div> */}
                        <ShopTab items={dessertMenu}></ShopTab>
                    </TabPanel>


                    {/* drinks */}
                    <TabPanel>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {drinksMenu.map(drinks => <SharedCard key={drinks._id} image={drinks.image} name={drinks.name} recipe={drinks.recipe}></SharedCard>)}
                        </div> */}
                        <ShopTab items={drinksMenu}></ShopTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;
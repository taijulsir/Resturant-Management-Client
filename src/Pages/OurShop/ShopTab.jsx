/* eslint-disable react/prop-types */
import SharedCard from "../../Components/SharedTitle/SharedCard";


const ShopTab = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => <SharedCard key={item._id} image={item.image} name={item.name} recipe={item.recipe} price={item.price}></SharedCard>)}
            </div>
        </div>
    );
};

export default ShopTab;
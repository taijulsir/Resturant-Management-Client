/* eslint-disable react/prop-types */
import SharedCard from "../../Components/SharedTitle/SharedCard";


const ShopTab = ({ items }) => {
    return (
        <div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => <SharedCard key={item._id} item={item}></SharedCard>)}
            </div>
        </div>
    );
};

export default ShopTab;
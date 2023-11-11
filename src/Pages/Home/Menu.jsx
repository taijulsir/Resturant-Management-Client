/* eslint-disable react/prop-types */
import SharedDesign from "../../Components/SharedDesign";


const Menu = ({menu}) => {
    const {name,image,recipe,price} = menu;
    return (
        <div>
           <SharedDesign name={name} image={image} recipe={recipe} price={price}  ></SharedDesign> 
        </div>
    );
};

export default Menu;
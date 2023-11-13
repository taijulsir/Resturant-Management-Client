/* eslint-disable react/prop-types */


const SharedCard = ({ image,name,recipe,price }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mt-8">
                <figure><img src={image} className="w-full" alt={name} /></figure>
                <p className="absolute bg-gray-950 px-3 py-2 right-0 m-4 text-white font-medium rounded-lg">$ {price}</p>
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedCard;
/* eslint-disable react/prop-types */


const SharedDesign = ({ price, name, image, recipe }) => {
    return (
        <div>
            <div className=" flex justify-around items-center gap-8">
                <div style={{borderRadius: '0 200px 200px 200px'}}>
                    <img src={image} alt=""   className="h-[104px] w-[118px]"  />
                </div>
                <div className="flex justify-between gap-5">
                    <div>
                    <h3 className="text-xl text-zinc-950 font-medium uppercase font-mono">{name}-----------</h3>
                    <p className=" text-[#737373]">{recipe}</p>
                    </div>
                    <p className="text-lg text-amber-400">${price}</p>
                </div>
                
            </div>
        </div>
    );
};

export default SharedDesign;
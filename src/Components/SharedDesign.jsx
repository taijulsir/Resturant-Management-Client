/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SharedDesign = ({ items,title }) => {
    return (
        <div>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map(item => <div key={item._id} className=" flex justify-around items-center gap-8">
                    <div >
                        <img src={item.image} alt="" style={{ borderRadius: '0 200px 200px 200px' }} className="h-[104px] w-[118px]" />
                    </div>
                    <div className="flex justify-between gap-5">
                        <div>
                            <h3 className="text-xl text-zinc-950 font-medium uppercase font-mono">{item.name}-----------</h3>
                            <p className=" text-[#737373]">{item.recipe}</p>
                        </div>
                        <p className="text-lg text-amber-400">${item.price}</p>
                    </div>
                </div>
                )}
            </div>
            <div>
              {title &&  <Link to={`/ourShop/${title}`} className="flex justify-center items-center mt-[65px]"> <button className="btn border-b-4 border-black uppercase text-xl">ORDER YOUR FAVOURITE FOOD</button></Link>}
            </div>


        </div>
    );
};

export default SharedDesign;
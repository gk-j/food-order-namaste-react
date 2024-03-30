import { useRecoilState } from "recoil"
import { useAddProduct } from "../store/hooks"
import { IMG_CDN_URL } from "../utils/constants"

import { useState } from "react"
import { cartState } from "../store/atom"
const ItemList = ({data}) =>{

    const [orderingQuantity] = useState(1)
    const addCartItem = useAddProduct() 
    const cartList = useRecoilState(cartState)
    console.log(cartList[0])
    return(
        <div>
            {data.map((item)=>{
                return(
                    <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left">
                        <div className="flex justify-between py-2">
                            <div className="flex flex-col py-2">
                                <span>{item.card.info.name}</span>
                                <span>₹{item.card.info.defaultPrice/100 || item.card.info.price/100 }</span>
                            </div>
                            <div className="py-2">
                                {item.card.info.imageId !==undefined?<img className="w-32 "  src={IMG_CDN_URL+item.card.info?.imageId} alt={item.card.info.name}/>:""}
                                {/* <button onClick={()=>addCartItem({item:item,quantity:orderingQuantity})} className="bg-blue-500  rounded-md p-2  text-white relative bottom-6 left-8">Add +</button>    */}
                                <button onClick={()=>addCartItem(item)} className="bg-blue-500  rounded-md p-2  text-white relative bottom-6 left-8">Add +</button>   
                            </div>   
                            
                        </div>
                        <p className="text-xs">{item.card.info?.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList
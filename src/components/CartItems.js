import { useState } from "react"
import { IMG_CDN_URL } from "../utils/constants"
import { useRecoilState } from "recoil"
import { cartState } from "../store/atom"
import { useRemoveProduct } from "../store/hooks"
// import CartContext from "../utils/CartContext"

export default function CartItems(props){
    const {data}=props
    console.log("data:",data)
    const {card,quantity}=data
    const [q,setq]=useState(quantity)
    const removeItem = useRemoveProduct()
    // const {addCartItem,removeItem,decreaseQuantity} = useContext(CartContext)
    // console.log(cartList)
    return(
        <div>
            <div className="bg-gray-100 shadow-2xl p-4 w-9/12 mx-auto my-6">
            <div className="p-2 m-2 border-b-2 border-gray-200 text-left">
                <div className="flex justify-between py-2">
                    <div className="flex flex-col py-2">
                        <span>{card.info.name}</span>
                        <span>₹{card.info.defaultPrice/100 || card.info.price/100 }</span>
                    </div>     
                    <div className="py-2">
                        {card.info.imageId !==undefined?<img className="w-32"  src={IMG_CDN_URL+card.info?.imageId} alt={card.info.name}/>:""}
                                
                    </div>               
                </div>
                    <div className="flex items-center">
                        <div>
                            <button onClick={()=>{setq(prev=>prev+1);addCartItem({item:item,quantity:1})}} className="bg-blue-500  rounded-full px-2  text-white">+</button>  
                        </div>
                        <div className="mx-2">{q}</div> 
                        <div>
                            <button onClick={()=>{setq(prev=>prev-1);decreaseQuantity({item:item})}}  className="bg-blue-500  rounded-full px-2  text-white">-</button>
                        </div>
                    </div>   
                <p className="text-xs">{card.info?.description}</p>
                <div>
                 <button className="p-2 bg-gray-800 text-white rounded pointer" onClick={()=>removeItem(card)}>remove</button>
                </div>
            </div>
        </div>
        </div>
     
    )
}
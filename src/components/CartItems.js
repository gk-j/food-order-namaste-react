import { useContext, useState } from "react"
import { IMG_CDN_URL } from "../utils/constants"
import CartContext from "../utils/CartContext"

export default function CartItems(props){
    const {data}=props
    const {item,quantity}=data
    const [q,setq]=useState(quantity)

    const {addCartItem,removeItem,decreaseQuantity} = useContext(CartContext)
    // console.log(cartList)
    return(
        <div>
            {q>0?<div className="bg-gray-100 shadow-2xl p-4 w-9/12 mx-auto my-6">
            <div className="p-2 m-2 border-b-2 border-gray-200 text-left">
                <div className="flex justify-between py-2">
                    <div className="flex flex-col py-2">
                        <span>{item.card.info.name}</span>
                        <span>₹{item.card.info.defaultPrice/100 || item.card.info.price/100 }</span>
                    </div>     
                    <div className="py-2">
                        {item.card.info.imageId !==undefined?<img className="w-32"  src={IMG_CDN_URL+item.card.info?.imageId} alt={item.card.info.name}/>:""}
                                
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
                <p className="text-xs">{item.card.info?.description}</p>
                <div>
                 <button className="p-2 bg-gray-800 text-white rounded pointer" onClick={()=>removeItem(item.card.info.id)}>remove</button>
                </div>
            </div>
        </div>:""} 
        </div>
     
    )
}
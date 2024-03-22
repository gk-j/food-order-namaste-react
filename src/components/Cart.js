import { useContext } from "react"
import CartContext from "../utils/CartContext"
import ItemList from "./ItemList"
import CartItems from "./CartItems"
import CartSummary from "./CartSummary"
import { Link } from "react-router-dom"

const Cart = () => {

    const {cartList,clearCart} = useContext(CartContext)
    
    return(
        <div className="mt-24 flex flex-col  items-center text-center">
            <h1 className="border shadow-md p-2 rounded-md bg-gray-950  mb-4 font-bold text-2xl text-white">Cart</h1>
                
            {cartList.length===0?<div>
                <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                className="w-[360px] h-[360px]"
                alt="cart empty"
                />
                <h1 className="text-xl">Your Cart is empty</h1>
                <Link to="/">
                    <button className="bg-gray-950 text-white shadow-md rounded-md p-2">Go to Home</button>
                </Link>
            </div>:<div>
                <button 
                    className="p-2 m-2 bg-orange-300 text-white rounded-lg"
                    onClick={()=>clearCart()}>
                        Clear Cart
                </button>
                {cartList.map(eachItem=>{
                return(
                    <div>
                        <CartItems key={eachItem.item?.card?.info.id} data={eachItem}/>   
                    </div>    
                ) 
                                
            })}
            <CartSummary/></div>}
            
           
            
        </div>
    )
}

export default Cart
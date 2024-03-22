import { createContext } from "react";

const CartContext = createContext({
    cartList:[],
    addCartItem:()=>{},
    clearCart:()=>{}
})

export default CartContext
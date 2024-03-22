import { useContext } from "react";
import CartContext from "../utils/CartContext";

export default function CartSummary(){
    const {cartList} = useContext(CartContext)

    let total = 0;
    cartList.forEach(eachCartItem => {
        total += (eachCartItem.item.card.info.defaultPrice/100 || eachCartItem.item.card.info.price/100) * eachCartItem.quantity
      })
    
    
    return(
        <div>
            <div className="flex flex-col items-center">
            <h1 className="order-total-value text-[#171f46] text-2xl mb-1">
              <span className="order-total-label text-[#616e7c] font-semibold text-xl">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items text-[#616e7c] text-lg">{cartList.length} Items in cart</p>
            <button type="button" className="bg-[#0b69ff] text-white text-sm border-0 rounded p-3 my-2 pointer">
              Checkout
            </button>
          </div>
        </div>
    )
}
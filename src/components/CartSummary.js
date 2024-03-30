import {useRecoilValue} from "recoil"
import { cartStatus } from "../store/selector";


export default function CartSummary(){
  const {totalPrice,totalItems} = useRecoilValue(cartStatus)

   
    
    return(
        <div>
            <div className="flex flex-col items-center">
            <h1 className="order-total-value text-[#171f46] text-2xl mb-1">
              <span className="order-total-label text-[#616e7c] font-semibold text-xl">Order Total:</span> Rs {totalPrice}
              /-
            </h1>
            <p className="total-items text-[#616e7c] text-lg">{totalItems} Items in cart</p>
            <button type="button" className="bg-[#0b69ff] text-white text-sm border-0 rounded p-3 my-2 pointer">
              Checkout
            </button>
          </div>
        </div>
    )
}
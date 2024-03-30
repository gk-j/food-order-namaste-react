import { useRecoilState } from 'recoil';

import { cartState } from './atom'; 

export const useAddProduct = () => {
  const [cart, setCart] = useRecoilState(cartState);
  
  return (item) => {
    const index = cart.findIndex(eachItem => eachItem.card.info.id === item.card.info.id);

    if (index === -1) {
      return setCart([...cart, { ...item, quantity: 1 }]);
    }

    const newCart = cart.map((item, i) => {
      if(i === index) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }

      return item;
    })
    
    setCart(newCart)
  }
}

export const useRemoveProduct = () => {
  const [cart, setCart] = useRecoilState(cartState);
  
  return (card) => {
    const index = cart.findIndex(eachItem => eachItem.card.info.id === card.info.id);

    if (index === -1) {
      alert('Product not found in cart!')
      return;
    }

    const newCart = cart.filter(eachItem => eachItem.card.info.id !== card.info.id)
    
    setCart(newCart)
  }
}

export const useClearCart = () =>{
  const [cart,setCart]= useRecoilState(cartState)
  return () =>{
    setCart([])
  }
  
}


export const useDecreaseQuantity = () =>{
  const [cart, setCart] = useRecoilState(cartState);
  return (card) =>{
    const productObject = cart.find(eachCartItem => eachCartItem.card.info.id === card.info.id);
    if(productObject.quantity>1){
      const updatedList = cart.map((eachCartItem,index)=>{
        if( card.info.id==eachCartItem.card.info.id){
              return {...eachCartItem,quantity:eachCartItem.quantity-1}                                   
          }
        return eachCartItem
      })
      setCart(updatedList)
    }else{
      const newCart = cart.filter(eachItem => eachItem.card.info.id !== card.info.id)
      setCart(newCart)
    }
  }
  

}

export const useIncreaseQuantity = () =>{
  const [cart, setCart] = useRecoilState(cartState);
    return (card) => {
      const updatedList = cart.map((eachCartItem,index)=>{
        if( card.info.id==eachCartItem.card.info.id){
              return {...eachCartItem,quantity:eachCartItem.quantity+1}                                   
          }
        return eachCartItem
      })
      setCart(updatedList)
    }
}
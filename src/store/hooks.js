import { useRecoilState } from 'recoil';

import { cartState } from './atom'; 

export const useAddProduct = () => {
  const [cart, setCart] = useRecoilState(cartState);
  
  return (item) => {
    const index = cart.findIndex(eachItem => eachItem.card.info.id === item.card.info.id);

    if (index === -1) {
      return setCart([...cart, { ...item, qty: 1 }]);
    }

    const newCart = cart.map((item, i) => {
      if(i === index) {
        return {
          ...item,
          qty: item.qty + 1,
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



import { selector } from 'recoil';

import { cartState } from './atom';

export const cartStatus = selector({
  key: 'cartStatus',
  get: ({ get }) => {
    const cart = get(cartState);
    const totalItems = cart.length;
    let totalPrice = 0;
    cart.forEach(eachCartItem => {
      totalPrice += (eachCartItem.card.info.defaultPrice/100 || eachCartItem.card.info.price/100) * eachCartItem.quantity
      })
    return {
      totalItems,
      totalPrice,
    }
  }
})
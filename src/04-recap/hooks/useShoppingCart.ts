import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldSghoppingCart) => {
      const productInCart: ProductInCart = oldSghoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return { ...oldSghoppingCart, [product.id]: productInCart };
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [product.id]: toDelete, ...rest } = oldSghoppingCart;
      return rest;
    });
  };

  return { onProductCountChange, shoppingCart };
};

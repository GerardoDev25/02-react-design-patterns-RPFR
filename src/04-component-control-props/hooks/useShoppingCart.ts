import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCard: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCard.count + count, 0) > 0) {
        productInCard.count += count;
        return { ...oldShoppingCart, [product.id]: productInCard };
      }

      // ? borrar el producto del carrito
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [product.id]: toDelate, ...rest } = oldShoppingCart;
      return rest;
    });
  };

  return { shoppingCart, onProductCountChange };
};

// export const useShoppingCart2 = () => {
//   const [shoppingCart, setShoppingCart] = useState<{
//     [key: string]: ProductInCart;
//   }>({});

//   const onProductCountChange = ({ count, product }: onChangeArgs) => {
//     setShoppingCart((oldShoppingCart) => {

//       if (count == 0) {
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         const { [product.id]: toDelate, ...rest } = oldShoppingCart;

//         return rest;
//       }

//       const newState = {
//         ...oldShoppingCart,
//         [product.id]: { ...product, count },
//       };

//       return newState;
//     });
//   };

//   return { shoppingCart, onProductCountChange };
// };

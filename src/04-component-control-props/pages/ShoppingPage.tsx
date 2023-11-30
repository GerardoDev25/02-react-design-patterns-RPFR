import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';
import '../styles/costume.style.css';
import { Product, onChangeArgs } from '../interfaces';
import { useState } from 'react';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

const product2 = {
  id: '2',
  title: 'Coffee Mug - meme',
  img: './coffee-mug2.png',
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (count == 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [product.id]: toDelate, ...rest } = oldShoppingCart;

        return rest;
      }

      const newState = {
        ...oldShoppingCart,
        [product.id]: { count, ...product },
      };

      return newState;
    });
  };

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={onProductCountChange}
          >
            <ProductImage
              className='costume-image'
              style={{ boxShadow: '10px' }}
            />
            <ProductTitle className='text-bold' />
            <ProductButtons className='costume-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-card'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className='bg-dark text-white'
            style={{ width: '100px' }}
            value={product.count}
          >
            <ProductImage
              className='costume-image'
              style={{ boxShadow: '10px' }}
            />
            <ProductButtons
              className='costume-buttons'
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

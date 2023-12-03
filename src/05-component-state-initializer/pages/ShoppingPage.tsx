import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';

import '../styles/costume.style.css';
import { products } from '../data/product';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard
          key={product.id}
          product={product}
          className='bg-dark text-white'
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          <ProductImage
            className='costume-image'
            style={{ boxShadow: '10px' }}
          />
          <ProductTitle className='text-bold' />
          <ProductButtons className='costume-buttons' />
        </ProductCard>
      </div>
    </div>
  );
};

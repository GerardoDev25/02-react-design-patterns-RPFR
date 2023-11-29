import { ProductButtons } from '../components/ProductButtons';
import { ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/costume.style.css';
import { Product } from '../interfaces';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

const product2 = {
  id: '12',
  title: 'Coffee Mug - meme',
  img: './coffee-mug2.png',
};

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {
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
        <ProductCard
          product={product2}
          className='bg-dark text-white'
          style={{ width: '100px' }}
        >
          <ProductImage
            className='costume-image'
            style={{ boxShadow: '10px' }}
          />
          <ProductButtons className='costume-buttons' />
        </ProductCard>
        <ProductCard
          product={product1}
          className='bg-dark text-white'
          style={{ width: '100px' }}
        >
          <ProductImage
            className='costume-image'
            style={{ boxShadow: '10px' }}
          />
          <ProductButtons className='costume-buttons' />
        </ProductCard>
      </div>
    </div>
  );
};

import { ProductButtons } from '../components/ProductButtons';
import { ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/costume.style.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title='hola mundo' />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className='bg-dark'>
          <ProductImage className='costume-image' />
          <ProductTitle className='text-white text-bold' />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

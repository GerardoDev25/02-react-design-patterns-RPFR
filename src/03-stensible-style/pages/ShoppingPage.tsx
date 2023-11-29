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
        <ProductCard product={product} className='bg-dark'>
          <ProductCard.Image className='costume-image' />
          <ProductCard.Title title='hola mundo' />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className='costume-image' />
          <ProductTitle className='text-bold' />
          <ProductButtons className='costume-buttons' />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

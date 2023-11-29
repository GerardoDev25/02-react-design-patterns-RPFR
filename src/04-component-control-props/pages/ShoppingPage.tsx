import { ProductButtons } from '../components/ProductButtons';
import { ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/costume.style.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

const product2 = {
  id: '12',
  title: 'Coffee Mug - meme',
  img: './coffee-mug2.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image className='costume-image' />
          <ProductCard.Title className='text-bold'/>
          <ProductCard.Buttons className='costume-buttons'/>
        </ProductCard>

        <ProductCard product={product2} className='bg-dark text-white'>
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

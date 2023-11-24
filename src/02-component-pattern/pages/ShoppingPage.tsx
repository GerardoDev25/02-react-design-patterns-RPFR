import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/ProductCard';

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
          <ProductImage />
          <ProductTitle title='hola' />
          <ProductButtons counter={10} increaseBy={() => {}} />
        </ProductCard>
      </div>
    </div>
  );
};

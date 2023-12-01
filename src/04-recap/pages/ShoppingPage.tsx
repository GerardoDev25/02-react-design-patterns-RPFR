import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';
import { products } from '../data/prosduct';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/costume.style.css';

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            className='bg-dark text-white'
            key={product.id}
            onChange={onProductCountChange}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className='costume-image'
              style={{ boxShadow: '10px 10px 10px grb(0 0 0 / 0)' }}
            />
            <ProductTitle className='text-bold' />
            <ProductButtons className='costume-buttons' />
          </ProductCard>
        ))}
      </div>
      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            className='bg-dark text-white'
            key={key}
            onChange={onProductCountChange}
            product={product}
            style={{ width: '100px' }}
            value={product.count}
          >
            <ProductImage
              className='costume-image'
              style={{ boxShadow: '10px 10px 10px grb(0 0 0 / 0)' }}
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

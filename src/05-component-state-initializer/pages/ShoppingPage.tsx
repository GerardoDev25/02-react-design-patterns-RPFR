import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';

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
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

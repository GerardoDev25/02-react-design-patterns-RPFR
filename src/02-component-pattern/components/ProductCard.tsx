import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces';
import { useProduct } from '../hooks/usProduct';
import styles from '../styles/styles.module.css';
// import { ProductImage, ProductButtons, ProductTitle } from './';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;

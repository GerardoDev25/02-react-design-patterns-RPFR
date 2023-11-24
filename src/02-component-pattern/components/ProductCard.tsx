import { FC, ReactElement } from 'react';

import { useProduct } from '../hooks/usProduct';
import styles from '../styles/styles.module.css';
import noIgamge from '../assets/no-image.jpg';

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductImage = ({ img = '' }): JSX.Element => {
  return (
    <img
      className={styles.productImg}
      src={img ? img : noIgamge}
      alt='Product img'
    />
  );
};

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonsPros {
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductButtons: FC<ProductButtonsPros> = ({
  counter,
  increaseBy,
}) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ product, children }: Props) => {
  // const { title, img } = product;
  // const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      {children}
      {/* <ProductImage img={img} />
      <ProductTitle title={title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
    </div>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

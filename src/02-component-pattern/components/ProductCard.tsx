import { FC } from 'react';

import { useProduct } from '../hooks/usProduct';
import styles from '../styles/styles.module.css';
import noIgamge from '../assets/no-image.jpg';

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { title, img } = product;
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={img ? img : noIgamge}
        alt='coffee mog'
      />
      <span className={styles.productDescription}>{title}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    </div>
  );
};

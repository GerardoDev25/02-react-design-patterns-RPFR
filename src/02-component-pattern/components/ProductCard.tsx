import styles from '../styles/styles.module.css';
import noIgamge from '../assets/no-image.jpg';
import { useProduct } from '../hooks/usProduct';

export const ProductCard = () => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      {/* <img
        className={styles.productImg}
        src='./coffee-mug.png'
        alt='coffee mog'
      /> */}
      <img className={styles.productImg} src={noIgamge} alt='coffee mog' />
      <span className={styles.productDescription}>Coffee Mug</span>
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

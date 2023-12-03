import { CSSProperties, useContext } from 'react';
import noIgamge from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}
export const ProductImage = ({ img, className, style }: Props): JSX.Element => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noIgamge;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt='Product img'
      style={style}
    />
  );
};
import { CSSProperties, createContext } from 'react';

import { useProduct } from '../hooks/usProduct';
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
} from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (m: string) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = (props: Props) => {
  const {
    product,
    children,
    className,
    style,
    onChange,
    value,
    initialValues,
  } = props;
  const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children('hola mundo')}
      </div>
    </Provider>
  );
};

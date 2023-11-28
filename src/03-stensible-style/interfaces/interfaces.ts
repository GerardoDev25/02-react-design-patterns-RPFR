import { ReactElement } from 'react';
import { Props as ProductCardProps } from '../components/ProductCard';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  (params: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: ({
    children,
    className,
  }: {
    children?: ReactElement | ReactElement[];
    className?: string;
  }) => JSX.Element;
}

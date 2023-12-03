import { useEffect, useState } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = (props: useProductArgs) => {
  const { onChange, product, value = 0, initialValues } = props;
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  return { counter, increaseBy };
};

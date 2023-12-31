import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = (props: useProductArgs) => {
  const { onChange, product, value = 0 } = props;
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (valueIncrease: number) => {
    if (isControlled.current) {
      return onChange!({ count: valueIncrease, product });
    }

    const newValue = Math.max(counter + valueIncrease, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  return { counter, increaseBy };
};

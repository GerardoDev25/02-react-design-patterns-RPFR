import { useState, ChangeEvent } from 'react';

export const useForm = <T>(initalState: T) => {
  const [formDate, setFormData] = useState<T>(initalState);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formDate, [target.name]: target.value });
  };

  return { ...formDate, formDate, onChange };
};

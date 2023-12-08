import { useState, ChangeEvent } from 'react';

export const useForm = <T>(initalState: T) => {
  const [formDate, setFormData] = useState<T>(initalState);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formDate, [target.name]: target.value });
  };

  const reserForm = () => {
    setFormData({ ...initalState });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  return {
    // variables
    ...formDate,
    formDate,

    // functions
    isValidEmail,
    onChange,
    reserForm,
  };
};

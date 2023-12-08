import { FormEvent } from 'react';
import { useForm } from '../hooks';

import '../style/style.css';

export const RegisterPage = () => {
  const { email, name, password1, password2, formDate, onChange } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formDate);
  };

  return (
    <div>
      <h1>register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={name}
          name='name'
          type='text'
          placeholder='name'
        />
        <input
          onChange={onChange}
          value={email}
          name='email'
          type='email'
          placeholder='email'
        />
        <input
          onChange={(ev) => onChange(ev)}
          value={password1}
          name='password1'
          type='password'
          placeholder='password'
        />
        <input
          onChange={onChange}
          value={password2}
          name='password2'
          type='password'
          placeholder='repeat password'
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

import { ChangeEvent, useState } from 'react';
import '../style/style.css';

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: 'Gerardo',
    email: 'gerado@gmail.com',
    password1: '12345',
    password2: '12345',
  });
  const { email, name, password1, password2 } = registerData;

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>register Page</h1>
      <form>
        <input
          onChange={onChange}
          value={name}
          type='text'
          placeholder='name'
        />
        <input
          onChange={onChange}
          value={email}
          type='email'
          placeholder='email'
        />
        <input
          onChange={(ev) => onChange(ev)}
          value={password1}
          type='password'
          placeholder='password'
        />
        <input
          onChange={onChange}
          value={password2}
          type='password'
          placeholder='repeat password'
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

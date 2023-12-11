import { FormEvent } from 'react';
import { useForm } from '../hooks';

import '../style/style.css';

export const RegisterFormikPage = () => {
  const {
    email,
    name,
    password1,
    password2,
    formData,
    onChange,
    reserForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>register Formik Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={name}
          name='name'
          type='text'
          placeholder='name'
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>this field is required</span>}
        <input
          onChange={onChange}
          value={email}
          name='email'
          type='email'
          placeholder='email'
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>email not valid</span>}
        <input
          onChange={(ev) => onChange(ev)}
          value={password1}
          name='password1'
          type='password'
          placeholder='password'
        />
        {password1.trim().length <= 0 && <span>this field is required</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>this field have to be larger than 4 characters</span>
        )}
        <input
          onChange={onChange}
          value={password2}
          name='password2'
          type='password'
          placeholder='repeat password'
        />
        {password2.trim().length <= 0 && <span>this field is required</span>}
        {!(password2 === password1) && password2.trim().length > 0 && (
          <span>the password have to be match</span>
        )}
        <button type='submit'>Create</button>
        <button type='button' onClick={reserForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

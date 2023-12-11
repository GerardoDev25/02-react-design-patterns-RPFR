import { Formik, Form } from 'formik';
import { MyTextInput } from '../components/';
import * as Yup from 'yup';

import '../style/style.css';

interface FormValues {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  password1: '',
  password2: '',
};

export const RegisterFormikPage = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, 'should to have 15 character or less')
      .min(2, 'should to have 2 character or more')
      .required('required'),
    email: Yup.string().email('invalid email').required('required'),
    password1: Yup.string()
      .min(6, 'should to have 6 character or more')
      .required('required'),
    password2: Yup.string()
      .min(6, 'should to have 6 character or more')
      .oneOf([Yup.ref('password1')], "the password aren't equals")
      .required('required'),
  });

  return (
    <div>
      <h1>register Formik Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({handleReset}) => (
          <Form noValidate>
            <MyTextInput
              label='Frst Name'
              name='name'
              placeholder='first Name'
            />

            <MyTextInput
              label='Email'
              name='email'
              placeholder='Email'
              type='email'
            />

            <MyTextInput
              name='password1'
              type='password'
              placeholder='password'
              label='Password'
            />

            <MyTextInput
              name='password2'
              type='password'
              placeholder='repeat password'
              label='Password'
            />
            <button type='submit'>Create</button>
            <button type='button' onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

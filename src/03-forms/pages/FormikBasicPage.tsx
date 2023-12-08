import { FormikErrors, useFormik } from 'formik';
import '../style/style.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ email, firstName, lastName }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = 'first name is required';
    } else if (firstName.length > 15) {
      errors.firstName = 'fist name must be 15 characters or less';
    }

    if (!lastName) {
      errors.lastName = 'last name is required';
    } else if (lastName.length > 10) {
      errors.lastName = 'last name must be 10 characters or less';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>Firs Name</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          value={values.firstName}
          onChange={handleChange}
        />
        <span>fist name is required</span>

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          value={values.lastName}
          onChange={handleChange}
        />
        <span>last name is required</span>

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={values.email}
          onChange={handleChange}
        />
        <span>email is required</span>
        <span>check for a valid email</span>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

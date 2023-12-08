import { FormikErrors, useFormik } from 'formik';
import '../style/style.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
};

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
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues,
      validate,
      onSubmit,
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
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

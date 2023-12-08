import { useFormik } from 'formik';
import * as Yup from 'yup';
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

export const FormikYupPage = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'should to have 15 character or less')
      .required('required'),
    lastName: Yup.string()
      .max(10, 'should to have 10 character or less')
      .required('required'),
    email: Yup.string().email('invalid email').required('required'),
  });

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  return (
    <div>
      <h1>Formik YupTutorial</h1>

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

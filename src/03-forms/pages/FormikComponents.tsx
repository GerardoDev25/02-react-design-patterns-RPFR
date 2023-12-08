import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
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

export const FormikComponents = () => {
  const onSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    console.log(formikHelpers);
  };

  const validationSchema: Yup.ObjectSchema<FormValues> = Yup.object({
    firstName: Yup.string()
      .max(15, 'should to have 15 character or less')
      .required('required'),
    lastName: Yup.string()
      .max(10, 'should to have 10 character or less')
      .required('required'),
    email: Yup.string().email('invalid email').required('required'),
  });

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            <label htmlFor='firstName'>Firs Name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email</label>
            <Field name='email' type='text' />
            <ErrorMessage name='email' component='span' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

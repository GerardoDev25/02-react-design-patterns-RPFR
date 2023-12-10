import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../style/style.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
  jobType: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: '',
};

export const FormikComponents = () => {
  const onSubmit = (
    values: FormValues
    // formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    // console.log(formikHelpers);
  };

  // const validationSchema: Yup.ObjectSchema<FormValues> = Yup.object({
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'should to have 15 character or less')
      .required('required'),
    lastName: Yup.string()
      .max(10, 'should to have 10 character or less')
      .required('required'),
    email: Yup.string().email('invalid email').required('required'),
    terms: Yup.boolean()
      .oneOf<boolean>([true], 'terms are required')
      .required('required'),
    jobType: Yup.string()
      .notOneOf(['it-jr'], 'this option is not allow')
      .required('required'),
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

            <label htmlFor='email'>Email Address</label>
            <Field name='email' type='text' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='jobType'>job Type</label>
            <Field name='jobType' as='select'>
              <option value=''>Pick Something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-Sr'>It-Sr</option>
              <option value='it-Jr'>It-Jr</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms and conditions
            </label>
            <ErrorMessage name='terms' component='span' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

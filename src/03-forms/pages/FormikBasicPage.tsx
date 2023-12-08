import { useFormik } from 'formik';
import '../style/style.css';
export const FormikBasicPage = () => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      fistName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='fistName'>Firs Name</label>
        <input
          type='text'
          name='fistName'
          id='fistName'
          value={values.fistName}
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

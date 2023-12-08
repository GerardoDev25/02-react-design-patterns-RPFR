import '../style/style.css';
export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate>
        <label htmlFor='fistName'>Firs Name</label>
        <input type='text' name='fistName' id='fistName' />
        <span>fist name is required</span>

        <label htmlFor='lastName'>Last Name</label>
        <input type='text' name='lastName' id='lastName' />
        <span>last name is required</span>

        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <span>email is required</span>
        <span>check for a valid email</span>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

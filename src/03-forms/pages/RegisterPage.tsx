import '../style/style.css';

export const RegisterPage = () => {
  return (
    <div>
      <h1>register Page</h1>
      <form>
        <input type='text' placeholder='name' />
        <input type='email' placeholder='email' />
        <input type='password' placeholder='password' />
        <input type='password' placeholder='repeat password' />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

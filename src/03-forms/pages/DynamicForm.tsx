import { Formik, Form } from 'formik';
import formJson from '../data/custome-form.json';
import { MyTextInput } from '../components';

const initalValues = {
  name: '',
};

export const DynamicForm = () => {
  const onSubmit = (values: any): void => {
    console.log(values);
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik initialValues={initalValues} onSubmit={onSubmit}>
        {() => (
          <Form>
            {formJson.map(({ type, name, placeholder, label }) => {
              return (
                <MyTextInput
                  key={name}
                  type={type as any}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              );
            })}

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

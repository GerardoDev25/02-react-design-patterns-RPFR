import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import formJson from '../data/custome-form.json';
import { MySelect, MyTextInput } from '../components';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  // * fill initialValues's values
  initialValues[input.name] = input.value;

  //* fill validations fields
  if (!input.validations) continue;

  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('this field is required');
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  const onSubmit = (values: any): void => {
    console.log(values);
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type == 'input' || type == 'password' || type == 'email')
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              else if (type == 'select')
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value=''>Select an Option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              throw new Error(`Type: ${type} is not support`);
            })}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

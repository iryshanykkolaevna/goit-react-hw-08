import { Field, Form, Formik } from 'formik';
import { ErrorMessage } from 'formik';
import css from './RegisterForm.module.css';
import { AiOutlineUserAdd } from 'react-icons/ai';
import * as yup from 'yup';

const RegisterForm = ({onRegister}) => {

  const handleSubmit = (data, formActions) => {
    onRegister(data);
    formActions.resetForm();
  };

  const userRegisterSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('User name is required!'),
    email: yup
      .string()
      .min(3, 'Too Short!')
      .email('Must be a valid email!')
      .required('Email is equired'),
    password: yup.string().min(8, 'Too Short!').required('Password is equired'),
  });

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={userRegisterSchema}
      >
        <Form className={css.form}>
          <h2>Register</h2>
          <label className={css.label}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Tom Davis "
          ></Field>
          <span className={css.errorMessage}>
            <ErrorMessage name="name" as="span" />
          </span>

          <label className={css.label}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="devison@gmail.com"
          ></Field>
          <span className={css.errorMessage}>
            <ErrorMessage name="email" as="span" />
          </span>

          <label className={css.label}>Password</label>
          <Field
            className={css.field}
            type="password"
            name="password"
            placeholder="Enter your password"
          ></Field>
          <span className={css.errorMessage}>
            <ErrorMessage name="password" as="span" />
          </span>

          <button className={css.addBtn} type="submit">
            Sign up <AiOutlineUserAdd size={'20'} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
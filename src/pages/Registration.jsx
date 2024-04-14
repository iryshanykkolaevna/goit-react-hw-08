import DocumentTitle from '../components/DocumentTitle';

import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function Register() {
    const dispatch = useDispatch();

    const onRegister = (formData) => {
        dispatch(register(formData));
    }

  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
          <RegisterForm onRegister={ onRegister} />
    </div>
  );
}
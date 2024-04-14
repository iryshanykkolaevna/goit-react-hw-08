import DocumentTitle from '../components/DocumentTitle';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import LoginForm from '../components/LoginForm/LoginForm';

export default function Login() {
  const dispatch = useDispatch();

  const onLogin = formData => {
    dispatch(logIn(formData));
  };

  return (
    <div>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}
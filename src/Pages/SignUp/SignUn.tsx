import { useLocation } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import FormSignUp from '../FormSignUp/FormSignUp';
import { useAppDispatch } from '../../store/store';
import useAuth from '../../hooks/userAuth';

export default function SignUp() {
  const { email, password } = useAuth();
  const location = useLocation();
  const dispatch = useAppDispatch();

  function handleRegister() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  }

  return (
    <div className='wrapper-global'>
      <SectionHeader title='Sign In' />
      <FormSignUp location={location.pathname} handleClick={handleRegister} />
    </div>
  );
}

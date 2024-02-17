import { useLocation } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import FormSignUp from '../FormSignUp/FormSignUp';
import { useAppDispatch } from '../../store/store';
import { setUser } from '../../store/userSlice';

export default function FormSignIn() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  function handleLogin(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  }

  return (
    <div className='wrapper-global'>
      <SectionHeader title='Sign In' />
      <FormSignUp location={location.pathname} handleClick={handleLogin} />
    </div>
  );
}

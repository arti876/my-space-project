import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import FormSignUp from '../FormSignUp/FormSignUp';
import { useAppDispatch } from '../../store/store';
import { loginUser } from '../../store/userSlice';
import { RoutePath } from '../..';

export default function FormSignIn() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLogin(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user, _tokenResponse }) => {
        dispatch(
          loginUser({
            id: user.uid,
            email: user.email,
            token: user.accessToken,
            isAuth: _tokenResponse.registered,
          }),
        );
        navigate(RoutePath.SUCCESS);
      })
      .catch((e) => {
        alert(e);
      });
  }

  return (
    <div className='wrapper-global'>
      <SectionHeader title='Sign In' />
      <FormSignUp location={location.pathname} handleClick={handleLogin} />
    </div>
  );
}

import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import FormAuth from '../../components/FormAuth/FormAuth';
import { useAppDispatch } from '../../store/store';
import { registerUser } from '../../store/userSlice';
import { RoutePath } from '../..';

export default function SignUp() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleRegister(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          registerUser({
            firstName,
            lastName,
            id: user.uid,
            email: user.email,
            token: user.accessToken,
          }),
        );
        navigate(RoutePath.SIGN_IN);
      })
      .catch((e) => {
        alert(e);
      });
  }

  return (
    <div className='wrapper-global'>
      <SectionHeader title='Sign In' />
      <FormAuth location={location.pathname} handleClick={handleRegister} />
    </div>
  );
}

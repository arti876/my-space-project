import { Navigate, Outlet } from 'react-router-dom';
import { useGlobalContext } from '../Provider/GlobalProvider';

export default function PrivatePoute() {
  const {
    SuccessfulLogin: { login },
  } = useGlobalContext();

  return login ? <Outlet /> : <Navigate to='sign-in' />;
}

import { Navigate, Outlet } from 'react-router-dom';
import { useGlobalContext } from '../Provider/GlobalProvider';

export default function PrivateRoute() {
  const {
    SuccessfulLogin: { login },
  } = useGlobalContext();

  return login ? <Outlet /> : <Navigate to='sign-in' />;
}

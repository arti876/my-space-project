import { Navigate, Outlet } from 'react-router-dom';
import { RoutePath } from '..';
import useAuth from '../hooks/userAuth';

export default function PrivateRoute() {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={RoutePath.SIGN_IN} />;
}

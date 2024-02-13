import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { RoutePath } from '..';

export default function PrivateRoute() {
  const { authorized } = useAppSelector((state) => state.auth);

  return authorized ? <Outlet /> : <Navigate to={RoutePath.SIGN_IN} />;
}

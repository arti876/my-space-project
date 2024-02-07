import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/store';

export default function PrivateRoute() {
  const { authorized } = useAppSelector((state) => state.auth);

  return authorized ? <Outlet /> : <Navigate to='sign-in' />;
}

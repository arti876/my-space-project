import { useAppSelector } from '../store/store';

export default function useAuth() {
  const { firstName, lastName, email, password, id, token } = useAppSelector(
    (state) => state.user,
  );

  return {
    isAuth: !!email,
    firstName,
    lastName,
    email,
    password,
    id,
    token,
  };
}

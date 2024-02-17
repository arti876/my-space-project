import { useAppSelector } from '../store/store';

export default function useAuth() {
  const { firstName, lastName, email, id, token, isAuth } = useAppSelector(
    (state) => state.user,
  );

  return {
    firstName,
    lastName,
    email,
    id,
    token,
    isAuth,
  };
}

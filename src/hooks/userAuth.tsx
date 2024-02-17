import { useAppSelector } from '../store/store';

export default function useAuth() {
  const { firstName, lastName, email, id, token, isAuth } = useAppSelector(
    (state) => state.user,
  );

  return {
    // isAuth: !!email,
    firstName,
    lastName,
    email,
    id,
    token,
    isAuth,
  };
}

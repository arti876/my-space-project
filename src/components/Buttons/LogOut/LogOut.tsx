import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/store';
import { RoutePath } from '../../..';
import { removeUser } from '../../../store/userSlice';

interface LogOutProps {
  className: string;
}

export default function LogOut({ className }: LogOutProps) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  function handleClick() {
    dispatch(removeUser());
    navigate(RoutePath.ROOT, { replace: true });
  }

  return (
    <button
      className={className}
      type='button'
      name='log-out'
      onClick={handleClick}
    >
      Log Out
    </button>
  );
}

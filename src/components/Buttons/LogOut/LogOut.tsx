import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/store';
import { toggleAuth } from '../../../store/authSlise';
import { RoutePath } from '../../..';

interface LogOutProps {
  className: string;
}

export default function LogOut({ className }: LogOutProps) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  function handleClick() {
    dispatch(toggleAuth());
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

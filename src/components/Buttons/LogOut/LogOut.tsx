import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../Provider/GlobalProvider';

interface LogOutProps {
  className: string;
}

export default function LogOut({ className }: LogOutProps) {
  const {
    SuccessfulLogin: { setLogin },
  } = useGlobalContext();

  const navigate = useNavigate();

  function handleClick() {
    setLogin(false);
    navigate('my-space-project', { replace: true });
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

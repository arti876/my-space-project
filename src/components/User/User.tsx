import { useMemo } from 'react';
import style from './User.module.scss';

interface UserProps {
  firstName: string;
  lastName: string;
}

export default function User({
  firstName = 'Anonymous ',
  lastName = 'User',
}: UserProps) {
  const getInitials = useMemo(() => {
    return (
      firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase()
    );
  }, [firstName, lastName]);

  return (
    <div className={style.wrapper}>
      <div className={style.initials}>{getInitials}</div>
      <div className={style.fullname}>{`${firstName} ${lastName}`}</div>
    </div>
  );
}

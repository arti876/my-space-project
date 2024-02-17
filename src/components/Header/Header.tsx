import { Link } from 'react-router-dom';
import User from '../User/User';
import style from './Header.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import Icons from '../Icons/Icons';
import ButtonSearch from '../Buttons/ButtonSearch/ButtonSearch';
import useAuth from '../../hooks/userAuth';

export default function Header() {
  const { isAuth, firstName, lastName } = useAuth();

  return (
    <div className={style.wrapper}>
      <Hamburger />
      <div className={style.container}>
        <ButtonSearch />
        {isAuth ? (
          <User firstName={firstName} lastName={lastName} />
        ) : (
          <Link to='sign-in' className={style['btn-ico']}>
            <Icons className={style['ico-user']} id='user' />
          </Link>
        )}
      </div>
    </div>
  );
}

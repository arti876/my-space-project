import { Link } from 'react-router-dom';
import User from '../User/User';
import style from './Header.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import Icons from '../Icons/Icons';
import ButtonSearch from '../Buttons/ButtonSearch/ButtonSearch';
import { useAppSelector } from '../../store/store';

export default function Header() {
  const { authorized } = useAppSelector((state) => state.auth);

  return (
    <div className={style.wrapper}>
      <Hamburger />
      <div className={style.container}>
        <ButtonSearch />
        {authorized ? (
          <User />
        ) : (
          <Link to='sign-in' className={style['btn-ico']}>
            <Icons className={style['ico-user']} id='user' />
          </Link>
        )}
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import User from '../User/User';
import { useGlobalContext } from '../../Provider/GlobalProvider';
import style from './Header.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import Icons from '../Icons/Icons';
import ButtonSearch from '../Buttons/ButtonSearch/ButtonSearch';

export default function Header() {
  const {
    SuccessfulLogin: { login },
  } = useGlobalContext();

  return (
    <div className={style.wrapper}>
      <Hamburger />
      <div className={style.container}>
        <ButtonSearch />
        {login ? (
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

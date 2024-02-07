import { useEffect, useRef, useState } from 'react';
import style from './Hamburger.module.scss';
import User from '../User/User';
import BautttonTheme from '../Buttons/ButtonTheme/ButtonTheme';
import { useGlobalContext } from '../../Provider/GlobalProvider';
import LogOut from '../Buttons/LogOut/LogOut';
import LinkHamb from '../CustomLink/LinkHamb';

export default function Hamburger() {
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const refHamb = useRef<HTMLButtonElement | null>(null);
  const {
    SuccessfulLogin: { login },
  } = useGlobalContext();

  function handleClick(e: Event) {
    const target = e.target as HTMLButtonElement;
    if (refHamb.current && !refHamb.current.contains(target)) {
      setHamburger(false);
    } else {
      setHamburger(!hamburger);
    }
  }

  function hoverMouse() {
    setHover(!hover);
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <>
      <button
        ref={refHamb}
        type='button'
        name='hamburger'
        className={`${style.hamb} ${'hover'}`}
        onMouseEnter={hoverMouse}
        onMouseLeave={hoverMouse}
      >
        <span
          className={`${style['hamb-ico-top']} ${
            hamburger && style['active-top']
          } ${hover && style['hover-top']}`}
        />
        <span
          className={`${style['hamb-ico-mid']} ${
            hamburger && style['active-mid']
          } ${hover && style['hover-mid']}`}
        />
        <span
          className={`${style['hamb-ico-bot']} ${
            hamburger && style['active-bot']
          } ${hover && style['hover-bot']}`}
        />
      </button>
      {hamburger && (
        <div className={style['hamburger-menu']}>
          {!login && (
            <LinkHamb to='sign-in' className={style['btn-menu']}>
              Sig In
            </LinkHamb>
          )}
          {login && (
            <>
              <User />
              <LinkHamb to='blog/all' className={style['btn-menu']}>
                Blog
              </LinkHamb>
              <LinkHamb to='add-post' className={style['btn-menu']}>
                Add post
              </LinkHamb>
              <LinkHamb to='profile' className={style['btn-menu']}>
                Profile
              </LinkHamb>
            </>
          )}
          <LinkHamb to='posts' className={style['btn-menu']}>
            Posts
          </LinkHamb>
          <LinkHamb to='advanced-level' className={style['btn-menu']}>
            Advanced level
          </LinkHamb>
          <div className={style['btn-theme']}>
            <BautttonTheme />
          </div>
          {login && (
            <LogOut className={`${style['btn-menu']} ${style.logout}`} />
          )}
        </div>
      )}
    </>
  );
}

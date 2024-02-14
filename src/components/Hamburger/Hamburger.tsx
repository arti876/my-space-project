import { useEffect, useRef, useState } from 'react';
import style from './Hamburger.module.scss';
import User from '../User/User';
import BautttonTheme from '../Buttons/ButtonTheme/ButtonTheme';
import LogOut from '../Buttons/LogOut/LogOut';
import LinkHamb from '../CustomLink/LinkHamb';
import { useAppSelector } from '../../store/store';
import { RoutePath } from '../..';

export default function Hamburger() {
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const refHamb = useRef<HTMLButtonElement | null>(null);
  const { authorized } = useAppSelector((state) => state.auth);

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
          {!authorized && (
            <LinkHamb to={RoutePath.SIGN_IN} className={style['btn-menu']}>
              Sig In
            </LinkHamb>
          )}
          {authorized && (
            <>
              <User />
              <LinkHamb to={RoutePath.BLOG_ALL} className={style['btn-menu']}>
                Blog
              </LinkHamb>
              <LinkHamb to={RoutePath.ADD_POST} className={style['btn-menu']}>
                Add post
              </LinkHamb>
              <LinkHamb to={RoutePath.PROFILE} className={style['btn-menu']}>
                Profile
              </LinkHamb>
            </>
          )}
          <LinkHamb to={RoutePath.POSTS} className={style['btn-menu']}>
            Posts
          </LinkHamb>
          <LinkHamb to={RoutePath.ADVANCED_LEVEL} className={style['btn-menu']}>
            Advanced level
          </LinkHamb>
          <LinkHamb to={RoutePath.TESTING} className={style['btn-menu']}>
            Testing
          </LinkHamb>
          <div className={style['btn-theme']}>
            <BautttonTheme />
          </div>
          {authorized && (
            <LogOut className={`${style['btn-menu']} ${style.logout}`} />
          )}
        </div>
      )}
    </>
  );
}

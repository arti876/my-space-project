import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import style from './Hamburger.module.scss';
import User from '../User/User';
import BautttonTheme from '../Buttons/ButtonTheme/ButtonTheme';
import LogOut from '../Buttons/LogOut/LogOut';
import LinkHamb from '../CustomLink/LinkHamb';
import { RoutePath } from '../..';
import useAuth from '../../hooks/userAuth';

const styleModal = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    justifyContent: 'center',
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  title: { fontSize: '24px', margin: '0 auto' },
  subtitle: { fontSize: '14px', display: 'flex', gap: '15px' },
  span: { fontSize: '14px', color: '#2231aa' },
};

export default function Hamburger() {
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const refHamb = useRef<HTMLButtonElement | null>(null);
  const { isAuth, firstName, lastName, email } = useAuth();

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
          {!isAuth && (
            <LinkHamb to={RoutePath.SIGN_IN} className={style['btn-menu']}>
              Sig In
            </LinkHamb>
          )}
          {isAuth && (
            <>
              <User firstName={firstName} lastName={lastName} />
              <LinkHamb to={RoutePath.BLOG_ALL} className={style['btn-menu']}>
                Blog
              </LinkHamb>
              <LinkHamb to={RoutePath.ADD_POST} className={style['btn-menu']}>
                Add post
              </LinkHamb>
              <button
                type='button'
                className={style['btn-menu']}
                onClick={() => handleOpen()}
              >
                Profile
              </button>
            </>
          )}
          <LinkHamb to={RoutePath.POSTS} className={style['btn-menu']}>
            Posts
          </LinkHamb>
          <LinkHamb to={RoutePath.ADVANCED_LEVEL} className={style['btn-menu']}>
            Advanced level
          </LinkHamb>
          <div className={style['btn-theme']}>
            <BautttonTheme />
          </div>
          {isAuth && (
            <LogOut className={`${style['btn-menu']} ${style.logout}`} />
          )}
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={styleModal.box}>
          <div style={styleModal.title}>Your profile</div>
          <div style={styleModal.subtitle}>
            Name:
            <span style={styleModal.span}>{`${firstName} ${lastName}`}</span>
          </div>
          <div style={styleModal.subtitle}>
            Email:<span style={styleModal.span}>{email}</span>
          </div>
        </Box>
      </Modal>
    </>
  );
}

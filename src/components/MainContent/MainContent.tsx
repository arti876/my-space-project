import { useLocation } from 'react-router-dom';
import style from './MainContent.module.scss';
import ButtonBack from '../Buttons/ButtonBack/ButtonBack';

interface MainContentProps {
  children: JSX.Element;
  title: string;
}

export default function MainContent({ children, title }: MainContentProps) {
  const location = useLocation();

  return (
    <div className={style.wrapper}>
      {location.pathname !== '/success' && <ButtonBack />}
      <p className={style['sign-in']}>{title}</p>
      {children}
    </div>
  );
}

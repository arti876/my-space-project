import { useLocation } from 'react-router-dom';
import style from './SectionHeader.module.scss';
import ButtonBack from '../Buttons/ButtonBack/ButtonBack';

interface MainContentProps {
  title: string;
}

export default function SectionHeader({ title }: MainContentProps) {
  const location = useLocation();

  return (
    <div className={style.wrapper}>
      {location.pathname !== '/success' && <ButtonBack />}
      <p className={style['sign-in']}>{title}</p>
    </div>
  );
}

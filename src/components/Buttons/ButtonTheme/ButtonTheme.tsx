import style from './ButtonTheme.module.scss';
import { useGlobalContext } from '../../../Provider/GlobalProvider';
import { Theme } from '../../..';
import Icons from '../../Icons/Icons';

export default function BautttonTheme() {
  const {
    ToggleTheme: { theme, setTeme },
  } = useGlobalContext();

  function handleClick() {
    setTeme(theme === Theme.Light ? Theme.Dark : Theme.Light);
  }

  return (
    <button
      className={style.btn}
      type='button'
      name='toggle-theme'
      onClick={handleClick}
    >
      <Icons className={style.ico} id={theme} />
    </button>
  );
}

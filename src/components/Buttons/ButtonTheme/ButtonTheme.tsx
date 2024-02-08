import style from './ButtonTheme.module.scss';
import { useThemeContext } from '../../../Provider/ThemeProvider';
import { Theme } from '../../..';
import Icons from '../../Icons/Icons';

export default function BautttonTheme() {
  const { theme, setTeme } = useThemeContext();

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

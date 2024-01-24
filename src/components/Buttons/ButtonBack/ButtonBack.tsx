import { useNavigate } from 'react-router-dom';
import style from './ButtonBack.module.scss';

export default function ButtonBack() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button type='button' onClick={goBack} className={style.back}>
      Back
    </button>
  );
}

import style from './ButtonBookmark.module.scss';
import Icons from '../../Icons/Icons';
import { useAppDispatch } from '../../../store/store';
import { toggleInFavorite } from '../../../store/postSlice';

interface ButtonBookmarkProps {
  className: string;
  idPost: string | number;
  inFavorite: boolean;
  children: string | JSX.Element;
}

export default function ButtonBookmark({
  className = '',
  idPost,
  inFavorite,
  children = '',
}: ButtonBookmarkProps) {
  const dispatch = useAppDispatch();

  function handleClick() {
    const idPostNumber = Number(idPost);
    dispatch(toggleInFavorite(idPostNumber));
  }

  return (
    <button
      className={className}
      type='button'
      name='bookmark'
      onClick={handleClick}
    >
      <Icons
        className={`${style['ico-bookmark']} ${inFavorite && style['ico-bookmark-active']}`}
        id='bookmark'
      />
      {children}
    </button>
  );
}
